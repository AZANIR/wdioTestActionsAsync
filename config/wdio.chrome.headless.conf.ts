import { config as baseConfig } from './wdio.conf';

export const chromeHeadlessConfig = {
    ...baseConfig,
    // services: [['selenium-standalone', { chrome: 'latest' }]],
    services: [['chromedriver', {chrome: 'latest'}]],
    capabilities: [{
        maxInstances: 3,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless','--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors'],
            excludeSwitches: ['--enable-logging']
        },
    }],
    logLevel: 'warn',
    path: "/wd/hub",
};

exports.config = chromeHeadlessConfig;