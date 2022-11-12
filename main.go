package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
	"log"
)

type goApp struct {
	app.Compo
}

func (g *goApp) Render() app.UI {
	return app.H1().Text("Simple app created with go-app")
}

func main() {
	app.Route("/", &goApp{})
	app.RunWhenOnBrowser()

	if err := app.GenerateStaticWebsite(".", &app.Handler{
		Name:        "Go App",
		Description: "Go App Example",
		Resources:   app.GitHubPages("playground"),
	}); err != nil {
		log.Fatal(err)
	}
}
