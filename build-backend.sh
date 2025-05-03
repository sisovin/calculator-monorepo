#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Build the Nest.js application
echo "Building the backend application..."
pnpm run build

# Run database migrations
echo "Running database migrations..."
pnpm run prisma migrate deploy

# Seed the database
echo "Seeding the database..."
pnpm run prisma db seed

echo "Backend build completed successfully."
