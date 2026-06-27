param(
  [string]$ProjectRoot = "C:\Users\joann\Desktop\beintheknow",
  [string]$LogDir = "$env:TEMP\beintheknow-codex-logs",
  [int]$Limit = 100,
  [int]$WaitMs = 1500,
  [int]$MaxBatchesPerQueue = 100
)

$ErrorActionPreference = "Stop"

New-Item -ItemType Directory -Force -Path $LogDir | Out-Null

$stdout = Join-Path $LogDir "curated-embedding-backfill.out.log"
$stderr = Join-Path $LogDir "curated-embedding-backfill.err.log"

Set-Location $ProjectRoot

"[$(Get-Date -Format o)] Starting curated embedding backfill" | Out-File -FilePath $stdout -Append -Encoding utf8

& node.exe scripts\run-curated-embedding-backfill.mjs `
  --limit=$Limit `
  --waitMs=$WaitMs `
  --maxBatchesPerQueue=$MaxBatchesPerQueue `
  1>> $stdout `
  2>> $stderr

"[$(Get-Date -Format o)] Finished curated embedding backfill with exit code $LASTEXITCODE" | Out-File -FilePath $stdout -Append -Encoding utf8

exit $LASTEXITCODE
