/**
 * Created by michaelevan on 8/1/17.
 */

'use strict';


// as with other languages, the {} is the empty  object that uses a  key/value pair

const solomon1 {
    name: 'Solomon'
    age: 3
}

const solomon2 = {name: 'Solomon', age: 3}  //declaration one one line

const solomon3 = {
    name: 'Solomon',
    classification: {           // property values can be objects too. this is a dict inside a dict.
        kingdom: 'Anamlia',
        phylum: "Chordata",
        class: 'Mamalia',
        order: 'Carnivore',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'TheloniusMonkus'
    },
};

solomon3.speak = function() {return "MamaMia!";};