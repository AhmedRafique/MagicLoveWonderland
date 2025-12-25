# Package the project into a portable dist/ folder and create a ZIP for gifting
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $Root
$dist = Join-Path $Root "dist"
if (Test-Path $dist) { Remove-Item $dist -Recurse -Force }
New-Item -ItemType Directory -Path $dist | Out-Null

# Copy all files except Packaging scripts and existing dist/ and zip
$exclude = @('dist','Gift-Magical-Love-Wonderland.zip','package-gift.ps1')
Get-ChildItem -Path $Root -Force | Where-Object { $exclude -notcontains $_.Name } | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $dist -Recurse -Force
}

# Create run-local.bat helper
$runbat = @"
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
"@
Set-Content -Path (Join-Path $dist 'run-local.bat') -Value $runbat -Encoding ASCII

# Create run-local.sh for mac/linux users
$runsh = @"
#!/bin/sh
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server 5500
elif command -v python >/dev/null 2>&1; then
  python -m http.server 5500
else
  echo 'Please install Python or Node.js to run the local server.'
fi
"@
Set-Content -Path (Join-Path $dist 'run-local.sh') -Value $runsh -Encoding ASCII

# Create a simple README for the recipient
$readme = @"
Magical Love Wonderland - Portable Gift

To open the site locally:
1) Extract the zip to a folder on your computer.
2) Double-click 'run-local.bat' (Windows) or run 'sh run-local.sh' (macOS/Linux).
3) Your default browser should open at http://localhost:5500 and the site will load.

Notes:
- The site supports offline usage (PWA) when run via HTTP.
- A single-file HTML export has been generated as 'singlefile.html' for zero-setup use (open directly in your browser). If you prefer the single-file to include all photos inline, re-run the Python builder with the additional flag.

Enjoy! ❤️
"@
Set-Content -Path (Join-Path $dist 'README_GIFT.txt') -Value $readme -Encoding UTF8

# Build single-file HTML (inlined CSS/JS/manifest/icons)
if (Get-Command python -ErrorAction SilentlyContinue) {
    Write-Host "Building singlefile.html..."
    python scripts\build_singlefile.py
    if (Test-Path (Join-Path $ROOT 'singlefile.html')) {
        Copy-Item -Path (Join-Path $ROOT 'singlefile.html') -Destination (Join-Path $dist 'singlefile.html') -Force
    }
} else {
    Write-Host "Python not found: skipping singlefile build"
}

# Create zip
$zip = Join-Path $Root 'Gift-Magical-Love-Wonderland.zip'
if (Test-Path $zip) { Remove-Item $zip -Force }
Compress-Archive -Path (Join-Path $dist '*') -DestinationPath $zip -Force
Write-Host "Packaging complete. Gift zip created at: $zip"