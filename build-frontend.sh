#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Build the frontend application
echo "Building frontend application..."
pnpm --filter frontend run build

# Copy the build output to the deployment directory
echo "Copying build output to deployment directory..."
cp -r apps/frontend/.next /deployment/frontend

echo "Frontend build completed successfully."
