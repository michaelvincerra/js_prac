/**
 * Created by michaelevan on 8/3/17.
 */

'use strict';

// NOTE: In essence, one MUST remember that the OPERATION derives a stored value going forward.
// x++: returns x(value),then increments it.
// ++x: increments x(value), then returns it.

let x = 2;
const r1 = x++ + x++;   //[5] returns value of x, then increments its stored value (for future);
const r2 = ++x + ++x;   //[7] increments the value, then returns its stored value (for future);
const r3 = x++ + ++x;   // both above combined

console.log(r1, r2, r3)


let y = 10;
const r5 = y-- + y--;   //[8] returns value of y, then decrements stored value by one (for future)
const r6 = --y + --y;   //[5] decrements x value by one, returns the new value
const r7 = y-- + --y;   //[4] returns value of y, then decrements stored value by one; then decrements stored value
const r8 = --y + y--;   //[3] decrements x value by one, returns new value; returns value of y...

console.log(r5, r6, r7, r8)



//  VERBOSE EXPLANATION: X //

// let x = 2;
// const r1 = x++ + x++;
//      ((x++) + (x++))
//      (2 + (x++))     eval left to right; x now has value 3
//      (2 + 3)         x now has value 4
//          5           result is 5; x has a value 4


// const r2 = ++x + ++x;
//      ((++x) + (++x))
//      (5  +  (++x))   eval  left to right; x now has a value 5
//      (5 + 6 )        x now has value 6
//          11          result is 11

// const r3 = x++ + ++x;
//      ((x++) + (++x)
//      ( 6 + (++x))    eval left to right; x now has value 7
//      (6  +  8)       x now has value 8
//          14          result is 14; x has value 8
