// "use strict";

// THIS
//var person = {firstname: "John", lastname: "Doe"
//fullName function() {
//    console.log(this.firstname +" "+ this.lastname);
//}
//}



/*
 ASYNCHRONOUS SUPPORT HAS 3 AREAS:
- Call back:        A function that can be invoked in the future
                    Call backs are often (not always) anonymous functions
- Promise era:
- Generator era:

 */


// console.log("Before timeout: " + new Date());
// function f() {
//     "use strict";
//     console.log("After timeout: " + new Date());
// }
//
// setTimeout(f, 60*1000);  // one minute
// console.log("I happen after setTimeout!");
// console.log("Me too!");
// f();
//
// // Version using anonymous function
//
// setTimeout(function(){
//     console.log("After timeout: " + new Date());
// }, 60*1000);  // This line sets the delay parameter
//
// console.log(setTimeout);

// setInterval and clearInterval
// setInterval runs the callback at a specific interval forever; or as specified.

// create a setInterval that runs every 5 sec until the minute rolls over or t10 times, whichever comes first.

// const start = new Date();
// let i = 0;
// const intervalId = setInterval(function(){
//     let now = new Date();
//     if(now.getMinutes() !==start.getMinutes() || ++i>10)
//         return clearInterval((intervalId));
//     console.log(`${i}: ${now}`);
// }, 5*1000);
//
//
// console.log("IntervalId is: "+ intervalId);

// How do scope and and closures affect asynchronous execution?
// Every time that you invoke a function, you you create a closure:
// all variables that are created inside the function
// exist as long as something can access them.


// Example: 5 second countdown

function countdown() {
    "use strict";
    let i;
    console.log("Countdown: ");
    for (i = 5; i > 0; i--) {
        setTimeout(function () {            // The function that is passed is what's asynchronous; where problem occurs!
            console.log(i === 0 ? "GO!" : i);
        }, (5 - i) * 1000);
    }
}
countdown();
// When countdown is invoked, it creates a 'CLOSURE' that contains variable i.
// NOTE! All of the anonymous callbacks that we create in the for loop  have access to i --the same i!!!


// The easiest way to solve this is to move declaration (let i=5...) into the For Loop.

function countdown() {
    "use strict";
    console.log("Countdown: ");
    for (let i = 5; i > 0; i--) {                   // DIFFERENCE: 'i' is now block scoped!!!
        setTimeout(function () {                    // Be mindful of the scope that your callbacks are declared in!!!
            console.log(i === 0 ? "GO!" : i);
        }, (5 - i) * 1000);
    }
}
countdown();

// Error first callbacks (callbacks make exception handling difficult).

// const fs = require('fs');
//
// const fname = 'may_or_may_not_exist.txt';
// fs.readFile(fname, function(err, data){
//     "use strict";
//     if(err) return console.error(`error reading file ${fname}: ${error.message}`); // Critical: 'return' console.error{... is important to see the error.
//     console.log(`${fname} contents: ${data}`);
// });


//  Promises
//  How to address the shortcomings of callbacks
//  Promises ensure that "callbacks are always handled in the same predictable manner."
//  Promise can only be fulfilled OR rejected.

function countdown(seconds){
    return new Promise(function(resolve, reject){
        for(let i=seconds; i>=0; i--){
            setTimeout(function(){
                if(i>0) console.log(i+ '...');
                else resolve(console.log("Go!"));
            }, (seconds-i)*1000);
        }
    });
}

// countdown(10);

// Note HOW below function relies on promise param passed via function countdown
// or take the result of the promise and use it...
// Why is this useful?

// countdown(5).then(
//     function(){
//         "use strict";
//         console.log("Countdown completed successfully");
//     },
//     function(err){
//         "use strict";
//         console.log("Countdown experienced an error: " + err.message);
//     }
// );

// const p = countdown(5);                                 // store the result of the promise in variable p
// p.then(function(){                                      // use THEN handler with anonymous function (only 1 will be called)
//     console.log("countdown completed successfully");
// });
//
// p.catch(function(err){                                  // use ERR handler with anonymous function (only 1 will be called)
//     console.log("countdown experienced an error: " +err.message);
// });

// esempio di superstizione negli stati uniti

function countdown(seconds) {
    return new Promise(function(resolve, reject){
        "use strict";
        for(let i=seconds; i>0; i--){
            setTimeout(function(){
                if(i===13) return reject(new Error("Definitely not counting that number!"));
                if(i>0) console.log(i + '...');
                else resolve(console.log("Go!"));
            }, (seconds-i)*1000);
        }
    });
}

console.log(countdown(15));

// EVENTS: Using Node's .EventEmitter
// How to subscribe to an event? A callback.
// jQuery also provides event listening: http://api.jquery.com/category/events/

const EventEmitter = require('events').EventEmitter;
// require will require 'require.js' or to be used with node.js from the server side.


class Countdown extends EventEmitter{
    constructor(seconds, superstitious){
        super();
        this.seconds = seconds;
        this.superstitious = !!superstitious;
    }
    go(){                           // starts the countdown and returns a promise.
        const countdown = this;
        return new Promise(function(resolve,reject){
            for(let i=countdown.seconds; i>0; i--){
                timeoutIds.push(setTimeout(function(){
                if(countdown.superstitious && i ===13){
                //clear all pending timeouts
                timeoutIds.forEach(clearTimeout);
                return reject(new Error("Definitely not counting that!"));
                }
                countdown.emit('tick', i);
                if(i===0) resolve();
                }, (countdown.seconds-i)*1000));
            }
        });
    }
}

//const c = new Countdown(15, true)
//.on('tick', function(i){
//if(i>0) console.log(i + '...');
//});
//
//c.go()
//
//.then(function(){
//console.log('GO!');
//})
//.catch(function(err){
//console.error(err.message);
//})


//Promise Chaining

function launch() {
return new Promise(function(resolve, reject){
console.log("Lift off!");
setTimeout(function() {
resolve("In orbit!");
}, 2*1000);  // very fast rocket
});
}

// Now chain this function to a countdown
const c = new Countdown(5)
    .on('tick', i => console.log(i+ '...'));


c.go()
    .then(launch)
    .then(function(msg) {
    console.log(msg);
})
.catch(function(err){
console.error("Houston we have a problem.");
})

console.log(launch()); 
