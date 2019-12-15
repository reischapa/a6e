#!/usr/bin/env node

const a6e = require('../lib');
const configUtil = require('../lib/utils/config-util');

const config = configUtil.getConfig();

if (config.generatePageContent) {
  process.stdout.write(a6e.generatePageContent(config));
} else {
  a6e(config);
}
