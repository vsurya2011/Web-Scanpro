#!/bin/bash

# Navigate automatically to project directory
cd "/c/Users/SURYA/Documents/Web-Scanpro" || exit

# If no commit message provided, auto message with timestamp
if [ -z "$1" ]; then
  msg="Auto update - $(date +'%Y-%m-%d %H:%M:%S')"
else
  msg="$1"
fi

echo "Commit message: $msg"

git add -A
git commit -m "$msg"
git branch -M main

# Add remote only if missing
if ! git remote | grep -q origin; then
  git remote add origin https://github.com/vsurya2011/Web-Scanpro.git
fi

git push -u origin main

echo "✔ Successfully pushed to GitHub!"
