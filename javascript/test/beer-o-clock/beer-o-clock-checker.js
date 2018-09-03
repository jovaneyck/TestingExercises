const BEER_O_CLOCK = 16;

let factory = (timeFactory) => 
    () => timeFactory().getHours() >= BEER_O_CLOCK;

function now(){
    return new Date();
}

module.exports.factory = factory;
module.exports.itsBeerOClock = factory(now);