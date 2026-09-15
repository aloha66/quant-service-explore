package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"

	hellov1 "github.com/aloha66/quant-service/gen/go/hello/v1"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/protobuf/encoding/protojson"
)

func getenv(key string, fallback string) string {
	v := os.Getenv(key)
	if v == "" {
		return fallback
	}
	return v
}

func incomingHeaderMatcher(key string) (string, bool) {
	if strings.EqualFold(key, "X-Trace-Id") {
		return "x-trace-id", true
	}
	return runtime.DefaultHeaderMatcher(key)
}

func main() {
	httpAddr := getenv("GATEWAY_HTTP_ADDR", ":8000")
	backendAddr := getenv("GATEWAY_GRPC_BACKEND_ADDR", "127.0.0.1:50051")

	mux := runtime.NewServeMux(
		runtime.WithIncomingHeaderMatcher(incomingHeaderMatcher),
		runtime.WithMarshalerOption(runtime.MIMEWildcard, &runtime.JSONPb{
			MarshalOptions: protojson.MarshalOptions{UseProtoNames: true},
		}),
	)
	dialOpts := []grpc.DialOption{
		grpc.WithTransportCredentials(insecure.NewCredentials()),
	}

	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()
	if err := hellov1.RegisterHelloServiceHandlerFromEndpoint(ctx, mux, backendAddr, dialOpts); err != nil {
		log.Fatalf("register hello service gateway handler: %v", err)
	}

	server := &http.Server{
		Addr:              httpAddr,
		Handler:           mux,
		ReadHeaderTimeout: 10 * time.Second,
	}

	serveError := make(chan error, 1)
	go func() { serveError <- server.ListenAndServe() }()
	log.Printf("grpc-gateway listening on %s -> grpc backend %s", httpAddr, backendAddr)

	select {
	case err := <-serveError:
		if err != nil && err != http.ErrServerClosed {
			log.Fatalf("start gateway http server: %v", err)
		}
	case <-ctx.Done():
		shutdownCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()
		if err := server.Shutdown(shutdownCtx); err != nil {
			log.Printf("gateway shutdown: %v", err)
		}
	}
}
