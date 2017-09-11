function add (a,b){
    return a + b;
};

function multiply(a,b) {
    if (a === 0) return 0;
    return b + multiply(a-1,b);
}

module.exports.add = add;
module.exports.multiply = multiply;