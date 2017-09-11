const assert = require('chai').assert;
//package used to support parameterized tests:
const jparams = require('../../lib/jasmine-params-patched/jasmine-params');

function fibonacci(input) {
    if (input === 0) return 0;
    if (input === 1) return 1;

    return fibonacci(input - 1) + fibonacci(input - 2);
}

describe("An example parameterized test", () =>
    jparams
        .iterate('input','expected')
        .values(
            [0,0],
            [1,1],
            [2,1],
            [3,2],
            [4,3],
            [5,5],
            [6,8]
        )
        .it(
            "Multiple test cases for a single test (#input, #expected):", 
            (input, expected) => {
                assert.equal(expected, fibonacci(input));
            }
        )
);