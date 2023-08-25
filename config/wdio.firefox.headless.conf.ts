import { config as baseConfig } from './wdio.conf';

export const firefoxHeadlessConfig = {  
    ...baseConfig,
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
    ] 
    
};

exports.config = firefoxHeadlessConfig;