var helpers = require('./helpers.js');


var parameterize = function (jasminefunc, description, functionUnderTest) {
    var needsDone;
    var diff = functionUnderTest.length - this.definitions.length;
    if (diff == 1)
        needsDone = true;
    else if (diff == 0)
        needsDone = false;
    else
        throw "Argument count does not match";

    this.clauses.forEach(function(element) {
        var newDescription = helpers.createDescription(description, element, this.definitions);

        if (needsDone) {
            return jasminefunc(newDescription, function(done) {
                element.push(done);
                functionUnderTest.apply(this, element);
            });
        } else {
            return jasminefunc(newDescription, function() {
                functionUnderTest.apply(this, element);
            });
        }
    }.bind(this));
};


var JParams = function (args) {
    this.definitions = args;
    this.clauses = [];

    
    this.values = function () {
        var result = new JParams(this.definitions);
        helpers.valuesOf(arguments).forEach(function (element) {
            if (Array.isArray(element))
                result.clauses.push(element);
            else
                result.clauses.push([element]);
        });
        return result;
    }.bind(this);


    this.addValues = function() {
        var result = new JParams(this.definitions);
        result.clauses = this.clauses.slice();

        helpers.valuesOf(arguments).forEach(function (element) {
            if (Array.isArray(element))
                result.clauses.push(element);
            else
                result.clauses.push([element]);
        });
        
        return result;
    }.bind(this);

    
    this.it = parameterize.bind(this, it);
    this.xit = parameterize.bind(this, xit);
    //this.fit = parameterize.bind(this, fit);
    
    this.describe = parameterize.bind(this, describe);
    //this.fdescribe = parameterize.bind(this, fdescribe);
    this.xdescribe = parameterize.bind(this, xdescribe);
};

exports.iterate = function () {
    return new JParams(arguments);
};