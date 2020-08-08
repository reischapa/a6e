const fs = require('fs');
const marked = require('marked');

const getWatchedFileContent = config => {
  const rawString = fs.readFileSync(config.watchedPath, 'utf-8');
  return marked(rawString.toString());
};

const generatePageContent = config => `
    <!doctype html>
    <html>
      <head>
        <title>${config.pageTitle}</title>
        <meta charset="UTF-8"/>
        <script src='reload/reload.js'></script>
        <link rel="stylesheet" type="text/css" href="index.css"/>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.svg"/>
      </head>
      <div id="content">${getWatchedFileContent(config)}</div>
    </html>
  `;

module.exports = generatePageContent;
