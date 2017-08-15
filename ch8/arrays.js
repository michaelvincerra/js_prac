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


/// SPLICE
const arr2 = [1,5,7];
arr2.slice(1, 0, 2, 3, 4);
arr2.slice(5,0,6);
arr2.slice(1, 2);
arr2.slice(2, 1, 'a', 'b');
