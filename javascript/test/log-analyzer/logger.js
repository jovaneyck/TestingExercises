module.exports.logError = function(){
    throw new Error("Don't use the real logger in tests!");
}

module.exports.logInfo = function(){
    throw new Error("Don't use the real logger in tests!");
}