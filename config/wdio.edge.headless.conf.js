const {config} = require("./wdio.conf");
require("path");
const chromeHeadlessConfig = {
    ...config,
    services: [['edgedriver', {chromiumedge: 'latest'}]], // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
    capabilities: [{
        maxInstances: 2,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: ['--headless','--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors'],
            excludeSwitches: ['--enable-logging']
        },
    }],
    logLevel: 'warn',

    path: "/wd/hub",

};

exports.config = chromeHeadlessConfig;