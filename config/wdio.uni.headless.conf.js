const { config } = require("./wdio.conf");

const firefoxHeadlessConfig = {  
    ...config,
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
    ],  

    path: "/wd/hub",  
    
};

exports.config = firefoxHeadlessConfig;