@echo off
echo Starting local server on port 5500...
where python >nul 2>&1
if %ERRORLEVEL%==0 (
  python -m http.server 5500
) else (
  where npx >nul 2>&1
  if %ERRORLEVEL%==0 (
    npx http-server -p 5500
  ) else (
    echo Please install Python or Node.js to run the local server.
    pause
  )
)
