const {
    config
} = require("./wdio.conf");

const chromeConfig = {
    ...config,
    services: [['selenium-standalone', {chrome: 'latest'}]], // https://chromedriver.chromium.org/
    //services: ["chromedriver"],
    capabilities: [{
        maxInstances: 10,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--start-maximized']
        },
    }, ],
    path: "/wd/hub",
};

exports.config = chromeConfig;