const dateTime = require('date-time');
const path = require('path');
const fileSystem = require('fs-extra');
const jsonfile = require('jsonfile');

class LoggerConfigurator {

    createLogFile() {
        let logFileDir = path.join(__dirname, '../test-execution-logs');
        const currentDate = new Date();
        let fullYear = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1;
        let day = currentDate.getDate();
        let dateFormat = `${month}-${day}-${fullYear}`;
    
        fileIo.open(`${logFileDir}/${dateFormat}.log`, 'w', function (err, file) {
            if (err) throw err;
        });
        return logFileDir+dateFormat+".log"
    }
}

logConfig = new LoggerConfigurator();
logConfig.createLogFile();
module.exports = LoggerConfigurator;