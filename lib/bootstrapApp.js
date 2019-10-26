const http = require('http');
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const marked = require('marked');
const reload = require('reload');
const path = require('path');
const logger = require('./utils/logger');

const getReadmeContents = config => {
  const rawString = fs.readFileSync(config.watchedPath, 'utf-8');
  return marked(rawString.toString());
};

const getResponse = config => `
    <html>
      <head>
        <title>a6e: ${config.watchedPath}</title>
        <meta charset="UTF-8"/>
        <script src='reload/reload.js'></script>
        <link rel="stylesheet" type="text/css" href="index.css"/>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.svg"/>
      </head>
      <div id="content">${getReadmeContents(config)}</div>
    </html>
  `;

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

    res.write(getResponse(config));

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
