#!/usr/bin/env bash

set -ex

docker compose kill

sudo chown 1000:1000 -R ..

  node ./generate.js
  node ./update.js

docker compose up -d