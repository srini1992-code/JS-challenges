///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
// functional class representation
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  //   return (this.speed = this.speed + 10);
  this.speed += 10;
  return `${this.make} is going at ${this.speed}km/ph`;
};
Car.prototype.brake = function () {
  //   return (this.speed = this.speed - 5);
  this.speed -= 5;
  return `${this.make} is going at ${this.speed}km/ph`;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw.accelerate());
console.log(mercedes.brake());
console.log(mercedes.accelerate());
console.log(bmw.brake());

// es6classes
class Car1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    return `${this.make} is going at a speed range of ${this.speed}`;
  }
  brake() {
    this.speed -= 5;
    return `${this.make} is running at a speed range of ${this.speed}`;
  }
}
const bmws = new Car1('bmw', 120);
const mercedess = new Car1('mercedes', 95);
console.log(bmws.accelerate());
console.log(mercedess.brake());

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Ford {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    return `The speed of Ford at accelertion is ${(this.speed += 10 * 1.6)}`;
  }
  brake() {
    return `the speed of ford at brake is ${(this.speed -= 5 * 1.6)}`;
  }
  get speedUS() {
    return `${this.make} is running at ${(this.speed *= 1.6)} in mi/h`;
  }

  set speedUS(speed) {
    this.speed = speed;
    return `${this.make} is running at a speed of 
    ${(this.speed /= 1.6)}in mi/h `;
  }
}
const ford = new Ford('ford', 120);
console.log(ford.speedUS);
console.log(ford.accelerate());
console.log(ford.brake());
ford.speed = 50;
console.log(ford.speedUS);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Cars = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  //   return (this.speed = this.speed + 10);
  this.speed += 10;
  return `${this.make} is going at ${this.speed}km/ph`;
};
Car.prototype.brake = function () {
  //   return (this.speed = this.speed - 5);
  this.speed -= 5;
  return `${this.make} is going at ${this.speed}km/ph`;
};

const EV = function (make, speed, Charge) {
  // linking parent function
  Cars.call(this, make, speed);
  this.Charge = Charge;
};
// linking prototypes
EV.prototype = Object.create(Cars.prototype);

EV.prototype.chargeBattery = function (ChargeTo) {
  return (this.charge = ChargeTo);
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.Charge--;
  return `${this.make} going at ${this.speed}km/h , with a charge of ${this.Charge}`;
  // Tesla going at 140 km/h, with a charge of 22%'
};
const tesla = new EV('Tesla', 120, 23);
console.log(tesla.accelerate());
tesla.Charge = 90;
const boeing = new EV('Boeing', 140, 90);
console.log(boeing.accelerate());
// console.log(boeing.brake());
console.log(boeing.chargeBattery());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarsCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    //   return (this.speed = this.speed + 10);
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/ph`);
    return this;
  }
  brake() {
    //   return (this.speed = this.speed - 5);
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/ph`);
    return this;
  }
  get speedUS() {
    return `the speed is ${this.speed / 1.6}`;
  }
  set speedUS(speed) {
    this.speed = speed;
    return `the speed is ${(this.speed *= 1.6)}`;
  }
}

class EVCl extends CarsCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  set chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`the charge of rivian battery is ${this.#charge}`);
    return this;
  }
  get chargeBattery() {
    console.log(`the charge of rivian battery is ${this.#charge}`);
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed}km/h , with a charge of ${
        this.#charge
      }%`
    );
    return this;
    // Tesla going at 140 km/h, with a charge of 22%'
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian.accelerate();
rivian.brake();
rivian.chargeBattery;
console.log(rivian.speedUS);
