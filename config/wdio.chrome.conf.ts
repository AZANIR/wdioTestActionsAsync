import { config as baseConfig } from './wdio.conf';

export const chromeConfig = {
    ...baseConfig,
    services: [['chromedriver', {chrome: 'latest'}]],
    // services: [['selenium-standalone', { chrome: 'latest' }]],
    capabilities: [{
        maxInstances: 3,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1900,1000', '--allow-insecure-localhost','--ignore-certificate-errors'],
            excludeSwitches: ['--enable-logging']
        },
    }],
    path: "/wd/hub",
};

exports.config = chromeConfig;