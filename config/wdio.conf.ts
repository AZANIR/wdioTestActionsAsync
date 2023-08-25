export const config = {
    runner: "local",
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: "./tsconfig.json",
            transpileOnly: true,
        },
    },
    specs: [
        '../test/specs/**/*.spec.ts'
      ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/002_Files'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true},
        {
        maxInstances: 5,
        browserName: 'firefox',
        acceptInsecureCerts: true},
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 2,
    services: ['chromedriver','geckodriver','edgedriver','crossbrowsertesting'],
    framework: 'mocha',
    reporters: [
        // [video, {
        //     outputDir: 'allure-results',
        //     saveAllVideos: false,       // If true, also saves videos for successful test cases
        //     videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
        // }],
        "spec",
        ['junit', {
            outputDir: './junit-results',
            outputFileFormat: function(options) { // optional
                // options.cid has to be set else the xml gets damaged by parallel test execution
                return `results-${options.cid}.${options.capabilities.browserName}.xml`
            }
        }],
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        'spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },

    // =====
    // Hooks
    // =====
    before: async function (capabilities, specs, browser) {
        await browser.setWindowSize(1920, 1080);
        // await browser.setTimeout({ 'pageLoad': 35000 });
    },
    afterTest: async function(test, context, { error}) {
        if (error) {
            await browser.takeScreenshot();
            //todo add info about broken tests
        }
    }
};
