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

const rainbowIterator = getRainbowIterator();
setInterval(function(){
     document.querySelector('.rainbow')
        // .style['background-color'] = rainbowIterator.next().value;
}, 500);



// function loopBody(i) {
//     setTimedOut(function() {
//         console.log(i===0 ? "go!" : i);
//     }, (5-i)*1000);
//     }
// var i;
// for(i=5; i>0; i--) {
//     loopBody(i);
// }

// Above function revised with an IIFE

// var i;
// for(i=5; i>0; i--) {
//     (function(i){
//         "use strict";
//         setTimedOut(function() {
//             console.log(i===0 ? "go!" : i);
//         }, (5-i)*1000);
//     })(i);
// }

for(let i=5; i >0; i--) {
    setTimedOut(function() {
        "use strict";
        console.log(i === 0 ? "go!" : i);
    }, (5-i)*1000);
    }



// 26.08.17 RESTART HERE ON BOTTOM OF P. 188

