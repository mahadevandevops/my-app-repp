#!/bin/bash
set -e

cd /var/www/my-sample-app
echo "Starting Node.js app..."
pm2 start app.js --name my-sample-app || pm2 restart my-sample-app
pm2 save
