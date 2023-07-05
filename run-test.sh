#!/usr/bin/env bash
mvn -DskipTests -P prepare-for-upload clean package

appcenter test run appium \
  --app "gerard-krupa-u0hs/TrainingApp" \
  --devices "gerard-krupa-u0hs/demo" \
  --app-path ./android/app/build/outputs/apk/debug/app-debug.apk \
  --test-series "master" \
  --locale "en_US" \
  --build-dir target/upload
