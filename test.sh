#!/usr/bin/env bash

set -x

docker compose kill
docker compose down
docker compose up -d
docker compose logs -f

# docker build . -t logickee/changedetect
# docker push . -t logickee/changedetect

# docker run  --rm \
#   -p "5000:5000" \
#   -v datastore-volume:/datastore \
#   --name changedetection.io logickee/changedetect
