package main

import (
	"context"
	"fmt"
	"github.com/maxence-charriere/go-app/v9/pkg/app"
	"github.com/maxence-charriere/go-app/v9/pkg/cli"
	"github.com/maxence-charriere/go-app/v9/pkg/errors"
	"github.com/maxence-charriere/go-app/v9/pkg/logs"
	"log"
	"net/http"
	"os"
	"syscall"
)

func main() {
	c := playground{}
	app.Route("/", &c)
	app.RunWhenOnBrowser()

	ctx, cancel := cli.ContextWithSignals(context.Background(),
		os.Interrupt,
		syscall.SIGTERM,
	)
	defer cancel()
	defer exit()

	h := &app.Handler{
		Description: "GopherJS Playground is a place where users can explore GopherJS.",
		Icon: app.Icon{
			Default: "/web/logo.png",
		},
		Name:  "GopherJS Playground",
		Title: "GopherJS Playground",
	}

	cli.Register("local").
		Help(`Launches a server that serves the documentation app in a local environment.`)

	cli.Register("github").
		Help(`Generates the required resources to run playground app on GitHub Pages.`)

	cli.Load()

	switch cli.Load() {
	case "local":
		runLocal(ctx, h)
	case "github":
		generateGitHubPages(ctx, h)
	}
}

func runLocal(ctx context.Context, h http.Handler) {
	app.Logf("%s", logs.New("starting playground app server").
		Tag("port", 8080),
	)

	s := http.Server{
		Addr:    fmt.Sprintf(":%v", 8080),
		Handler: h,
	}

	go func() {
		<-ctx.Done()
		_ = s.Shutdown(context.Background())
	}()

	if err := s.ListenAndServe(); err != nil {
		panic(err)
	}
}

func generateGitHubPages(_ context.Context, h *app.Handler) {
	h.Resources = app.GitHubPages("playground")
	if err := app.GenerateStaticWebsite(".", h, "/"); err != nil {
		log.Fatal(err)
	}
}

func exit() {
	err := recover()
	if err != nil {
		app.Logf("command failed: %s", errors.Newf("%v", err))
		os.Exit(-1)
	}
}
