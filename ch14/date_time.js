
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
// Comes with/ without time-zone support

// This tutorial will use the larger version with time-zone support.
// Use this CDN:
// <script src="//cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.4.0/ ↩ moment-timezone.min.js"></script>

// If working in Node.js, you can install Moment.js with:
// $ npm install --save moment-timezone
// Then reference it from your script with:
// const moment = require("moment-timezone");
// See also: http:// momentjs.com

// To construct dates on the server for international use, use:
// REMEMBER: Dates are ZERO_INDEXED!!!
// Date.UTC() returns the numeric value of the date

const t = new Date(Date.UTC(2017, 7, 32));
console.log(t);

//const tz = moment.tz([2017, 07, 32, 9, 19], 'America/Los Angeles').toDate();
//console.log(tz);

// Best way to ensure that dates are transmitted safely is to use JSON

//const before = {d: new Date()};
//before.d instanceof date
//const json = JSON.stringify(before);
//const after = JSON.parse(json);
//after.d instanceof date
//typeof afterd.
//
//console.log(before);
//console.log(after);
//
//after.d - new Date(after.d);
//after.d instanceof date

// WHEN A DATE IS ENCODED IN JSON, IT WILL ALWAYS BE UTC  -- when passing dates
// ALWAYS CHECK DIFFERENT SYSTEMS (.NET) TO LEARN HOW IT SERIALIZES DATES --IT MAY BE DIFFERENT!!!

// FORMATTING DATES
// With Moment.js use format

const dd = new Date(Date.UTC(1930, 4, 10));

console.log(dd.toLocaleDateString());
//console.log(dd.toLocaleFormat());   // Received error: Uncaught TypeError dd.toLocaleFormat is not a function


console.log(dd.toLocaleTimeString());
console.log(dd.toTimeString());
console.log(dd.toUTCString());

console.log(moment(d).format("YYYY-MM-DD"));
console.log(moment(d).format("YYYY-MM-DD HH:mm"));
console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));
console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));

console.log(moment(dd).format("dddd, MMMM [the] Do, YYYY"));
console.log(moment(dd).format("h:mm a"));


