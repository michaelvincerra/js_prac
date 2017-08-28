// "use strict";

/*
 ASYNCHRONOUS SUPPORT HAS 3 AREAS:
- Call back:        A function that can be invoked in the future
                    Call backs are often (not always) anonymous functions
- Promise era:
- Generator era:

 */


console.log("Before timeout: " + new Date());
function f() {
    "use strict";
    console.log("After timeout: " + new Date());
}

setTimeout(f, 60*1000);  // one minute
console.log("I happen after setTimeout!");
console.log("Me too!");


// Version using anonymous function

setTimeout(function(){
    console.log("After timeout: " + new Date());
}, 60*1000);  // This line sets the delay parameter

console.log(setTimeout);

// setInterval and clearInterval

