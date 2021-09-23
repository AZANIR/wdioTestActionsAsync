const { config } = require("./wdio.conf");
const path = require("path");

const firefoxHeadlessConfig = {  
    ...config,
    services: [['selenium-standalone', {firefox: 'latest'}]], // https://github.com/mozilla/geckodriver/releases
    capabilities: [    
        {      
            maxInstances: 5,
            browserName: "firefox",
            'moz:firefoxOptions': {
                args: ['-headless']
            }, 
        },  
    ],  

    path: "/wd/hub",  
    
};

exports.config = firefoxHeadlessConfig;