/**
 * Created by michaelevan on 8/14/17.
 */
"use strict";

/// SLICE
const arr1 = [1,2,3,4,5];
arr1.slice(3);
arr1.slice(2, 4);
arr1.slice(-2);
arr1.slice(1, -2);
arr1.slice(-2,-1);


// SPLICE
// First arg, start index; second arg 0 if no deletion; and following are which numbers to add.
const arr2 = [1,5,7];
arr2.splice(1, 0, 2, 3, 4);
arr2.splice(5,0,6);
arr2.splice(1, 2);
arr2.splice(2, 1, 'a', 'b');



// CUTTING AND REPLACING WITHIN AN ARRAY, new in ES6
// First arg is where to copy to; second arg is wher to start copying from; and final (optional) is where to stop copying from.
const arr3 = [1,2,3,4];
arr3.copyWithin(1,2);
arr3.copyWithin(2,0,2);
arr3.copyWithin(0, -3, -1);



// FILL ARRAY WITH A SPECIFIC VALUE
// Set any any number of fixed elements with a fixed value in place.
// Array(5) indicates the number of elements in the list; fill(1) indicates added item; can be changed as shown.
const arr4 = new Array(5).fill(1);
arr4.fill("a");
arr4.fill("b", 1);
arr4.fill("c", 2, 4);
arr4.fill(5.5, -4);
arr4.fill(0, -3, 1);


// Reversing and sorting arrays
// reverses order in place
const arr5 = [1,2,3,4,5];
arr5.reverse();


const arr6 = [5,3,2,4,1];
// sorts an array in place
arr6.sort();


const arr7 = [{name: "Silvia"}, {name: "Giacomo"}, {name: "Laura"}, {name: "Desdemona"}];

// allows  to sort alphabetically by name 'property.'
// console.log(arr7.sort((a,b) => a.name > b.name));

// Sorted reverse alphabetically by second letter of name property [index number]
console.log(arr7.sort((a,b) => a.name[1] < b.name[1]));


// ARRAY SEARCHING
// indexOf:  Returns index of the first element that it finds that's strictly equal to search
// lastIndexOf: Returns the last index that matches search using reverse direction
// Returns -1 if there is no match.

const o = {name: "Giovanni"};

const arr8 = [1, 5, "a", o, true, 5, [1,2], "9"];

console.log(arr8.indexOf(5));
console.log(arr8.lastIndexOf(5));
console.log(arr8.indexOf("a"));
console.log(arr8.lastIndexOf("a"));
console.log(arr8.indexOf({name: "Giovanni"}));
console.log(arr8.indexOf(o));
console.log(arr8.indexOf([1,2]));
console.log(arr8.indexOf("9"));
console.log(arr8.indexOf(9));

console.log(arr8.indexOf("a", 5));
console.log(arr8.indexOf(5,5));
console.log(arr8.lastIndexOf(5, 4));   // where 5 is value match, and 4 is start of new index (where search starts)
console.log(arr8.lastIndexOf(true, 3));

//findIndex
// Returns an index if a match; otherwise, if not, returns -1.

const arr9 = [{id: 5, name: "Giovanna"}, {id: 7, name: "Francesco"}];

console.log(arr9.findIndex(o => o.id === 5));
console.log(arr9.findIndex(o => o.name === "Francesco"));
console.log(arr9.findIndex(o => o === 3));
console.log(arr9.findIndex(o => o.id === 17));


// FIND function
// find returns the element searched for; otherwise "null" if not found.

const arr10 = [{id: 5, name: "Giovanna"}, {id: 7, name: "Francesco"}];

console.log(arr10.find(o => o.id === 7));
console.log(arr10.find(o => o.name === 2));


// FIND using 'this'

class Person {
    constructor(name) {
        this.name = name;
        this.id  = Person.nextID++;
    }
}
Person.nextID = 0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter"),
    jay = new Person("Jay");

const arr11 = [jamie, juliet, peter, jay];

//option 1: direct comparison of ID:
console.log(arr11.find(p => p.id === juliet.id));

//option 2: using "this" arg:
console.log(arr11.find(p => p.id === this.id, juliet));


// SOME and EVERY: Membership methods
// some returns 'true' if it finds an item that meets criteria
// some returns 'false' if not
// every returns true if every element in the array passes criteria

const arr12 = [5, 7, 12, 15, 17];

console.log(arr12.some(x => x%2===0));
console.log(arr12.some(x => Number.isInteger(Math.sqrt(x))));


const arr13 = [4, 6, 16, 36];

console.log(arr13.every(x => x%2===0));                                 // All numbers are divisible by 2/ mod 0
console.log(arr13.every(x => Number.isInteger(Math.sqrt(x))));          // 6 is not a square




// MAP AND FILTER
// Create a custom function using the arrow notation.

// const cart = [{name:"Widget", price: 9.95}, {name: "Gadget", price: 22.95}];
// const names = cart.map(x => x.name);
// const prices = cart.map(x => x.price);
// const discountPrices = prices.map(x => x*0.8);
// // const lcNames = names.map(String.toLowerCase());
// const lcNames = names.map(x => x.toLowerCase());




const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];

const cart = items.map((x, i) => ({name: x, price: prices[i]}));

// cart = [{name:"Widget", price: 9.95}, {name: "Gadget", price: 22.95}];


// create a deck of playing cards
const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) // hearts, clubs, etc.
    for(let value=1; value<=13; value++)
        cards.push({ suit, value });

// get all cards with a value of 2

console.log(cards.filter(c => c.value === 2));


// Determine the length only.

// get all diamonds
console.log(cards.filter(c => c.suit === 'D'));

// get all face cards
console.log(cards.filter(c => c.value >10));

// get all face cards that are hearts
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'));


function cardToString(c) {
    const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
    const values = {1: 'A', 11: "J", 12: 'Q', 13: 'K'};
    for(let i=2; i<=10; i++) values[i] = i; 
    return values[c.value]+ suits[c.suit];
}

// get all cards with a value of 2
cards.filter(c => c.value === 2);
.map(cardToString); //

// get all face card that are hearts.

