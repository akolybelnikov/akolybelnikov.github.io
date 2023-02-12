package main

import (
	"bytes"
	"github.com/gopherjs/gopherjs/compiler"
	"github.com/maxence-charriere/go-app/v9/pkg/app"
	"go/ast"
	"go/parser"
	"go/token"
	"go/types"
	"runtime"
)

type gopherJSCompiler struct {
	packages  map[string]*compiler.Archive
	importCtx *compiler.ImportContext
	fileSet   *token.FileSet
	toLoad    map[string]struct{}
	received  int
}

type cmpAction struct {
	code     string
	loadOnly bool
}

func newGopherJSCompiler(ctx app.Context) *gopherJSCompiler {
	cmp := &gopherJSCompiler{
		packages: make(map[string]*compiler.Archive),
		fileSet:  token.NewFileSet(),
		toLoad:   make(map[string]struct{}),
	}
	cmp.importCtx = &compiler.ImportContext{
		Packages: make(map[string]*types.Package),
		Import: func(path string) (*compiler.Archive, error) {
			if pkg, found := cmp.packages[path]; found {
				return pkg, nil
			}
			cmp.toLoad[path] = struct{}{}
			return &compiler.Archive{}, nil
		},
	}
	setUpJSEnvironment(ctx)

	return cmp
}

func setUpJSEnvironment(ctx app.Context) {
	app.Window().Set("goPanicHandler", app.FuncOf(func(this app.Value, args []app.Value) interface{} {
		errOutput(ctx, args[0].String())
		return nil
	}))
	app.Window().Set("goPrintToConsole", app.FuncOf(func(this app.Value, args []app.Value) interface{} {
		ctx.NewActionWithValue("output", []*line{{kind: "out", content: args[0].String()}})
		return nil
	}))
}

func (c *gopherJSCompiler) handleCompile(ctx app.Context, a app.Action) {
	action := a.Value.(cmpAction)
	code, loadOnly := action.code, action.loadOnly

	c.toLoad = make(map[string]struct{})

	file, err := parser.ParseFile(c.fileSet, "prog.go",
		[]byte(code), parser.ParseComments)
	if err != nil {
		errLines := parseErrors(err)
		ctx.NewActionWithValue("output", errLines)
		return
	}

	mainPkg, err := compiler.Compile("main",
		[]*ast.File{file}, c.fileSet, c.importCtx, false)
	c.packages["main"] = mainPkg
	if err != nil && len(c.toLoad) == 0 {
		errLines := parseErrors(err)
		ctx.NewActionWithValue("output", errLines)
		return
	}

	var allPkgs []*compiler.Archive
	if len(c.toLoad) == 0 {
		allPkgs, _ = compiler.ImportDependencies(mainPkg, c.importCtx.Import)
	}

	if len(c.toLoad) != 0 {
		c.received = 0
		for path := range c.toLoad {
			go func(path string) {
				app.Window().Call("fetch", "web/pkg/"+path+".a.js").
					Then(func(res app.Value) {
						if res.Get("status").Int() != 200 {
							errOutput(ctx, `failed to load package "`+path+`"`)
							return
						}
						res.Call("arrayBuffer").Then(func(buf app.Value) {
							arr := app.Window().Get("Uint8Array").New(buf)
							bts := make([]byte, arr.Length())
							_ = app.CopyBytesToGo(bts, arr)
							c.packages[path], err = compiler.ReadArchive(path+".a", bytes.NewReader(bts))
							if err != nil {
								errOutput(ctx, err.Error())
								return
							}
							if err = c.packages[path].RegisterTypes(c.importCtx.Packages); err != nil {
								errOutput(ctx, err.Error())
								return
							}
							c.received++
							if c.received == len(c.toLoad) {
								c.handleCompile(ctx, a)
							}
						})
					})
			}(path)
		}
		return
	}

	if !loadOnly {
		jsCode := bytes.NewBuffer(nil)
		jsCode.WriteString("try{\n")
		_ = compiler.WriteProgramCode(allPkgs, &compiler.SourceMapFilter{Writer: jsCode}, runtime.Version())
		jsCode.WriteString("} catch (err) {\ngoPanicHandler(err.message);\n}\n")
		expr := jsCode.String()
		app.Window().Call("eval", app.ValueOf(expr))
	}
}

func errOutput(ctx app.Context, err string) {
	ctx.NewActionWithValue("output", []*line{{kind: "err", content: err}})
}
