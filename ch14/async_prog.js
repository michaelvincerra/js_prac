// "use strict";

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


