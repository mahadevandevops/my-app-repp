#!/bin/bash
echo "Validating service"
curl -f http://localhost/ || exit 1
