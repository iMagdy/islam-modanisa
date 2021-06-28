#!/usr/bin/env zx

// Build and execute tests
await $`docker build . -t tester -f config/Dockerfile.test`;