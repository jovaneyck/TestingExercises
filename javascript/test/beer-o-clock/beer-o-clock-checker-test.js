const assert = require('chai').assert;
const checker = require('./beer-o-clock-checker').factory;

describe("The beer-o-clock checker", () => {
    it("Knows when it is not beer-o-clock", () => {
        let fn = checker(() => new Date("01/01/2018 15:59"))
        assert.isFalse(fn());
    })

    it("Knows when it is beer-o-clock", () => {
        let fn = checker(() => new Date("01/01/2018 16:01"))
        assert.isTrue(fn());
    })

    it("Exactly four o clock already is beer-o-clock", () => {
        let fn = checker(() => new Date("01/01/2018 16:00"))
        assert.isTrue(fn());
    })

});