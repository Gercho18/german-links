#!/bin/bash
# Quick deploy: commit changes and push to GitHub (triggers Vercel auto-deploy)
set -e

MSG="${1:-update}"
cd "$(dirname "$0")"

git add -A
git commit -m "$MSG" 2>/dev/null || echo "Nothing new to commit"
git push origin main

echo "✦ Pushed to GitHub → Vercel deploy triggered"
