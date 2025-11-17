#!/bin/bash

# Navigate to project directory
cd "C:/Users/SURYA/Documents/Web-Scanpro" || exit

# Ask for commit message
echo "Enter commit message (leave empty for auto message): "
read msg

# If message is empty, auto timestamp message
if [ -z "$msg" ]; then
    msg="Auto update on $(date +"%Y-%m-%d %H:%M:%S")"
fi

# Stage and commit changes
git add -A
git commit -m "$msg"

# Make sure we are on main branch
git branch -M main

# Push to GitHub (safe update)
git pull --rebase origin main
git push -u origin main

echo "🔥 Successfully pushed to GitHub!"
