package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

type output struct {
	app.Compo
}

func (o *output) Render() app.UI {
	return app.Div()
}

func (o *output) OnMount(ctx app.Context) {
	ctx.Handle("output", o.handleOutput)
}

func (o *output) handleOutput(_ app.Context, a app.Action) {
	o.JSValue().Set("innerHTML", a.Value.(string))
	o.JSValue().Set("className", a.Tags.Get("type"))
}
