$ErrorActionPreference = 'Stop'
Set-Location (Split-Path -Parent $PSScriptRoot)
$python = Get-Command py -ErrorAction SilentlyContinue
if ($python) {
    Start-Process 'http://127.0.0.1:8000'
    py -3 -m http.server 8000 --bind 127.0.0.1
} else {
    $python = Get-Command python -ErrorAction SilentlyContinue
    if (-not $python) { Write-Host 'Python 3 est requis.' -ForegroundColor Red; exit 1 }
    Start-Process 'http://127.0.0.1:8000'
    python -m http.server 8000 --bind 127.0.0.1
}
