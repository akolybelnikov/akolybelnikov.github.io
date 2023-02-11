package main

import (
	"github.com/gopherjs/gopherjs/compiler"
	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

type banner struct {
	app.Compo
	version string
}

func (b *banner) Render() app.UI {
	return app.Div().
		ID("banner").
		Body(
			app.Span().
				ID("head").
				Body(
					app.Text("playground "),
					app.Small().Text("(GopherJS "+compiler.Version+")"),
				),
			app.Span().
				ID("controls").
				Body(
					app.Button().
						Text("Format").
						OnClick(b.handleFormat),
					app.Button().
						Text("Run").
						OnClick(b.handleRun),
				),
		)
}

func (b *banner) handleFormat(ctx app.Context, _ app.Event) {
	ctx.NewAction("format")
}

func (b *banner) handleRun(ctx app.Context, _ app.Event) {
	ctx.NewAction("run")
}
