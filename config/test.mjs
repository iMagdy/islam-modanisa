#!/usr/bin/env zx

$`npm run serve`;

$`node /api/index.js`;

await sleep(15);

// Run all web tests
const tests = await $`npm test`;

console.log(`Tests completed with exist code: ${tests.exitCode}`);

process.exit(tests.exitCode);