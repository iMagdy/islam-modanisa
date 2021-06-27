#!/usr/bin/env zx

await Promise.all([
  $`npm --prefix api run start`,
  $`npm --prefix web run serve`
])