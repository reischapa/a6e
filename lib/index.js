const nodemon = require('nodemon');

const logger = require('./utils/logger');
const nodemonUtil = require('./utils/nodemon-util');

const a6e = config => {
  const nodemonConfig = nodemonUtil.translateConfig(config);

  nodemon(nodemonConfig);

  nodemon.on('start', () => {
    logger.info('App has started');
  });

  nodemon.on('quit', () => {
    logger.info('App has quit');
    process.exit();
  });

  nodemon.on('restart', files => {
    logger.info(`App restarted due to: ${files}`);
  });

  nodemon.on('log', data => {
    logger.info(data);
  });

  nodemon.on('message', data => {
    logger.info(data);
  });
};

module.exports = a6e;
