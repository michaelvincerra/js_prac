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

function isCurrentYearLeapYear() {
    const year = new Date().getFullYear();
    if(year %4 !== 0) return false;
    else if(year % 100 != 0) return true;
    else if(year % 400 != 0) return false;
    else return true;
}

const daysInMonth =
    [31, isCurrentYearLeapYear()? 29: 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    console.log(daysInMonth);
if(isCurrentYearLeapYear()) console.log('It is a leap year.');

