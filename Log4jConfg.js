'use strict';
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');
const path = require('path');
const fs = require('fs');
const logDir = 'test-execution-logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    console.log("Checking if log Directory exists... ")
    fs.mkdirSync(logDir);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
    filename: `${logDir}/%DATE%-execution.log`,
    datePattern: 'YYYY-MM-DD'
});

//Configure logger
const logger = createLogger({
    level: 'debug',
    format: format.combine(
        format.colorize(),
        format.label({ label: path.basename(process.mainModule.filename) }),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`)
    ),
    transports: [
        new transports.Console({
            level: 'debug',
            format: format.combine(
                format.colorize(),
                format.printf(
                    info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`
                )
            )
        }),
        dailyRotateFileTransport
    ]
});

module.exports = logger;