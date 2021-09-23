const {config} = require("./wdio.conf");
require("path");
const chromeHeadlessConfig = {
    ...config,
    services: [['selenium-standalone', {chromiumedge: 'latest'}]], // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--window-size=1280,800', '--allow-insecure-localhost']
        },
    }],
    logLevel: 'warn',

    path: "/wd/hub",

};

exports.config = chromeHeadlessConfig;