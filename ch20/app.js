// https://nodejs.org/api/
// See above URL for documentation on ALL MODULES available (e.g., fs, os, buffer, crypto, etc.)
// For most node projects, you will have a directory named: 'node-modules'


// const amanda_calculate = require('./amanda.js');
//const tyler_calculate = require('./tyler.js');

// Revise above function namespaces

const geometricSum = require('./amanda.js');
const sphereVolume = require('./tyler.js');



//console.log(geometricSum(1, 2, 5));   // logs 31
//console.log(sphereVolume(2));   // logs 33.51032....


const amanda = require('./amanda.js');
console.log(amanda.geometricSum(1, 2, 5));   // logs 31
console.log(amanda.quadraticFormula(1, 2, -15));   // logs 3, -5

