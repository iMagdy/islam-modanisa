module.exports = {
  testDir: '.',
  timeout: 30000,
  retries: 3,
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },

    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },

    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
};