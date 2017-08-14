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
{
    // outer block
    let x = "blue";
    console.log(x);

    console.log(x);  //"x" is undefined; out of scope.
    {
        // block 2
        const x = 3;        // VARIABLE MASKING
        console.log(x);
    }
    console.log(x);
}
console.log(typeof x);  //"x" is undefined; out of scope.

