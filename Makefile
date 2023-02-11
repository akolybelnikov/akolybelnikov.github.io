build:
	@GOARCH=wasm GOOS=js go build -o ./playground/web/app.wasm ./bin
	@go build -o ./playground/playground ./bin

run: build
	cd playground; ./playground local

build-github: build
	@cd playground; ./playground github

github: build-github clean

clean:
	@go clean ./...
	@-rm ./playground/playground

serve:
	@cd playground; gopherjs serve
