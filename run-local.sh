#!/bin/sh
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server 5500
elif command -v python >/dev/null 2>&1; then
  python -m http.server 5500
elif command -v npx >/dev/null 2>&1; then
  npx http-server -p 5500
else
  echo "Please install Python or Node.js to run the local server."
fi
