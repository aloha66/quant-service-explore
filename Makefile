SHELL := /bin/sh

GO ?= go
BUF ?= buf
GEN_GO_MODULE := github.com/aloha66/quant-service/gen/go

.PHONY: proto proto-buf proto-deps clean-proto gateway-run gateway-build

proto: proto-buf

proto-buf:
	$(BUF) generate
	# Rebuild from the gateway's locked versions, even when gen/ was deleted.
	cp gateway/go.mod gen/go/go.mod
	cp gateway/go.sum gen/go/go.sum
	cd gen/go && $(GO) mod edit -module=$(GEN_GO_MODULE) -droprequire=$(GEN_GO_MODULE) -dropreplace=$(GEN_GO_MODULE) && $(GO) mod tidy
	# Ensure all python directories have __init__.py
	@find gen/python -type d -not -path "*/google*" -exec touch {}/__init__.py \;

proto-deps:
	$(BUF) dep update

clean-proto:
	rm -rf gen/python gen/openapi gen/go

gateway-build:
	mkdir -p .build
	cd gateway && $(GO) build -mod=readonly -o ../.build/grpc_gateway ./cmd/grpc_gateway

gateway-run:
	cd gateway && $(GO) run -mod=readonly ./cmd/grpc_gateway
