const BEER_O_CLOCK = 16;

function itsBeerOClock () {
    return now().getHours() >= BEER_O_CLOCK;
}

function now(){
    return new Date();
}

module.exports.itsBeerOClock = itsBeerOClock;