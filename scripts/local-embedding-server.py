from __future__ import annotations

import argparse
import json
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Local embedding HTTP server for Be In The Know."
    )
    parser.add_argument(
        "--model",
        default="BAAI/bge-small-en-v1.5",
        help="SentenceTransformers model name.",
    )
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=5055)
    return parser.parse_args()


def make_handler(model_name: str):
    from sentence_transformers import SentenceTransformer

    model = SentenceTransformer(model_name)

    class LocalEmbeddingHandler(BaseHTTPRequestHandler):
        def _send_json(self, status: int, payload: dict[str, Any]) -> None:
            body = json.dumps(payload).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self) -> None:
            if self.path != "/health":
                self._send_json(404, {"error": "not_found"})
                return

            dimension = model.get_sentence_embedding_dimension()
            self._send_json(
                200,
                {
                    "status": "ok",
                    "model": model_name,
                    "dimensions": dimension,
                },
            )

        def do_POST(self) -> None:
            if self.path != "/embed":
                self._send_json(404, {"error": "not_found"})
                return

            content_length = int(self.headers.get("Content-Length", "0"))
            raw_body = self.rfile.read(content_length)

            try:
                payload = json.loads(raw_body)
                texts = payload.get("texts")
                if texts is None and isinstance(payload.get("text"), str):
                    texts = [payload["text"]]
                if not isinstance(texts, list) or not all(
                    isinstance(text, str) for text in texts
                ):
                    raise ValueError("Expected JSON body with text or texts.")
            except Exception as error:
                self._send_json(400, {"error": str(error)})
                return

            embeddings = model.encode(
                texts,
                normalize_embeddings=True,
                show_progress_bar=False,
            )
            embedding_list = [embedding.tolist() for embedding in embeddings]
            dimension = len(embedding_list[0]) if embedding_list else 0

            self._send_json(
                200,
                {
                    "model": model_name,
                    "dimensions": dimension,
                    "embeddings": embedding_list,
                },
            )

        def log_message(self, format: str, *args: Any) -> None:
            return

    return LocalEmbeddingHandler


def main() -> None:
    args = parse_args()
    handler = make_handler(args.model)
    server = ThreadingHTTPServer((args.host, args.port), handler)
    print(
        json.dumps(
            {
                "status": "ready",
                "url": f"http://{args.host}:{args.port}",
                "model": args.model,
            }
        ),
        flush=True,
    )
    server.serve_forever()


if __name__ == "__main__":
    main()
