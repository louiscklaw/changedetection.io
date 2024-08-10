#!/usr/bin/env bash

set -ex

cd /app/_notes
    node ./generate.js
cd /app

cd /app/_notes
    node ./helloworld.js
cd /app

python ./changedetection.py -d /datastore
