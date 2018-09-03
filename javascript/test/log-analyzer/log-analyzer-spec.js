var chai = require("chai");
var sinon = require("sinon");
chai.use(require("sinon-chai"));
chai.should();

const factory = require('./log-analyzer').factory;
let buildAnalyzer = (s,l) => factory(s,l)

describe("Log analyzer", () => {
    it("Logs errors to the error stream", () => {
        let source = sinon.stub().returns(["Error: error message"])
        let logger = { logError : sinon.spy()}
        let analyzer = buildAnalyzer(source, logger)

        analyzer()

        logger.logError.should.be.calledWith("Error: error message")
    });

    
    it("Logs info to the info stream", () => {
        let source = sinon.stub().returns(["Info: info message"])
        let logger = { logInfo : sinon.spy()}
        let analyzer = buildAnalyzer(source, logger)

        analyzer()

        logger.logInfo.should.be.calledWith("Info: info message")
    });
});