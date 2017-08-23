"use strict";

/*
Maps can map a key to a value.
Sets are similar to arrays, except that duplicates are not allowed.
 */


// User objects that you wish to map to roles.

const u1 = {name: "Cynthia"};
const u2 = {name: "Jackson"};
const u3 = {name: "Lolita"};
const u4 = {name: "Arturo"};

const userRoles = new Map();

// Use 'set'  to assign user to roles

// userRoles.responseText(u1, "User");
// userRoles.responseText(u2, "User");
// userRoles.responseText(u3, "Admin");


// set() method allows method chaining
// userRoles
//     .set(u1, "User")
//     .set(u2, "User")
//     .set(u3, "User");

// Or pass an array of arrays to the constructor:

const userRoles = new Map([
    [u1, "User"],
    [u2, "User"],
    [u3, "Admin"],
]);