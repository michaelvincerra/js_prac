/**
 * Created by michaelevan on 8/4/17.
 */

'use strict';

// function getGreeting() {
//     return "Buongiorno a Tutti!"
// }
//
// getGreeting();

//
//
// function f(x) {
//     console.log(`inside f: x=${x}`);
//     x = 5;
//     console.log(`inside f: x=${x} (after assignment)`);
// }
//
// let x = 3;
// console.log(`before calling f: x =${x}`);
// f(x);     // Returns the value that f(x) resolves to, above.
// console.log(`after calling f: x =${x}`);

//////////////// KEEP ABOVE AND BELOW SEPARATE: COMMENT OUT EITHER/OR TO TEST.
//

// function f(o) {
//     o.message = `set in f(previous value: '${o.message}')`;
// }
//
// let o = {
//         message: "initial value"
// };
//     console.log(`before calling f: o.message= "${o.message}"`);
// f(o);
// console.log(`after calling f: o.message="${o.message}"`);


///////////////////


// function f(o) {
//     o.message = "set in f";
//     o = {
//         message: "new object!"
//     };
//     console.log(`inside f: o.message = "${o.message}" (after assignment)`);
// }
//
// let o = {
//    message: "initial value"
// };
//
// console.log(`before calling f: o.message="${o.message}"`);
// f(o);
// console.log(`after calling f: o.message="${o.message}"`);


// let o  = {message: 'initial value'};
//
// console.log(`before calling f: o.message="${o.message}"`);
// f(o);
//
// console.log(`after calling f: o.message="${o.message}"`);


//
//    console.log(`inside f: o.message = "${o.message}" (after assignment)`);
// }
// let o  = {message: 'initial value'};
//
// console.log(`before calling f: o.message="${o.message}"`);
// f(o);
//
// console.log(`after calling f: o.message="${o.message}"`);



//////// DESTRUCTURING ARGUMENTS

// function getSentence({subject, verb, object}) {
//     return `${subject} ${verb} ${object}`;
// }
//
// const o = {
//     subject: "I",
//     verb: "love",
//     object: 'JavaScript!'
// };
//
// const arr = ["I", "love", "JavaScript as an array!"];
//
// getSentence(o);


// function getSentence({subject, verb, object}) {
//     return `${subject} ${verb} ${object}`;
// }
//
// const o = {
//     subject: "I",
//     verb: "love",
//     object: 'JavaScript!'
// };
//
// const arr = ["I", "love", "JavaScript as an array!"];
// getSentence(arr);


///// Destructuring Arguments

// function addPrefix(prefix, ...words) {
//     const prefixedWords = [];  // list building pattern?
//     for(let i=0; i<words.length; i++){
//         prefixedWords[i] = prefix + words[i];
//     }
//     return prefixedWords;
// }
// addPrefix("con", "verse", "vex");


///// Default Arguments

// function f(a, b = "default", c=3){
//     return `${a} - ${b} - ${c}`;
// }

//
// console.log(f(5, 6, 7));
// console.log(f(5, 6));
// console.log(f(5));
// console.log(f());
//
// const p = {                                 // Object
//     name: "Wallace",                        //primitive property; key, value pair
//     bark: function() {return "Woof!";},     // function property (expresses value of pair)
// }
//
// console.log(p);
//
// const q = {
//     name: "Wallace",
//     speak() {return `My name is ${this.name}!`;},
// }
// q.speak();
//
// ///Big Arrow Notation
//
// const f1 = function() {return "hello!"}
// console.log(f1());
// // or
// const f11 = () => "hello!"
// console.log(f11());
//
// const f2 = function(name) {return `hello ${name}!`;}
// console.log(f2());
// // or
// const f22 = name => `Hello, ${name}!`;
// console.log(f22());
//
// const f3 = function(a, b) {return a+b; }
// console.log(f3());
// //or
// const f33 = (a,b) => a+b;
// console.log(f33());


/// BIG ARROW NOTATION USING 'this'

// const o = {
//     name: 'Silvia',
//     greetBackwards: function(){
//         const getReverseName = () => {
//             let nameBackwards = '';
//             for(let i = this.name.length-1; i>=0; i--){
//                 nameBackwards += this.name[i];
//             }
//             return nameBackwards;
//         };
//     },
// };
// o.greetBackwards();
//

/// CALL, APPLY, AND BIND
const barbera = {name: "Barbera"};
const nebbiolo = {name: "Neibbiolo"};


function greet() {
    return `Hello, I'm ${this.name}!`;
}

// greet();
// greet.call(barbera);'call' allows use to call a function as if it were a method by provingin it an object to bind 'this' to
// greet.call(nebbiolo);


function update(grapeType, region) {
    this.grapeType = grapeType;
    this.region = region;
}


update.call(barbera, 'Rosso', 'Piemonte');      // 'call' takes arguments directly.
update.call(pino_grigio, "Bianco", "Veneto");

update.apply(barbera, ["Rosso",  "Piemonte"]);  // 'apply' takes its arguments as an array.
update.apply(pino_grigio, ["Bianco", "Veneto"]);


const updateBarbera = update.bind(barbera);  /// 'bind' allows you to permanently associate a value for 'this' with a function.

updateBarbera('Rosso', "Piemonte");

updateBarbera.call(nebbiolo, "Rosso", "Piemonte");






