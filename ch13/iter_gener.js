// "use strict";


// New to ES6: Iterators and Generators


// function twinkle() {
//         const book = [
//         "Twinkle, twinkle, little bat!",
//         "How I wonder where you're at",
//         "Up above the world you fly",
//         "Like a tea tray in the sky",
//         "Twinkle, twinkle, little bat,",
//         "How I wonder where you're at!",
//         ];
//
// const it = book.values();
// let current = it.next();
// while(!current.done) {
//     console.log(current.value);
//     current = it.next();
// }}
//
// console.log(twinkle());


// The Iteration Protocol
// How to treat log AS IF it were directly iterable?
// Add the Symbol.iterator METHOD, as below, to return object with iterator behavior

// class Log{
//     constructor() {
//         this.messages = [];
//     }
//     add(message) {
//         this.messages.push({message, timestamp: Date.now() });
//     }
//     [Symbol.iterator]() {
//         return this.messages.values();
//     }
// }
//
//
// const log = new Log();
// log.add("First day at sea");
// log.add("Capt.Ahab ate a sea gull");
// log.add("Destroyed another vessel. Ha!");
//
// // Now iterate over log as if it were an array!
// for(let entry of log){
//     console.log(`${entry.message} @ ${entry.timestamp}`);
// }

// console.log(log);

// Alternate Version of the above
class Log {

    [Symbol.iterator]() {
        let i = 0;
        const messages = this.messages;
        return {
            next() {
                if (i >= messages.length)
                    return {value: undefined, done: true};
                return {value: messages[i++], done: false};
            }
        }
    }
}

console.log(Log);

//Fibonacci sequence
// Sum of previous two numbers in the sequence

class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b= 1;
        return {
            next() {
                let rval = {value: b, done: false};
                b+=a;
                a = rval.value;
                return rval;
            }
        };
    }
}


const fib = new FibonacciSequence();
let i = 0;
for(let f of fib){
    console.log(f);
    if(++i > 9) break;
}


// Generators
// Generators are functions that use an iterator to control their execution
// Generators: show 'function*' with asterisk; and can use 'yield'.

function* rainbow(){
    "use strict";
    yield 'red';
    yield 'orange';
    yield 'yellow';
    yield 'green';
    yield 'blue';
    yield 'indigo';
    yield 'violet';
}

// When you call a generator, an 'iterator' is returned.

// const it = rainbow();
// console.log(it.next());

// Now use a 'for of' loop to log ALL the colors of the rainbow!

for(let color of rainbow()){
    console.log(color);
}


function* interrogate(){
    "use strict";
    const name = yield "What is your name?";                // Because this has a yield, generator yields control to caller until a response
    const color = yield "What is your favorite color?";     // ""
    return `${name}'s favorite color is ${color}.`;
}

const it = interrogate();
console.log(it.next());                                     // Initiates dialogue in Console. Next use Console to complete dialogue.



// Generators and return

function* abc(){
    "use strict";
    yield 'a';
    yield 'b';
    yield 'c';
}

const it = count();
console.log(it.next());   // complete when done is true.

for(let l of abc()){
    console.log(l);
}
// recommended not to use 'return' in a generator; instead a useful value uses 'yield'






