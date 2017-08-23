"use strict";

// Exception and Error Handling
// Validate email address

// const err = new Error("Invalid email"){
  // return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
// function validateEmail(email){
//     return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?
//     email :
//     new Error(`Invalid Email address: ${email}`);
// }
//
// const email = "oscar@wilde.com";
//
// const validatedEmail = validateEmail(email);
// if(validatedEmail instanceof Error) {
//     console.error(`Error: ${validatedEmail}`);
// } else {
//     console.log(`Valid email: ${validatedEmail}`);
// }
//
// console.log(email);



// Try and Except with 'try' and 'catch'
// Control shifts to the except block as soon as error occurs; if statement that follows the call to validateEmail won't
// execute. One can have as many statements as desired inside the try block
// The first one that results in an error will transfer control to the catch block

const email = null;

try {
    const validatedEmail = validateEmail(email);
    if(validatedEmail instanceof Error)
    {
        console.error(`Error: ${validatedEmail.message}`);
    } else {
        console.log(`Valid email: ${validatedEmail}`);
    }
} catch(err) {
    console.log(`Error: ${err.message}`);
}

console.log(email);

// Throwing/Raising Errors (Intentional)
// Convention: Throw and instanceof Error

// const balance = 0;
//
// function billPay(amount, payee, account) {
//     if(amount > account.balance)
//         throw new Error("insufficient funds");
//     account.transfer(payee, amount);
// }
//
// console.log(billPay(0, "You", 2));


// EVERY TIME YOU THROW AN ERROR YOU HAVE TO CATCH IT.
// USE EXCEPTIONS AS THE LAST DEFENSE, FOR ERRORS THAT YOU CAN'T ANTICIPATE AND MANAGE ANTICIPATE ERRORS.


function a(){
    console.log('a: calling b');
    b();
    console.log('a: done');
}

function b() {
   console.log('b: calling c');
   c();
   console.log('b: done');
}


function c() {
   console.log('c: throwing error');
   throw new Error('c error');
   console.log('c: done');
}

function d() {
   console.log('d: calling c');
   c();
   console.log('d: done');
}

try {
    a();
} catch(err) {
    console.log(err.stack);
}

try {
    d();
} catch(err) {
    console.log(err.stack);
}

// try catch finally

function finallyFunc(){
    try {
        console.log("This line is executed...");
        throw new Error("whoops");
        console.log("This line is not executed...")
    } catch (err) {
        console.log("There was an error...");
    } finally {
        console.log("...always executed");
        console.log("Perform clean up here");
    }
}
console.log(finallyFunc());