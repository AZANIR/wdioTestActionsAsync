import * as fs from 'fs';

class Helper {

    parseJsonFile(filename){
        let rawData: any = fs.readFileSync(filename);
        return JSON.parse(rawData);
      }
    }

export default new Helper();