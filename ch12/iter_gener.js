"use strict";


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

// Alternate Version
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


