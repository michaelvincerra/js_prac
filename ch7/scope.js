/**
 * Created by michaelevan on 8/13/17.
 */
"use strict";


//SCOPE VS EXISTENCE
// function f(x) {
//     return x + 3;
// }
//
//
// f(5);
//x;   //x is not defined. It's out of scope. The scope of x is function f.



// LEXICAL SCOPING
// const x = 3;
// function f() {
//     console.log(x);
//     console.log(y);
// }
//
// {// new scope
//     const y = 5;
//     f();
// }

// GLOBAL SCOPE

// let name = "Irena";
// let age = "25";
//
// function greet(){
//     console.log(`Hello, ${name}!`);
// }
//
// function getBirthyear(){
//     return new Date().getFullYear() - age;
// }

// REVISION

// let user = {
//     name: "Irena",
//     age: 25,
//     sex: "female",
//     nationality: "Italian",


//
// };
//
// function greet(user){
// }
//     console.log(`Hello, ${user.
// }!`);
//
// function getBirthyear(user) {
//     return new Date().getFullYear() - user.age;
// }
//
// console.log(`${user.name} is ${user.age} years of age.`);
// console.log("And yet the world keeps spinning.");

// BLOCK SCOPE

// console.log('Before block');
// {
//     console.log('Inside block');
//     const x = 3;
//     console.log(x);
// }
//
// console.log(`outside block; x=${x}`);
// console.log("And yet the world keeps spinning.");


// VARIABLE MASKING

// {
//     // block 1
//     const x = "blue";
//     console.log(x);
// }
// console.log(typeof x);  //"x" is undefined; out of scope.
// {
//     // block 2
//     const x = 3;
//     console.log(x);
// }
// console.log(typeof x);  //"x" is undefined; out of scope.

// NESTED FUNCTION -- WITH TYPEOF OUT OF SCOPE
// {
//     // OUTER block
//     let x = "blue";
//     console.log(x);
//
//     console.log(x);  //"x" is undefined; out of scope.
//     {
//         // INNER block
//         const x = 3;        // VARIABLE MASKING
//         console.log(x);
//     }
//     console.log(x);
// }
// console.log(typeof x);  //"x" is undefined; out of scope.

// CLOSURE
//
// let globalFunc;                 // undefined global function
// {
//     let blockVar = 'a';         // block-scoped variable
//     globalFunc = function() {
//         console.log(blockVar);
//     }
// }
// globalFunc();


// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// (function(){
//     // This is the IIFE body.
// })();
//
// const message = (function(){
//     const secret = "I'm a secret!";
//     return `The secret is ${secret.length} characters long.`;
// })();
// console.log(message);

// const f = (function(){
//     let count = 0;
//     return function() {
//         return `I have been called ${++count} times.`;
//     }
// })();           /// Note: the '()' called at end invokes the anonymous function
// console.log(f());
// console.log(f());
// console.log(f());

// FUNCTION SCOPE AND HOISTING
//
// let var1;                   //WHEREAS LET CANNOT BE DECLARED BEFORE INVOCATION....
// let var2 = undefined;
// console.log(var1);
// console.log(var2);
// console.log(undefinedVar);
//
//
// console.log((x);
// console.log(var x = 3);         // VAR'S VALUE CAN BE DECLARED BEFORE INVOCATION.
// console.log(x);


var x;
x;
x = 3;
x;

console.log(x);


var x = 3;      // Variables declared with var use a mechanism called 'hoisting',
                // meaning any variables declared as such are hoisted to the top.
                // Only the declaration, not the assignment, is hoisted. See var x = 2
if(x === 3) {
    var x = 2;
    console.log(x);
}
console.log(x);
