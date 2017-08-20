/**
 * Created by michaelevan on 8/14/17.
 */
"use strict";

/// SLICE
const arr1 = [1,2,3,4,5];
arr1.slice(3);
arr1.slice(2, 4);
arr1.slice(-2);
arr1.slice(1, -2);
arr1.slice(-2,-1);


// SPLICE
// First arg, start index; second arg 0 if no deletion; and following are which numbers to add.
const arr2 = [1,5,7];
arr2.splice(1, 0, 2, 3, 4);
arr2.splice(5,0,6);
arr2.splice(1, 2);
arr2.splice(2, 1, 'a', 'b');



// CUTTING AND REPLACING WITHIN AN ARRAY, new in ES6
// First arg is where to copy to; second arg is wher to start copying from; and final (optional) is where to stop copying from.
const arr3 = [1,2,3,4];
arr3.copyWithin(1,2);
arr3.copyWithin(2,0,2);
arr3.copyWithin(0, -3, -1);



// FILL ARRAY WITH A SPECIFIC VALUE
// Set any any number of fixed elements with a fixed value in place.
// Array(5) indicates the number of elements in the list; fill(1) indicates added item; can be changed as shown.
const arr4 = new Array(5).fill(1);
arr4.fill("a");
arr4.fill("b", 1);
arr4.fill("c", 2, 4);
arr4.fill(5.5, -4);
arr4.fill(0, -3, 1);


// Reversing and sorting arrays
// reverses order in place
const arr5 = [1,2,3,4,5];
arr5.reverse();


const arr6 = [5,3,2,4,1];
// sorts an array in place
arr6.sort();


const arr7 = [{name: "Silvia"}, {name: "Giacomo"}, {name: "Laura"}, {name: "Desdemona"}];

// allows  to sort alphabetically by name 'property.'
// console.log(arr7.sort((a,b) => a.name > b.name));

// Sorted reverse alphabetically by second letter of name property [index number]
console.log(arr7.sort((a,b) => a.name[1] < b.name[1]));


// ARRAY SEARCHING
// indexOf:  Returns index of the first element that it finds that's strictly equal to search
// lastIndexOf: Returns the last index that matches search using reverse direction
// Returns -1 if there is no match.

const o = {name: "Giovanni"};

const arr8 = [1, 5, "a", o, true, 5, [1,2], "9"];

console.log(arr8.indexOf(5));
console.log(arr8.lastIndexOf(5));
console.log(arr8.indexOf("a"));
console.log(arr8.lastIndexOf("a"));
console.log(arr8.indexOf({name: "Giovanni"}));
console.log(arr8.indexOf(o));
console.log(arr8.indexOf([1,2]));
console.log(arr8.indexOf("9"));
console.log(arr8.indexOf(9));

console.log(arr8.indexOf("a", 5));
console.log(arr8.indexOf(5,5));
console.log(arr8.lastIndexOf(5, 4));
console.log(arr8.lastIndexOf(true, 3));

