const logSource = require('./log-source');
const logger = require('./logger');

let factory = (logSource, logger) => {
    function analyzeLine(line){
        if(line.startsWith("Error:")){
            logger.logError(line);
        } else if (line.startsWith("Info:")){
            logger.logInfo(line);
        }
    }
    
    function analyze(){
        logSource()
            .forEach(analyzeLine);
    }

    return analyze
}

module.exports.factory = factory;
module.exports.analyze = factory(logSource.getLines, logger);