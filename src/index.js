var starWarNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all : starWarNames,
    random : uniqueRandomArray(starWarNames)
}