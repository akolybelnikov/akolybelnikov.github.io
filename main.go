package main

import (
	"github.com/maxence-charriere/go-app/v9/pkg/app"
	"log"
	"net/http"
)

func main() {
	app.Route("/", &goApp{})

	app.RunWhenOnBrowser()

	http.Handle("/", &app.Handler{
		Name:        "Go App",
		Description: "Go App example",
	})

	if err := app.GenerateStaticWebsite(".", &app.Handler{
		Name:        "Go App",
		Description: "Go App Example",
		Resources:   app.GitHubPages("akolybelnikov/go-app"),
	}); err != nil {
		log.Fatal(err)
	}
}
