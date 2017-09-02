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

// REPETITION -- THERE'S JOY IN REPETITION...

const matcher = beer99.match(/[0-9]+/);
console.log(matcher);

// Repetition modifier
// {n}      /d{5}       = matches only 5-digit numbers
// {n,}     /\d{5,}     = matches only 5-digit numbers OR longer ,
// {n, m}   /\d{2,5]/   = matches only numbers that are at least 2 digits but NO MORE than 5 digits
//  ?       /[a-z]\d?/i   =  matches letter followed by an optional digit

// period matching
const input1 = "Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-5555.";
const match2 = input1.match(/\d{5}.*/);

const equation = "(2 + 3.5) *7";
const matchme = equation.match(/\(\d \+ \d\.\d\) \* \d/);  // period matches any char EXCEPT new lines.
console.log(matchme);

// [\s\S]

// GROUPING ALLOWS TO CONSTRUCT SUB-EXPRESSIONS
// Groups are specified by parentheses: text.match(/..../i);

const texty = "Visit oreilly.com today!";
const match1 =texty.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(match1);

const html1 = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n>' +
'<link rel="stylesheet" href="https://secure.com/securestuff/css">\n' +
'<link rel="stylesheet" href="//anything.com/flexible.css">';

const matches1 = html1.match(/(?:https?)?\/\/[a-z][a-z[a-z0-9]+[a-z0-9]+/ig);
console.log(matches1);

// Lazy Matches vs. Greedy Matches

const input3 = "Regex pros know the difference between\n" +
"<i>greedy</i> and <i>lazy</i>matching.";
const zappa = input3.replace(/<i>(.*)<\/i>/ig,  '<strong>$1</strong>');
console.log(zappa);

// REvise above line to make it lazy:
const zappa1 = input3.replace(/<i>(.*?)<\/i>/ig,  '<strong>$1</strong>');        // NOTE: (.*?)...

// BACK REFERENCES skipped --rarely used

// REPLACING GROUPS
//let html5 = '<a class="yep" href ="/yep" id="nope">Yep</a>;
////html5 = html5.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');
//console.log(html5);

//FUNCTION REPLACEMENTS


//function sanitizeATag(aTag) {
//// get the parts of the tag...
//const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i); // parts[1] are the attributes of the opening <a> tag // parts[2] are what's between the <a> and </a> tags const attributes = parts[1]
//          // then we split into individual attributes
//.split(/\s+/);
//return '<a ' + attributes
//          // we only want class, id, and href attributes
//.filter(attr => /^(?:class|id|href)[\s=]/i.test(attr)) // joined by spaces
//.join(' ')
// Function Replacements
//| 251
//// close the opening <a> tag
//+ '>'
//// add the contents
//+ parts[2]
//// and the closing tag + '</a>';
//}


// ANCHORING    ^.....$

const string = " It was the best of  times, it was the worst of times.";
const beginning = string.match(/^\w+/g);
const end = string.match(/\w+$/g);
const everything = string.match(/^.*$/g);
const nomatch1 = string.match(/^best/ig);
const nomatch2 = string.match(/^worst$/ig);

console.log(beginning);
console.log(end);
console.log(everything);
console.log(nomatch1);
console.log(nomatch2);


// WORD BOUNDARY MATCHING   \b

const inputs = [ "john@doe.com",
        "john@doe.com is my email",
        "my email is john@doe.com",
        "use john@doe.com, my email",
        "my email:john@doe.com.",
];

const emailMatcher =
/\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
inputs.map( s=> s.replace(emailMatcher, '<a href"mailto:$&>$&</a>'));

console.log(inputs);

//  LOOKAHEADS: INDEPENDENT REGEX THAT DOESN'T CONSUME ANY INPUT

//function validPassword(p){
//return  /[A-Z]/.test(p) &&
//        /[0-9]/.test(p) &&
//        /[a-z]/.test(p) &&
//        !/[^a-zA-Z0-9].test(p;)}
//}
//
//console.log(validPassword);
//
//

//REVISED

function validPassword(p) {
return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
}

let samba = "12345Banter";

function valid1(){
if(validPassword(samba)) return valueOf(samba);
}


console.log(valid1);


// CONSTRUCTING REGEXES DYNAMICALLY

//const users = ["mary", "nick", "arthur", "sam", "yvette"]; const text = "User @arthur started the backup and 15:15, " +
//"and @nick and @yvette restored it at 18:35.";
//const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g'); text.match(userRegex); // [ "@arthur", "@nick", "@yvette" ]
















