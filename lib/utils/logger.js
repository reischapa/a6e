const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    })
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(
          info =>
            `${info.timestamp} ${info.level}: ${JSON.stringify(
              info.message,
              null,
              2
            )}`
        )
      )
    })
  ]
});

module.exports = logger;
