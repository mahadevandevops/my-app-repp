#!/bin/bash
echo "Running BeforeInstall"
# Stop old app if running
pm2 delete all || true
rm -rf /var/www/my-sample-app
mkdir -p /var/www/my-sample-app
