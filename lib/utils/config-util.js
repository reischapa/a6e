const rc = require('rc');
const path = require('path');

const isInteger = n => !isNaN(parseInt(n)) && isFinite(n);

const defaultConfig = {
  port: 18100,
  reloadPort: 43219,
  stylesPath: path.join(__dirname, '../../res/index.css')
};

let rcConfig;
let config;

const normalizeConfig = iConfig => {
  if (typeof iConfig.watchedPath === 'string') {
    // transform into absolute path
    // no need to use normalize because process.cwd() is absolute
    iConfig.watchedPath = path.resolve(process.cwd(), iConfig.watchedPath);
  }

  if (typeof iConfig.stylesPath === 'string') {
    iConfig.stylesPath = path.resolve(process.cwd(), iConfig.stylesPath);
  }
};

const validateConfig = iConfig => {
  if (!isInteger(iConfig.port)) {
    throw new Error('Port value must be an integer');
  }

  if (!isInteger(iConfig.reloadPort)) {
    throw new Error('Reload port value must be an integer');
  }

  if (!iConfig.watchedPath) {
    throw new Error('Watched file path must be defined');
  }
};

const getConfig = () => {
  if (!rcConfig) {
    rcConfig = rc('a6e', defaultConfig);
  }

  if (!config) {
    config = {...rcConfig};
  }

  if (typeof config.watchedPath === 'undefined' && process.argv.length >= 3) {
    config.watchedPath = process.argv[process.argv.length - 1];
  }

  normalizeConfig(config);

  validateConfig(config);

  return config;
};

module.exports = {
  getConfig
};
