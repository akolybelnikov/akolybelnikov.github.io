package main

import "github.com/maxence-charriere/go-app/v9/pkg/app"

type playground struct {
	app.Compo
}

func (p *playground) Render() app.UI {
	return app.Div().Body(
		app.H1().Text("Hello, playground!"),
	)
}
