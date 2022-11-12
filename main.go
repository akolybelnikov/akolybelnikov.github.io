package main

import (
	"log"
	"net/http"
	"github.com/maxence-charriere/go-app/v9/pkg/app"
)

func main() {
	app.Route("/", &goApp{})
	
	app.RunWhenOnBrowser()

	http.Handle("/", &app.Handler{
		Name: "Go App",
		Description: "Go App example",
	})

	if err := app.GenerateStaticWebsite(".", &app.Handler{
		Name: "Go App",
		Description: "Go App Example",
	}); err != nil {
		log.Fatal(err)
	}
}
