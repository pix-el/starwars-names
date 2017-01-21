import starWarNames from './starwars-names.json';
import uniqueRandomArray from 'unique-random-array';
var randomItem = uniqueRandomArray(starWarNames);

module.exports = {
    all : starWarNames,
    random : random
}

function random(number){
    if(number === undefined || number > starWarNames.length || number < 0){
        return randomItem();    
    }else{
        var randomArray = [];
        for(var i=0; i < number ; i++){
            randomArray.push(randomItem());    
        }
        return randomArray;
    }
}