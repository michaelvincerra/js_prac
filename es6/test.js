/* */


"use strict";
// es6  feature: block-scoped  "let" declaration
const sentences = [
    {subject: "Javascript", verb: "is", object: "great" },
    {subject: "Elephants", verb: "are", object: "wise"},
];

//es6 object destructuring
function say({subject, verb, object}) {
    // es6 feature: template strings
    // note that quotes below are backticks (`), NOT single quotations.
    console.log(`${subject} ${verb} ${object}`);
}
// es feature: for .. of
for(let s of sentences) {
    say(s);
}