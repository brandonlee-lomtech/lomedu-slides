#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST="$ROOT/dist"
PORT="${PORT:-4173}"
PID_FILE="$ROOT/.serve-dist.pid"
LOG_FILE="$ROOT/.serve-dist.log"

usage() {
  echo "Usage: $0 [start|stop|status]" >&2
  echo "  start   Serve dist/ on http://127.0.0.1:\$PORT/ (default PORT=4173), background." >&2
  echo "  stop    Stop the background server." >&2
  echo "  status  Show whether the server is running." >&2
}

is_running() {
  [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null
}

cmd="${1:-start}"

case "$cmd" in
  start)
    if [[ ! -f "$DIST/index.html" ]]; then
      echo "Missing $DIST/index.html — run: npm run build" >&2
      exit 1
    fi
    if is_running; then
      echo "Already running (pid $(cat "$PID_FILE")). http://127.0.0.1:$PORT/" >&2
      exit 0
    fi
    rm -f "$PID_FILE"
    cd "$DIST"
    nohup python3 -m http.server "$PORT" >>"$LOG_FILE" 2>&1 &
    echo $! >"$PID_FILE"
    echo "http://127.0.0.1:$PORT/  (pid $(cat "$PID_FILE"), log $LOG_FILE)"
    ;;
  stop)
    if [[ ! -f "$PID_FILE" ]]; then
      echo "Not running (no $PID_FILE)." >&2
      exit 0
    fi
    pid="$(cat "$PID_FILE")"
    if kill -0 "$pid" 2>/dev/null; then
      kill "$pid"
      echo "Stopped pid $pid." >&2
    else
      echo "Stale pid file; removed." >&2
    fi
    rm -f "$PID_FILE"
    ;;
  status)
    if is_running; then
      echo "Running pid $(cat "$PID_FILE") — http://127.0.0.1:$PORT/"
    else
      echo "Not running."
      [[ -f "$PID_FILE" ]] && rm -f "$PID_FILE"
    fi
    ;;
  -h|--help|help)
    usage
    ;;
  *)
    usage
    exit 1
    ;;
esac
