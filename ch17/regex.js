"use strict";

// string matching functionality

// Find substring in string

const input = "As I was going to San Felice";

console.log(input.startsWith("As"));
console.log(input.endsWith("Felice"));
console.log(input.startsWith("going", 9));
console.log(input.endsWith("going", 14));
console.log(input.includes("going"));
console.log(input.includes("going", 10));
console.log(input.indexOf("going"));
console.log(input.indexOf("going", 10));
console.log(input.indexOf("nope"));


//For a case-insensitive comparison:

console.log(input.toLowerCase().startsWith("as"));

const inputty = "As I was going to San Felice";
const output = inputty.replace("going",  "bouncing");

console.log(output);


// regex literals

const re1 = /going/;                // to search for the word going
const re2 = new RegExp("going");    // equivalent to object constructor

console.log(re1);
console.log(re2);


const re = /\w{3,}/ig;

// start with the string input
console.log(input.match(re)); // Find words that are three chars or longer
console.log(input.search(re));

console.log(re.test(input));    // 'was' first match
console.log(re.exec(input));    // going  exec remembers where it is
console.log(re.exec(input));    // Saint
console.log(re.exec(input));    // Felice
console.log(re.exec(input));    // null-- no more searches


// Any of the following can be used with a regex literal:

console.log(input.match(/\w{3,}/ig));
console.log(input.search(/\w{3,}/ig));

// Replace all four-letter words

const output2 = input.replace(/\w{4,}/ig, '****')
console.log(output2);

// SOPHISTICATED USE OF REGEX:  A PATTERN FOR CONSUMING INPUT STRINGS


// REGEX ALTERNATIONS --next!
// Find all the HTML tags that reference an external source
// | - vertical bar means alternation

//const html = 'HTML with <a href="/one">one link</a>, and some Javascript.' +
//'<script src="regex.js"></script>';                             // Note: HTML tags appear inside '' quotations
//const matches = html.match(/area|a|link|script|source/ig);      // first attempt;  /ig means ignore (i) case, and search globally (g).
// revised:
// const matches = /<area/<a/<link/<script/<source/

// Other examples:
 const html = '<br> [!CDATA[[<br>]]';
 const matches = html.match(/<br>/ig);
 console.log(matches);


// REGEX Character Sets (SAME AS PYTHON)
// Find all the numbers in a string

const beer99 = "99 bottles of beer on the wall " ;
//"take one down and pass it around -- " ;
//...
const m2 = beer99.match(/[0-9]/g);

//const match = beer99.match(/[\-0-9a-z.]/ig);
//console.log(match);

// NEGATE character  sets with '^'

const match = beer99.match(/[^\-0-9a-z.]/ig);
// in above case this matches ONLY the whitespace; all else is negated by ^

// Example of /s  -- whitespace

const stuff =   'height:    9\n' +
                'medium:    5\n' +
                'low:       2\n' ;
const levels = stuff.match(/:\s*[0-9]/g);

// * -- means zero or more whitespaces

const messyPhone = '(503) 555-5151';
const neatPhone = messyPhone.replace(/\D/g, '') // \D --any char that's NOT 0-9
console.log(neatPhone);


const field = '        something ';
const valid = /\S/.test(field);
console.log(field); 


