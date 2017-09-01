"use strict";

// Date object
// Moment.js

const d = new Date();
console.log(d);
console.log(d.valueOf());

// months are zero-based

console.log(new Date(2015, 0));
console.log(new Date(20015, 1));
console.log(new Date(2015, 1, 4));
console.log(new Date(2015, 1, 4, 13));
console.log(new Date(2015, 1, 4, 13, 30));
console.log(new Date(2015, 1, 4, 13, 30, 5));
console.log(new Date(2015, 1, 4, 13, 30, 5, 500));


// Date objects are always formatted to local time.


// Moment.js -- a Date Library for JavaScript
