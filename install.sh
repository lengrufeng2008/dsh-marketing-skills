#!/usr/bin/env bash
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="${DSH_HOME:-$HOME/.dsh}/skills"
mkdir -p "$DEST"
for dir in "$HERE"/skills/*/; do
  name="$(basename "$dir")"
  mkdir -p "$DEST/$name"
  cp -R "$dir." "$DEST/$name/"
  echo "installed $name -> $DEST/$name"
done
echo "Done. Restart is not required; open a new session."
