// "use strict";

console.log();

function printLeapYearStatus(){
    "use strict";
    const year = new Date().getFullYear();
    if(year % 4 !== 0) console.log(`${year} is NOT a leap year.`);
    else if(year % 100 != 0) console.log(`${year} IS a leap year.`)
    else if(year % 400 != 0) console.log(`${year} is NOT a leap year.`)
    else console.log(`{$year} is a leap year`);
}

console.log(printLeapYearStatus());

// Revise above function so that it's a subroutine and returns a value

// function isCurrentYearLeapYear() {
//     const year = new Date().getFullYear();
//     if(year %4 !== 0) return false;
//     else if(year % 100 != 0) return true;
//     else if(year % 400 != 0) return false;
//     else return true;
// }

// const daysInMonth =
//     [31, isCurrentYearLeapYear()? 29: 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     console.log(daysInMonth);
// if(isCurrentYearLeapYear()) console.log('It is a leap year.');


// Example of what is not a 'pure' function (because it outputs a different value each time).

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let colorIndex = -1;

// function getNextRainbowColor() {
//     "use strict";
//     if(++colorIndex >= colors.length) colorIndex = 0;
//     return colors[colorIndex];
// }
//
// console.log(getNextRainbowColor());

// PURE FUNCTION? The function will always return the same output given the same input.
// Revise isCurrentLeapYear function, above to make it a  pure function

function isLeapYear(year) {
    if(year % 4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}

// console.log(isLeapYear(year));

// Revise function getNextRainbowColor:

const getNextRainbowColor = (function() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return function() {
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();

// Note: By invoking the global variable multiple times, it will iterate over 'colors' bc of if(++colorIndex >= colors.length. IOW, iterate through the quantity of items in list

console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());


// EXAMPLE OF WHAT NOT TO DO
// setInterval(function(){
//     "use strict";
//     document.querySelector('.rainbow')
//         .style['background-color'] = getNextRainbowColor();
// }, 500);

// Instead, and ITERATOR is better

function getRainbowIterator(){
    "use strict";
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next() {
            if(++colorIndex >= colors.length) colorIndex = 0;
            return { value: colors[colorIndex], done: false};
        }
    };
}
console.log(getRainbowIterator());

// Now to connect the above revised function...

// const rainbowIterator = getRainbowIterator();
// setInterval(function(){
//      document.querySelector('.rainbow')
//         // .style['background-color'] = rainbowIterator.next().value;
// }, 500);
//
// console.log(rainbowIterator);
//
function loopBody(i) {
    setTimeout(function() {
        console.log(i===0 ? "go!" : i);
    }, (5-i)*1000);
    }


var i;
for(i=5; i>0; i--) {
    loopBody(i);
}

// Above function revised with an IIFE; it replaces the above named function with an ANONYMOUS function passing (i).

// var i;
// for(i=5; i>0; i--) {
//     (function(i){
//         "use strict";
//         setTimeout(function() {
//             console.log(i===0 ? "go!" : i);
//         }, (5-i)*1000);
//     })(i);
// }



for(let i=5; i >0; i--) {
    setTimeout(function() {
        "use strict";
        console.log(i === 0 ? "go!" : i);
    }, (5-i)*1000);
    }



// FUNCTIONS IN AN ARRAY
//
    const sin = Math.sin;
    const cos = Math.cos;
    const theta = Math.PI/4;
    const zoom = 2;
    const offset = [1, -3];

const pipeline = [
    function rotate(p){
    "use strict";
    return{
        x: p.x * cos(theta) - p.y * sin(theta),
        y: p.x * sin(theta) + p.y * cos(theta),
    };
    },
    function scale(p) {
        return {x: p.x * zoom, y: p.y * zoom};
    },
    function translate(p) {
        return { x: p.x + offset[0], y: p.y + offset[1] }    // Note: Brown uses two semicolons at end, but not accepted.
    },
];

// pipeline is now an array of functions for a specific 2D transform
// we can now transform a point:

const p = {x: 1, y: 1};
let p2 = p;
for(let i=0; i<pipeline.length; i++){
    p2 = pipeline[i](p2);
}
console.log(p);

// p2 is now p1 rotated 435 degrees (pi/4 radians) around the origin,
// moved 2 units farther from the origin and translated 1 unit to the right and 3 units down


// PASS A FUNCTION INTO A FUNCTION

function sum(arr, f) {
    "use strict";

    if(typeof f != 'function') f = x => x;

    return arr.reduce((a,x) => a += f(x),0);
}

console.log(sum([1,2,3]));
console.log(sum([1,2,3], x => x*x));
console.log(sum([1,2,3], x => Math.pow(x, 3)));



// RETURN A FUNCTION FROM A FUNCTION

// function sumOfSquares(arr) {
//     "use strict";
//     return sum(arr, x => x*x);
// }

function newSummer(f) {
    "use strict";
    return arr => sum(arr, f);
}
console.log(newSummer());

const sumOfSquares = newSummer(x => x*x);
const sumOfCubes = newSummer(x => Math.pow(x, 3));
console.log(sumOfSquares([1,2,3]));
console.log(sumOfCubes([1,2,3]));


// RECURSION
// example

// function findNeedle(haystack) {
//     if(haystack.length ===0) return "No haystack here!";
//     if(haystack.shift() === 'needle') return "Found it!";
//     return findNeedle(haystack);  // Haystack has one fewer element
// }
//
// findNeedle(['hay', 'hay', 'hay','hay','hay','hay','hay','hay', 'needle','hay']);
//
// console.log(findNeedle());


function fact(n) {
    if(n===1) return 1;
    return n * fact(n-1);
}









