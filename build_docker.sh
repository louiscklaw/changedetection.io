#!/usr/bin/env bash

set -x

docker build . -t logickee/changedetect
docker push . -t logickee/changedetect
