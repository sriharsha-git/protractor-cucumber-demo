const dateTime = require('date-time');
const path = require('path');
const fileSystem = require('fs-extra');

class FileSystem {

    emptyJsonReportDir() {
        let reqPath = path.join(__dirname, '../json-report')
        fileSystem.emptyDir(reqPath).then(() => {
            console.log('Deleted files successfullty')
        }).catch((err) => {
            console.log(err)
        });
    }
}

fileSys = new FileSystem();
fileSys.emptyJsonReportDir();