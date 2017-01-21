var expect = require('chai').expect;
import starWars from './index';

describe('starwars-names',function(){
    
    describe('all', function(){
           it('should be an array of strings', function(){
               expect(starWars.all).to.satisfy(isArrayOfStrings);

               function isArrayOfStrings(array){
                   return array.every(function(item){
                        return typeof item === 'string'
                   }); 
               }
           });

           it('should contain `Luke Skywalker`', function(){
               expect(starWars.all).to.include('Luke Skywalker');
           }); 
    });
    
    describe('random',function(){
        it('should return a random item from starWars.all', function(){
            var randomItem = starWars.random();
            expect(randomItem).to.be.an('string');
            expect(starWars.all).to.include(randomItem);
        }); 
        it('should return a random number of items from the array', function(){
            var randomItem = starWars.random(3);
            expect(randomItem).to.be.an('array');
            expect(randomItem).to.have.length(3);
            expect(starWars.all).to.include(randomItem[0]);
        })  
    });
    

});
