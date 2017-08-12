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

function getSentence({subject, verb, object}) {
    return `${subject} ${verb} ${object}`;
}

const o = {
    subject: "I",
    verb: "love",
    object: 'JavaScript!'
};

const arr = ["I", "love", "JavaScript as an array!"];

getSentence(o);


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

function f(a, b = "default", c=3){
    return `${a} - ${b} - ${c}`;
}

console.log(f(5, 6, 7));
console.log(f(5, 6));
console.log(f(5));
console.log(f());

const p = {                                 // Object
    name: "Wallace",                        //primitive property; key, value pair
    bark: function() {return "Woof!";},     // function property (expresses value of pair)
}

console.log(p);





