#!/usr/bin/env zx

// Test APIs
await $`npm --prefix api test`;

// Test web app
await $`npm --prefix web run test:unit`;