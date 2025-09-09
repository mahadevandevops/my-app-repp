#!/bin/bash
echo "Starting application"
cd /var/www/my-sample-app
# Start with PM2 (make sure PM2 installed in EC2)
npm install -g pm2
pm2 start server.js
