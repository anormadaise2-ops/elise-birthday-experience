@echo off
setlocal
cd /d "%~dp0"
where py >nul 2>nul
if %errorlevel%==0 (
  start "Élise Birthday Experience" http://127.0.0.1:8000
  py -3 -m http.server 8000 --bind 127.0.0.1
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "Élise Birthday Experience" http://127.0.0.1:8000
  python -m http.server 8000 --bind 127.0.0.1
  goto :eof
)
echo Python 3 est necessaire pour lancer le serveur local.
echo Installe Python depuis python.org puis relance ce fichier.
pause
