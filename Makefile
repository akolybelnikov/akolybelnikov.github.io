build:
	GOARCH=wasm GOOS=js go build -o ./playground/web/app.wasm
	go build -o ./playground/cmd/playground

run: build
	cd playground; ./cmd/playground
