#!/bin/bash
set -e

echo "Stopping old Node app if running..."
pm2 stop all || true
rm -rf /var/www/my-sample-app
