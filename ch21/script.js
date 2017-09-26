
//const USER_EMAIL = Symbol();
//
//class User {
//setEmail(value){
//if(!/@/.test(value)) throw new Error('invalid email: ${value}');
//this[USER_EMAIL] = value;
//}
//
//getEmail(){
//return this[USER_EMAIL];
//
//}
//}


const u = new User();
u.email = "john@doe.com";
console.log('User email: ${u.email}');


// Rewrite CLass above using the accessor properties


const USER_EMAIL = Symbol();

class User {
setEmail(value){

if(!/@/.test(value)) throw new Error('invalid email: ${value}');
this[USER_EMAIL] = value;
}

get email(){
return this[USER_EMAIL];

}
}


// Provide a getter, but NOT a setter, which makes this a read-only property

class Rectangle {
constructor(width, height){
this.width = width;
this.height = height;
}
get perimeter(){
return this.width*2 + this.height*2;
}
}


// Object ONLY ATTRIBUTES
// CREATE A PROPERTY

const obj = { foo: "bar"};
Object.getOwnPropertyDescriptor(obj, 'foo');

// Control Property attributes

Object.defineProperty(obj, 'foo' {writable: false});

obj.foo = 3 // Will invoke a Type error

Object.defineProperty(obj, 'color', {
get: function() {return this.color;
set: function(value) {this.color = value;}
});

Object.defineProperty(obj, 'name', {
    value: "Cynthia",
});

Object.defineProperty(obj, 'greet', {
    value: function() {return 'Hello, my name is ${this.name}!';}
});



const arr = [3, 1.5, 9, 2, 5.2];
arr.sum = function() { return this.reduce((a, x) => a+x); }
arr.avg = function() { return this.sum()/this.length; }
Object.defineProperty(arr, 'sum', { enumerable: false });
Object.defineProperty(arr, 'avg', { enumerable: false });

// Revised to do it in one step per property


const arr = [3, 1.5, 9, 2, 5.2];
Object.defineProperties(arr,
sum: {
    value: function() { return this.reduce((a, x) => a+x); },
    enumerable: false
}),

avg: {
    value: function() { return this.sum()/this.length; },
    enumerable: false })
);


// FREEZING AN OBJECT MAKES IT IMMUTABLE


const appInfo = {
company: 'White Knight Software, Inc.',
version: '1.3.5',
buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
// this function only accesses properties, so it won't be // affected by freezing
copyright() {
return `© ${new Date().getFullYear()}, ${this.company}`; },
};
Object.freeze(appInfo); Object.isFrozen(appInfo); // true
appInfo.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible
delete appInfo.company;
// TypeError: Cannot delete property 'company' of [object Object]
appInfo.company = 'test';
// TypeError: Cannot assign to read-only property 'company' of [object Object]
Object.defineProperty(appInfo, 'company', { enumerable: false }); // TypeError: Cannot redefine property: company


// Seal an object with Object.seal

class Logger { constructor(name) {
this.name = name; this.log = [];
    }
    add(entry) {
this.log.push({ log: entry,
            timestamp: Date.now(),
        });
} }
const log = new Logger("Captain's Log"); Object.seal(log);
Object.isSealed(log); // true
log.name = "Captain's Boring Log";
log.add("Another boring day at sea....");
// OK // OK
log.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible
log.name = 'test'; // OK delete log.name;
    // TypeError: Cannot delete property 'name' of [object Object]
Object.defineProperty(log, 'log', { enumerable: false }); // TypeError: Cannot redefine property: log


// Making an object non-extensible: Weakest Protection

const log2 = new Logger("First Mate's Log"); Object.preventExtensions(log2); Object.isExtensible(log2); // true
log2.name = "First Mate's Boring Log";
log2.add("Another boring day at sea....");
// OK // OK
log2.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible
log2.name = 'test';
delete log2.name; Object.defineProperty(log2, 'log',
{ enumerable: false });


// PROXIES

const coefficients = {
a:1,
b:2,
c:5,
};


function evaluate(x, c) {
    return c.a + c.b * x + c.c * Math.pow(x,2);
}


// What is there's a missing value?

const coefficients = {
a:1,
c:3,
};

evaluate(5, coefficients);  //NaN

// Proxies can allow undefined properties return 0

const betterCoefficients = new Proxy(coefficients, {
    get(target, key) {
        return target[key] || 0;
        },
        });



betterCoefficients.a; //1
betterCoefficients.b; //0
betterCoefficients.c; //3
betterCoefficients.d; // 0
betterCoefficients.anything; // 0



const cook = {
    name: "Walt Curtis",
    redPhosphorus: 100,
    water: 500,
    });

    const protectedCook = new Proxy(cook, {
    set(target, key, value){
    if(key === 'redPhosphorus') {
        if(target.allowDangerousOperations)
                return target.redPhosphorus = value;
            else
                return console.log("Too dangerous!");
            }
            // all other properties are safe
            target[key] = value;
            },
            });

protectedCook.water = 550;
protectedCook.redPhosphorus = 150;

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150; // 150