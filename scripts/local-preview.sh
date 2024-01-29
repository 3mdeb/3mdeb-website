#!/bin/bash

docker run --rm -it -v $PWD:/src -p 1313:1313 -u $(id -u) klakegg/hugo:0.111.3-ext-alpine serve -b $1
