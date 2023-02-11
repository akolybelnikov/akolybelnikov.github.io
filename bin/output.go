package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

type line struct {
	content string
	kind    string
}

type output struct {
	app.Compo
	lines []*line
}

func (o *output) Render() app.UI {
	return app.P().Body(
		app.Range(o.lines).Slice(func(i int) app.UI {
			return app.Pre().Text(o.lines[i].content).Class(o.lines[i].kind)
		}))
}

func (o *output) OnMount(ctx app.Context) {
	ctx.Handle("output", o.handleOutput)
}

func (o *output) handleOutput(_ app.Context, a app.Action) {
	o.lines = make([]*line, 0)
	o.lines = append(o.lines, a.Value.([]*line)...)
	//o.JSValue().Set("innerHTML", a.Value.(string))
	//o.JSValue().Set("className", a.Tags.Get("type"))
}
