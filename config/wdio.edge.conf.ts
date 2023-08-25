import { config as baseConfig } from './wdio.conf';

export const firefoxConfig = {
    ...baseConfig,
    services: [['edgedriver', {chromiumedge: 'latest'}]], // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
    capabilities: [{
        maxInstances: 1,
        browserName: "MicrosoftEdge",
        'ms:edgeOptions': {
            args: ['--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors'],
            excludeSwitches: ['--enable-logging']
        },
    }]

};

exports.config = firefoxConfig;