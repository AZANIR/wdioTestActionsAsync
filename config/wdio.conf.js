const exec = require('child_process').exec;
const allure = require('allure-commandline');

exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.spec.js',
        //'./test/specs/structure/StructureProperties.spec.js'
    ],
    suites: {
        superuser: [
            './test/specs/**/*.spec.js',
        ],
        user: [
            './test/specs/**/*.spec.js',
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 5,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
        {
            maxInstances: 1,
            browserName: 'firefox',
        }
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver'],
        ['firefox-profile'],
        ['MicrosoftEdge']
    ],
    framework: 'mocha',
    // reporters: ['spec'],
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }], 'spec'],

    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000 // 20 min
    },
    // =====
    // Hooks
    // =====

    beforeSession: function (config, capabilities, specs) {
    },
    beforeSession() { // before hook works as well
        require('expect-webdriverio').setOptions({
            wait: 5000
        })
    },
    before: async function (capabilities, specs) {
        await browser.setTimeout({ 'pageLoad': 20000 })
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
    // afterStep: function (test, scenario, { error, duration, passed }) {
    //     browser.takeScreenshot();
    // },

    // onComplete: function(exitCode, config, capabilities, results) {
    // },
    // onComplete: async function() {
    //     const reportError = new Error('Could not generate Allure report')
    //     const generation = allure(['generate', 'allure-results', '--clean'])

    //     return await new Promise(async (resolve, reject) => {
    //         const generationTimeout = setTimeout(
    //             () => reject(reportError),
    //             5000)
    //         exec('cp -R allure-report/history allure-results');
    //         generation.on('exit', function(exitCode) {
    //             clearTimeout(generationTimeout)

    //             if (exitCode !== 0) {
    //                 return reject(reportError)
    //             }

    //             console.log('Allure report successfully generated')
    //             resolve()
    //         });
    //     })
    // }
};