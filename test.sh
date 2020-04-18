#!/bin/bash
while true;
do
  curl -s --dump-header - -o /dev/null localhost:8080
  sleep 1
done
