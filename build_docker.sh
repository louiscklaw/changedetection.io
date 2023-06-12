#!/usr/bin/env bash

set -x

docker build --no-cache . -t logickee/changedetect

docker push logickee/changedetect
