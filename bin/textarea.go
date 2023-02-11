package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
	"go/format"
	"go/scanner"
)

const (
	defaultContent = `package main

import (
	"fmt"
	"syscall/js"
)

func main() {
	fmt.Println("Hello, playground")
	js.Global().Call("alert", "Hello, JavaScript")
	println("Hello, JS console")
}`
)

type textarea struct {
	app.Compo
	content string
	errors  []string
}

func (t *textarea) Render() app.UI {
	return app.Textarea().
		ID("code").
		AutoFocus(true).
		Attr("autocomplete", false).
		Attr("autocorrect", false).
		Attr("autocapitalize", false).
		Spellcheck(false).
		OnChange(t.ValueTo(&t.content)).
		Body(app.Text(t.content))
}

func (t *textarea) OnMount(ctx app.Context) {
	ctx.Handle("format", t.handleFormat)
	t.content = defaultContent
}

func (t *textarea) handleFormat(ctx app.Context, _ app.Action) {
	source, err := format.Source([]byte(t.content))
	if err != nil {
		errLines := make([]*line, 0)
		if list, ok := err.(scanner.ErrorList); ok {
			for _, e := range list {
				errLines = append(errLines, &line{content: e.Error(), kind: "error"})
			}
		} else {
			errLines = append(errLines, &line{content: err.Error(), kind: "error"})
		}
		ctx.NewActionWithValue("output", errLines)
		return
	}
	t.content = string(source)
	t.JSValue().Set("value", t.content)
	ctx.NewActionWithValue("output", []*line{})
}
