FROM ghcr.io/dgtlmoon/changedetection.io

RUN apt-get update && apt-get install -y --no-install-recommends \
    nodejs npm 

RUN npm i -g nodemon