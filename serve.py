#!/usr/bin/env python3
"""
Local development server for Wayne Trout's portfolio website
Run this script to start a local web server for development and testing
"""

import http.server
import socketserver
import webbrowser
import threading
import time
import os

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server(port=8000):
    """Start the local development server"""
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", port), MyHTTPRequestHandler) as httpd:
        print(f"🚀 Development server running at http://localhost:{port}")
        print(f"🌐 Your portfolio website is now live!")
        print(f"📱 Test on mobile: http://localhost:{port}")
        print(f"🔧 Press Ctrl+C to stop the server")
        
        # Open browser after a short delay
        def open_browser():
            time.sleep(1.5)
            webbrowser.open(f'http://localhost:{port}')
        
        threading.Thread(target=open_browser, daemon=True).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Server stopped by user")

if __name__ == "__main__":
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    start_server(port)