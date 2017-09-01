 // Javascript built-in Math object

 // No dedicated integer class

 // Assign a fixed number of pf digits past the decimal point

const x = 19.51
console.log(x.toFixed(3));
console.log(x.toFixed(2));
console.log(x.toFixed(1));
console.log(x.toFixed(0));


// EXPONENTIAL NOTATION

const y = 1.618 // Golden Mean

console.log(y.toExponential(4));
console.log(y.toExponential(3));
console.log(y.toExponential(2));
console.log(y.toExponential(1));
console.log(y.toExponential(0));


// Received: Uncaught Reference Error: toExponential is not defined... :(
// FIXED PRECISION

let z = 1000;

console.log(z.toPrecision(5));
console.log(z.toPrecision(4));
console.log(z.toPrecision(3));
console.log(z.toPrecision(2));
console.log(z.toPrecision(1));

let xx = 15.335;

console.log(xx.toPrecision(6));
console.log(xx.toPrecision(5));
console.log(xx.toPrecision(4));
console.log(xx.toPrecision(3));
console.log(xx.toPrecision(2));
console.log(xx.toPrecision(1));

// fundamental constants
console.log(Math.E); // root of the natural logarithm
console.log(Math.PI);  // Ratio of a circle's circumference to its diameter
console.log(Math.LN2);
console.log(Math.LN10);
console.log(Math.LOG2E);
console.log(Math.LOG10E);

console.log(Math.SQRT1_2);  // the square root of 1/2" ~ 0.707
console.log(Math.SQRT2);    // square root of 2: ~ 1.414



 // ADDITIONAL MATHEMATICAL FUNCTIONS

//Math.pow(x, y) Math.sqrt(x)
//Math.cbrt(x)
//Math.exp(x)
//Math.expm1(x)
//Math.hypot(x1, x2,...)
//Description
//xy x
//Equivalent to
//Math.pow(x, 0.5)
//Cube root of x
//Equivalent toMath.pow(x, 1/3)
//ex Equivalent to Math.pow(Math.E, x)
//ex − 1 Equivalent to Math.exp(x) - 1
//Square root of sum of arguments: x12 + x22 + . . .
//Examples
//Math.pow(2, 3) Math.pow(1.7, 2.3)
//Math.sqrt(16) Math.sqrt(15.5)
//Math.cbrt(27) Math.cbrt(22)
//Math.exp(1) Math.exp(5.5)
//Math.expm1(1) Math.expm1(5.5)
//Math.hypot(3, 4) Math.hypot(2, 3, 4) // ~5.36
//// 8
//// ~3.39
//// 4
//// ~3.94
////3 // ~2.8
//// ~2.718 // ~244.7
//// ~1.718 // ~2
//
//
//
//Math.log(x)
// Math.log10(x)
// Math.log2(x)
// Math.log1p(x)
//Miscellaneous
//Description
//Natural logarithm of x Base 10 logarithm of x
//Equivalent toMath.log(x)/ Math.log(10)
//Base 2 logarithm of x Equivalent toMath.log(x)/ Math.log(2)
//Natural logarithm of 1 + x Equivalent to Math.log(1 + x)
//Examples
//Math.log(Math.E) Math.log(17.5)
//Math.log10(10) Math.log10(16.7)
//Math.log2(2) Math.log2(5)
//// 1
//// ~2.86
//// 1
//// ~1.22
//// 1
//// ~2.32
//Math.log1p(Math.E - 1) // 1 Math.log1p(17.5) // ~2.92
//
//
//
//// pseudorandom number generation:
//Example
//[0, 1)                       Math.random()
//[x, y)                       x + (y-x)*Math.random()
//Integer in [m, n)            m + Math.floor((n-m)*Math.random())
//Integer in [m, n]            m + Math.floor((n-m+1)*Math.random())
//
//

