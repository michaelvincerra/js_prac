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

// const userRoles = new Map();

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

// in JS console, you can search object data:
// What role does u1 have?: userRoles.get(u1)
// Use 'has' to determine if a map contains a given key

userRoles.has(u1);
// returns true or false; this can be good in context of if/else statements

// 'set' used in this context will replace previous value
console.log(userRoles.get(u1));
console.log(userRoles.set(u1, 'User'));  // Change from User to Admin
console.log(userRoles.get(u1));

// Detemine how many users exist: .size
console.log(userRoles.size);

// Use keys() to return keys in a map
// Use values() return the values
// Use entries() to return entries as arrays, where first element is key and second element is value

for(let u of userRoles.keys())
    console.log(u.name);

for(let r of userRoles.values())
    console.log(r);

for(let ur of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);

// Using destructuring to get name(u.name) an role(r)

for(let [u,r] of userRoles.entries())
    console.log(`${u.name}: ${r}`);

//Or use the spread ... operator

console.log([...userRoles.values()]);

// Delete an entry

// userRoles.delete(u3);
console.log(userRoles.size);

// Delete all entries from a map

userRoles.clear();
console.log(userRoles.size);

const SecretHolder = (function() {
      const secrets = new WeakMap();
      return class {
          setSecret(secret) {
              secrets.set(this, secret);
          }
          getSecret() {
              return secrets.get(this);
          }
      }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

console.log(a.getSecret());
console.log(b.getSecret());

// Sets by definition must contain unique data

const roles = new Set();
roles.add("User");
roles.add("Admin");
roles.add("Manager");
roles.add("User");  // "User" cannot be a separate instance of data.

console.log(roles.size);

//Weak Sets
// Use case: Determine whether a given object is in a set or not.

const naughty = new WeakSet();

const children = [
    {name: "Samantha"},
    {name: "Sombrero"},
    ];

naughty.add(children[1]);
for(let child of children) {
    if(naughty.has(child))
        console.log(`Coal for ${child.name}!`);
    else
        console.log(`Presents for ${child.name}!`);
}

console.log(naughty);

