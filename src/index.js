var starWarNames = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');
var randomItem = uniqueRandomArray(starWarNames);

module.exports = {
    all : starWarNames,
    random : random
}

function random(number){
    if(number === undefined){
        return randomItem();    
    }else{
        var randomArray = [];
        for(var i=0; i < number ; i++){
            randomArray.push(randomItem());    
            
        }
        return randomArray;
    }
}