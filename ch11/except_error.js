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

