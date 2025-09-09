#!/bin/bash
echo "Validating service"
curl -f http://localhost/health || exit 1
