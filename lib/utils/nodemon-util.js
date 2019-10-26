const path = require('path');

const translateConfig = config => ({
  legacyWatch: true,
  watch: config.watchedPath,
  ext: 'js',
  verbose: true,
  exec: `node ${path.join(__dirname, '../', 'worker.js')} '${JSON.stringify(
    config
  )}'`
});

module.exports = {
  translateConfig
};
