import http.server
import socketserver
import os
import mimetypes

PORT = 8080
DIRECTORY = os.path.join(os.path.dirname(os.path.abspath(__file__)), "downloaded")

mimetypes.add_type("application/javascript", ".js")
mimetypes.add_type("text/css", ".css")
mimetypes.add_type("application/json", ".json")
mimetypes.add_type("image/svg+xml", ".svg")
mimetypes.add_type("image/webp", ".webp")
mimetypes.add_type("font/woff2", ".woff2")
mimetypes.add_type("model/gltf-binary", ".glb")
mimetypes.add_type("model/gltf+json", ".gltf")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def guess_type(self, path):
        if "api" in path or path.endswith(("/en", "/ckb", "/fa", "/fi", "/kmr")):
            return "application/json"
        return super().guess_type(path)

    def do_GET(self):
        local_path = self.translate_path(self.path)
        if not os.path.exists(local_path) and "." not in os.path.basename(self.path.split("?")[0]):
            self.path = "/index.html"
        return super().do_GET()

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

class ThreadedServer(http.server.ThreadingHTTPServer):
    request_queue_size = 256
    daemon_threads = True

def main():
    print("=======================================================")
    print(" Serving multithreaded reverse-engineered birkar.me at:")
    print(f" http://localhost:{PORT}")
    print(f" Root directory: {DIRECTORY}")
    print("=======================================================")
    
    ThreadedServer.allow_reuse_address = True
    with ThreadedServer(("", PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    main()
