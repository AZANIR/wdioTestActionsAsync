import { config as baseConfig } from './wdio.conf';

export const firefoxConfig = {
    ...baseConfig,
    // services: [['selenium-standalone', {firefox: 'latest'}]], // https://github.com/mozilla/geckodriver/releases
    services: [['geckodriver', {firefox: 'latest'}]],
    capabilities: [{
        maxInstances: 1,
        browserName: "firefox",
        acceptInsecureCerts : true,
        'moz:firefoxOptions': {
            args: ["--width=1900",
                "--height=1000"]
        },
    }],
    "windowSize": "maximize"
};

exports.config = firefoxConfig;