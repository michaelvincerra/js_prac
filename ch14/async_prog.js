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
//  Promises only happen ONCE
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

//console.log(countdown(15));
//
//// EVENTS: Using Node's .EventEmitter
//// How to subscribe to an event? A callback.
//// jQuery also provides event listening: http://api.jquery.com/category/events/
//

//const EventEmitter = require('events').EventEmitter;
// require will require 'require.js' or to be used with node.js from the server side.


//class Countdown extends EventEmitter{
//    constructor(seconds, superstitious){
//        super();
//        this.seconds = seconds;
//        this.superstitious = !!superstitious;
//    }
//    go(){                           // starts the countdown and returns a promise.
//        const countdown = this;
//        return new Promise(function(resolve,reject){
//            for(let i=countdown.seconds; i>0; i--){
//                timeoutIds.push(setTimeout(function(){
//                if(countdown.superstitious && i ===13){
//                //clear all pending timeouts
//                timeoutIds.forEach(clearTimeout);
//                return reject(new Error("Definitely not counting that!"));
//                }
//                countdown.emit('tick', i);
//                if(i===0) resolve();
//                }, (countdown.seconds-i)*1000));
//            }
//        });
//    }
//}

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

//function launch() {
//return new Promise(function(resolve, reject){
//console.log("Lift off!");
//setTimeout(function() {
//resolve("In orbit!");
//}, 2*1000);  // very fast rocket
//});
//}
//
//// Now chain this function to a countdown
//const c = new Countdown(5)
//    .on('tick', i => console.log(i+ '...'));
//
//
//c.go()
//    .then(launch)
//    .then(function(msg) {
//    console.log(msg);
//})
//.catch(function(err){
//console.error("Houston we have a problem.");
//})
//
//console.log(launch());



// MORE EXAMPLES OF SETTIMEOUT FUNCTION

//console.log("Hello");
//setTimeout(function(){
//console.log("Goodbye!");
//}, 2000);
//console.log("Hello, again.")


// USING CALLBACKS

//var data = getData();
//console.log("The data is: " + data);
//we will pass in a callback function to getData:


//getData(function (data) {
//  console.log("The data is: " + data);
//});

// Simplify the above; directly pass in the callback, as follows:

//let callback = [1, 2, 3]
//function getData(callback) {
//$.get("example.php", callback);
//    }
//console.log(getData);
//
//
//// BAD EXAMPLE
//for(var i = 1; i <= 3; i++) {
//setTimeout(function(){
//console.log(i + " seconds elapsed");
//}, i *1000);
//}

//IMPROVED EXAMPLE WITH ES6
// LET creates a new scope for 'i' in EACH iteration (thanks to ES6)!
for(let i= 1; i <= 3; i++){
    setTimeout(function(){
    console.log(i +  " seconds elapsed");
}, i*1000);
}


// Preventing Unsettled Promises
// PROBLEM: Unsettled promises can get lost
// SOLUTION: Specifify a timeout for promises


// Problem below: Fails silently half the time with no console.log on 'reject'

//function launch() {
//    return new Promise(function(resolve, reject){
//    if(Math.random() < 0.5) return;
//        console.log("Lift off!");
//        setTimeout(function() {
//        resolve("In orbit!");
//}, 2*1000);  // very fast rocket
//});
//}
//
//console.log(launch());

// Above revised by adding a Timeout
// A function that returns a promise that calls a function that returns a promise...

//function addTimeout(fn, timeout) {
//if(timeout ===undefined) timeout = 1000; //default timeout in seconds
//    return function (...args) {
//    return new Promise(function(resolve, reject){
//        const tid = setTimeout(reject, timeout,
//        new Error("promise timed out"));
//        fn(...args)
//            .then(function(...args){
//                clearTimeout(tid);
//                resolve(...args);
//              })
//              .catch(function(...args){
//                clearTimeout(tid);
//                reject(...args);
//                });
//                });
//         }
//    }
//console.log(addTimeout(1, 100));
//
//// Revise below so that the promise settles.
//const c = new Countdown(15, true)
//
//c.go()
//    .then(addTimeout(launch, 4*1000)) // Timeout added here.
//    .then(function(msg) {
//    console.log(msg);
//})
//.catch(function(err){
//    console.error("Houston we have a problem.");
//});


// Generators
// Combining generators with promises
// Turn Nodes error-first callbacks into promises.

function nfcall(f, ...args){
    return new Promise(function(resolve, reject)  {
    f.call(null, ...args, function(err, ...args){
        if(err) return reject(err);
            resolve(args.length<2 ? args[0] : args);
        });
        });
      }

//console.log(nfcall());


// Create promise timeout ptimeout
//let delay = 10;
function ptimeout(delay) {
return new Promise(function(resolve, reject){
    setTimeout(resolve, delay);
    console.log(`Delay is ` + delay);

    });

    }

//ptimeout(100);

// highly recommended to read: http://davidwalsh.name/es6-generators

function genrun(g) {
const it = g();
(function iterate(val){
const x = it.next(val);
    if(!x.done) {
    if(x.value  instanceof Promise) {
        x.value.then(iterate).catch(err => it.throw(err));
        } else {
            setTimeout(iterate, 0, x.value);
            }
            }
            })();
            }

//function* theFutureIsNow() {
//    const dataA = yield nfcall(fs.readFile, 'a.txt');
//    const dataB = yield nfcall(fs.readFile, 'b.txt');
//    const dataC = yield nfcall(fs.readFile, 'c.txt');
//    yield ptimeout(60*1000);
//    yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
//
//}
//
//genrun(theFutureIsNow);


// Promise provides the method: Promise.all, which resolves when all the promises in an array resolve and
// will executre asynchronous code in parallel if possible.

//function* theFutureIsNow() {
//    const data = yield Promise.all([
//        nfcall(fs.readFile, 'a.txt');
//        nfcall(fs.readFile, 'b.txt');
//        nfcall(fs.readFile, 'c.txt');
//    ]);
//    yield ptimeout(60*1000);
//    yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
//}

// What parts of the program can be run in parallel?
// What parts cannot be run in parallel?

// If you designing websites, consider using: http://koajs.com/ , which is designed to work with 'co'
// co generator is found at http://github.com/tj/co

// Exception Handling

// theFutureIsNow revised.....

//function* theFutureIsNow() {
//    let data;
//    try{
//        data = yield Promise.all([
//        nfcall(fs.readFile, 'a.txt'),
//        nfcall(fs.readFile, 'b.txt'),
//        nfcall(fs.readFile, 'c.txt'),
//    ]);
//    catch(err) {
//    console.error("Unable to read one or more input files: " + err.message);
//        throw err
//        }
//        yield ptimeout(60*1000);
//        try{
//            yield nfcall(fs.writeFile, 'd.txt', data[0]+data[1]+data[2]);
//        } catch(err) {
//        console.error("Unable to write output file: " + err.message);
//        }
//     }
//    yield ptimeout(60*1000);
//    yield nfcall(fs.writeFile, 'd.txt', dataA+dataB+dataC);
//
//}
//
//genrun(theFutureIsNow);








