
"use strict";

// ENUMERATE AN OBJECT'S PROPERTIES WITH 'FOR ... IN'
//
// const SYM = Symbol();
// const o = {a: 1, b: 2, c: 3, [SYM]: 4};
//
// // version 1
// // for(let prop in o) {
// //     if(!o.hasOwnProperty(prop)) continue;
// //     console.log(`${prop}: ${0[prop]}`);
//
// // version 2
// Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));

// CLASS AND INSTANCE CREATION

// Following is basic structure for creating a class.
// class Car {
//     constructor(make, model){
//     this.make = make;
//     this.model = model;
//     this.userGears = ['P', 'N', 'R', 'D'];
//     this.userGear = this.userGears[0];
//     }
//     shift(gear) {
//         if(this.userGears.indexOf(gear) < 0)
//             throw new Error('Invalid gear: ${gear}');
//         this.userGear = gear;
//     }
// }
//
// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// car1.shift('D');
// car2.shift('R');


//DYNAMIC PROPERTIES

// class Car {
//     constructor(make, model){
//     this.make = make;
//     this.model = model;
//     this._userGears = ['P', 'N', 'R', 'D'];
//     this._userGear = this._userGears[0];
//     }
//
//     get userGear() {return this._userGear;}
//     set userGear(value) {
//     if(this._userGears.indexOf(value)<0)
//         throw new Error(`Invalid gear: ${value}`);
//     this._userGear = value;
//     }
//     shift(gear) {this.userGear = gear;}
// }
//
// console.log(Car);

// REVISION: TRULY PRIVATE

// const Car = (function() {
//
//     const CarProps = new WeakMap();
//
//     class Car {
//         constructor(make, model) {
//             this.make = make;
//             this.model = model;
//             this._userGears = ['P', 'N', 'R', 'D'];
//             carProps.set(this, {userGear: this._userGear[0]});
//
//         }
//             get userGear() {return carProps.get(this).userGear;}
//             set userGear(value) {
//                 if (this._userGears.indexOf(value) < 0)
//                     throw new Error(`Invalid gear: ${value}`);
//                 carProps.get(this).userGear = value;
//             }
//             shift(gear) { this.userGear = gear;}
//         }
//
//         return Car;
//     })();
//
// console.log(Car);


// THE PROTOTYPE

// class Car as previously defined with the shift method

// const car1 = new Car();
// const car2 = new Car();
//
// car1.shift == Car.prototype.shift;
// car1.shift('D');
// car1.shift('d');
// car1.userGear;
// car1.shift === car2.shift
//
// car1.shift === function(gear) {this.userGear = gear.toUpperCase();}
// car1.shift === Car.prototype.shift;
// car1.shift('d');
// car1.userGear;



// STATIC METHODS

class Car {
    static getNextVin(){
        return Car.nextVin++;
    }
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.vin = Car.getNextVin();
    }
    static areSimilar(car1, car2) {
        return car1.make===car2.make && car1.model===car2.model;  // equality test is restrictive
    }
    static areSame(car1, car2){
        return car1.vin===car2.vin;
    }
}

Car.nextVin = 0;

const car1 = new Car("Tesla", "S");
const car2 = new Car("Mazda",  "3");
const car3 = new Car("Mazda",  "3");

console.log(car1.vin);
console.log(car2.vin);
console.log(car3.vin);

console.log(Car.areSimilar(car1, car2));
console.log(Car.areSimilar(car2, car3));
console.log(Car.areSame(car2, car3));
console.log(Car.areSame(car2, car2));

// INHERITANCE