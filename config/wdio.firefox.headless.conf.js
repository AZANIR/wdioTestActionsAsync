const { config } = require("./wdio.conf");

const firefoxHeadlessConfig = {  
    ...config,
    services: [['geckodriver', {firefox: 'latest'}]],
    capabilities: [    
        {      
            maxInstances: 1,
            browserName: "firefox",
            acceptInsecureCerts : true,
            'moz:firefoxOptions': {
                args: ['-headless',"--width=1900","--height=1000"]
            }, 
        },  
    ],  

    path: "/wd/hub",  
    
};

exports.config = firefoxHeadlessConfig;