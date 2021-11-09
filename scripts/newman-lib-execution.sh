#!/usr/bin/env bash
while getopts "e:d:" opt;
do
   case "${opt}" in
      e) ENV=${OPTARG} ;;
      d) DATA=${OPTARG} ;;
   esac
done

node tests/tg1-executor.js $ENV "$DATA"