const http = require('http');
const express = require('express');
const morgan = require('morgan');
const reload = require('reload');
const path = require('path');

const logger = require('./utils/logger');
const generatePageContent = require('./generate-page-content');

const bootstrapApp = async config => {
  const app = express();

  app.use(morgan('dev'));

  app.use('/index.css', express.static(config.stylesPath));
  app.use(
    '/favicon.svg',
    express.static(path.join(__dirname, '../res/favicon.svg'))
  );

  app.get('/', (req, res) => {
    res.status(200);

    res.write(generatePageContent(config));

    res.end();
  });

  app.set('port', config.port);

  const server = http.createServer(app);

  await reload(app, {port: config.reloadPort});

  server.listen(app.get('port'), () => {
    logger.info(`Web server listening on port ${app.get('port')}`);
    logger.info(`Reload server listening on port ${config.reloadPort}`);
  });

  return server;
};

module.exports = bootstrapApp;
