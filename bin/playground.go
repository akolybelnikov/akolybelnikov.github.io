package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

type playground struct {
	app.Compo
	cmp *gopherJSCompiler
}

func (p *playground) OnMount(ctx app.Context) {
	p.cmp = newGopherJSCompiler(ctx)
	ctx.Handle("compile", p.cmp.handleCompile)
}

func (p *playground) Render() app.UI {
	return app.Main().
		Body(
			app.Div().
				ID("banner").
				Body(&banner{}),
			app.Div().
				ID("content").
				Class("box").
				Body(app.Div().
					ID("input").
					Class("box").
					Class("yellow").
					Body(&textarea{})),
			app.Div().
				ID("output").
				Class("box").
				Body(&output{}),
		)
}
