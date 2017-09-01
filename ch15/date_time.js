
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

//console.log(moment(d).format("YYYY-MM-DD"));
//console.log(moment(d).format("YYYY-MM-DD HH:mm"));
//console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));
//console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));
//
//console.log(moment(dd).format("dddd, MMMM [the] Do, YYYY"));
//console.log(moment(dd).format("h:mm a"));


// DATE COMPONENTS

// Results that someone would see in Los Angeles Time Zone/ PDT

const tt = new Date(Date.UTC(1815, 9, 10)); 

//console.log(tt.getFullyear());
console.log(tt.getMonth());
console.log(tt.getDate());
console.log(tt.getDay());
console.log(tt.getHours());
console.log(tt.getMinutes());
console.log(tt.getSeconds());
console.log(tt.getMilliseconds());

// UTC equivalents to above:

console.log(tt.getUTCFullYear());
console.log(tt.getUTCMonth());
console.log(tt.getUTCDate());



// Date comparisons

const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

console.log(d1>d2);     // true
console.log(d1<d2);     // false


// Date Arithmetic

const msDiff = d2 - d1
const daysDiff = msDiff/1000/60/60/24;

// This property also simplifies sorting dates using Array.prototype.sort

const dates = [];
//create some randome dates

const min = new Date(201, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf();
for(let i=0; i<10; i++)
    dates.push(new Date(min + delta*Math.random()));
    // These dates, while random, can be SORTED
    // ascending
    console.log(dates.sort((a,b)=> b - a));
    // or descending
    console.log(dates.sort((a, b) => a - b ));


// MOMENT.js  NOT WORKING PRESENTLY

//const m = moment(); m.add(3, 'days'); m.subtract(2, 'years');
//    m = moment();
//    m.startOf('year');
//    m.endOf('month');
//
//// Moment.js also allows you to chain methods:
//const m = moment() .add(10, 'hours') .subtract(3, 'days') .endOf('month');

//moment().subtract(10, 'seconds').fromNow(); // a few seconds ago
//moment().subtract(44, 'seconds').fromNow(); // a few seconds ago
//
//moment().subtract(45, 'seconds').fromNow(); // a minute ago
//moment().subtract(5, 'minutes').fromNOw();  // 5 minutes ago
//moment().subtract(44, 'minutes').fromNOw(); // 44 minutes ago
//
//moment().subtract(45, 'minutes').fromNOw(); // an hour ago
//
//moment().subtract(5, 'hours').fromNOw();    // 4 hours ago
//
//moment().subtract(21, 'hours').fromNOw();   // 21 hours ago
//
//moment().subtract(22, 'hours').fromNOw();   // a day ago
//
//moment().subtract(344, 'days').fromNOw();   // 344 days ago
//
//moment().subtract(345, 'days').fromNOw();   // a year ago


