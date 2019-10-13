var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./dev-config.properties');
const fileSystem = require('fs-extra');
const dateTime = require('date-time');

exports.config = {
    framework: 'custom',
    directConnect: true,
    allScriptTimeout: 30000,
    getPageTimeout: 60000,
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [properties.get('featureFilesPath')],

    multiCapabilities: [
        {
            'browserName': 'chrome',

        }/*,{
            'browserName': 'firefox',
        }
        */
    ],

    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            displayDuration: true,
            openReportInBrowser: true,
            pageFooter: "Automation POC Demo",
            pageTitle: "Test Automation Results",
            reportName: "Test Automation Results",
            reportPath: "./html-report",
            customData: {
                title: 'Execution Info',
                data: [
                    { label: 'Environment', value: 'DEV' },
                    { label: 'Data Base', value: properties.get('database') },
                    { label: 'Date & Time', value: dateTime() },
                    { label: 'Release', value: '1.1' }
                ]
            }
        }
    }],
    cucumberOpts: {
        tags: '@Bank',
        strict: true,
        'no-colors': false,
        format: 'json:json-report/json-report.json',
        require: [
            properties.get('stepDefinitionPath')
        ]
    }
}

