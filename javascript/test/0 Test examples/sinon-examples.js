var chai = require("chai");
var sinon = require("sinon");
chai.use(require("sinon-chai"));
chai.should();

describe("sinon", () => {
    describe("stubs", () => {
        const foo = (dependency) => dependency() === 1337;

        it("example of a hand-written stub", () => {
            const stub = () => 1337;

            const result = foo(stub);

            result.should.be.true;
        });

        it("example of a sinon stub", () => {
            const stub = sinon.stub().returns(1337);
            
            const result = foo(stub);

            result.should.be.true;
        });
    });

    describe("mocks", () => {
        const foo = 
            (dependency) => {
                dependency();
            };

        it("example of a mock", () => {
            const mock = sinon.spy();

            const result = foo(mock);

            mock.should.be.called;
        });
    });
});