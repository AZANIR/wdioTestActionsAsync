import { config as baseConfig } from './wdio.conf';

export const firefoxHeadlessConfig = {  
    ...baseConfig,
    services: [['chromedriver', {chrome: 'latest'}],['geckodriver', {firefox: 'latest'}]],
    capabilities: [    
        {      
            maxInstances: 1,
            browserName: "firefox",
            acceptInsecureCerts : true,
            'moz:firefoxOptions': {
                args: ['-headless',"--width=1900","--height=1000"]
            }, 
        },
        {
            maxInstances: 1,
            browserName: "chrome",
            'goog:chromeOptions': {
                args: ['--headless','--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors'],
                excludeSwitches: ['--enable-logging']
            }
        }
    ] 
    
};

exports.config = firefoxHeadlessConfig;