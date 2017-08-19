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