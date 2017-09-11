const logSource = require('./log-source');
const logger = require('./logger');

function analyzeLine(line){
    if(line.startsWith("Error:")){
        logger.logError(line);
    } else if (line.startsWith("Info:")){
        logger.logInfo(line);
    }
}

function analyze(){
    logSource
        .getLines()
        .forEach(analyzeLine);
}

module.exports.analyze = analyze;