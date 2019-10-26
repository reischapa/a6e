#!/usr/bin/env node

const a6e = require('../lib');
const configUtil = require('../lib/utils/config-util');

const config = configUtil.getConfig();

a6e(config);
