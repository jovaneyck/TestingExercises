var chai = require("chai");
var sinon = require("sinon");
chai.use(require("sinon-chai"));
chai.should();

const logSource = require('./log-source');
const logger = require('./logger');

const analyzer = require('./log-analyzer');

describe("Log analyzer", () => {
    it("Logs errors to the error stream", () => {
        throw new Error("write log analyzer specs")
    });
});