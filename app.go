package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

type goApp struct {
	app.Compo
}

func (g *goApp) Render() app.UI {
	return app.H1().Text("Simple app created with go-app")
}
