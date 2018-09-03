const assert = require('chai').assert;
const calculator = require('./calculator');
const jparams = require('../../lib/jasmine-params-patched/jasmine-params');

describe("The calculator", () =>{
    it("Can add", () => {
        assert.equal(7, calculator.add(3,4))
    })

    
    jparams
        .iterate('a', 'b', 'expected')
        .values(
            [0, 0, 0],
            [1, 1, 1],
            [0, 5, 0],
            [8, 4, 32],
            [5, -3, -15],
            [-5, 1, -5]
        )
        .it(
            "Can multiply (#a * #b = #expected):", 
            (a, b, expected) => {
                assert.equal(expected, calculator.multiply(a, b));
            })
});