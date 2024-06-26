const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

const loggingPath = process.env.LOGGING_PATH

const cardInstalledLogger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: `${loggingPath}/card-installed.log` })
  ]
});
export default cardInstalledLogger
