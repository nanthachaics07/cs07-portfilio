#!/usr/bin/env bash
# CI checks without `make` (macOS may block make until Xcode license is accepted).
set -euo pipefail
cd "$(dirname "$0")/.."
exec npm run check
