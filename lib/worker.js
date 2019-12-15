const bootstrapApp = require('./bootstrap-app');
const logger = require('./utils/logger');

let config;

try {
  config = JSON.parse(process.argv[2]);
} catch (e) {
  logger.error(`Error parsing configuration in worker: ${e}`);
  process.exit(1);
}

(async () => {
  try {
    await bootstrapApp(config);
  } catch (e) {
    logger.error(e);
  }
})();
