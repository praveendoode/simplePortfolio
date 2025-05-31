#!/bin/bash
URL="http://localhost"
LOGFILE="/var/log/website-monitor.log"

# Check website response time
response_time=$(curl -o /dev/null -s -w '%{time_total}' $URL)

# Log the result
echo "$(date): Response time for $URL is ${response_time}s" >> $LOGFILE
