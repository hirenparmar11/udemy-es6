//console.log("Hello World!");

//var limit = 100;
//let limit = 100;
//const limit = 200;
//limit += 100;
//console.log(limit);

//const emails = ['frodo@mail.com', 'samwise@mail.com', 'merry@mail.com'];
//emails = ['pippin@mail.com'];
//emails.push('pippin@mail.com');
//console.log(emails);

/*//template strings
let a = `happy`;
let b = `birthday`;
//before es6
console.log(a + ` ` + b);
//after es6
console.log(`${a} ${b}`);*/

/*spread operator
let a = [30, 40, 50];
let b = [10, ...a, 60, 70];
console.log(b);*/

/*rest parameters
function collect(...a) {
  console.log(a);
}

collect(10, 20, 30, 40, 50, 60);*/

/*destructuring assignments to array and objects
let a = [4, 5, 6];
//-> new way let four = a[0], five = a[1];
let [four, five] = a;
console.log(four, five);*/

/*let king = {'name': 'Shivaji', 'kingdom': 'Maratha'};
//let {name, kingdom} = king;
/*also let name, kingdom;
({name, kingdom} = king);
console.log(name + " was a " + kingdom + " king");*/

/*Functions - Arrow Functions

function cheerRegular() {
  console.log("Woohoo! Regular function");
}

let cheerArrow = () => console.log("Woohoo! Arrow function");

cheerArrow();
cheerRegular();

setTimeout(() => console.log("Woohoo!"), 1000);*/

/*MAP and FILTER

let values = [20, 30, 40];

//regular way
function doubleRegular(a) {
  return a * 2;
}

let doubledRegular = values.map(doubleRegular);
console.log(doubledRegular);

let doubleAnonymous = (a) => {
  return a * 2;
}

let doubledAnonymous = values.map(doubleAnonymous);
console.log(doubledAnonymous);

//in single line with Arrow function
console.log(values.map((a) => a * 2));

let scores = [15, 12, 16, 17, 21, 19, 8, 7];
console.log(scores.filter((a) => a >= 15));

********String Helpers
startsWith, endsWith, repeat, includes

********Number Helpers
isFinite, isSafeInteger

********Modules, by import, export and default export
*/

/* Use of Classes in JavaScript from es6
import { Animal, Lion } from './animal-kingdom';

let king = new Animal("Mufasa", 4.5);
let son = new Lion("Simba", 2, "golden", "Pride Rock!");
king.hello();
son.hello();
*/

/*PROTOTYPING

function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'm ${this.name} from ${this.house}`
} //same as class

//proptoptying

Wizard.prototype.petsName;

//this keyword cannot be used while using Array functions, following gives error
//Wizard.prototype.petInfo = () => `I have ${this.pet} named ${this.petsName}`;

Wizard.prototype.petInfo = function() {
  return `I have ${this.pet} named ${this.petsName}`
};

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
console.log(harry);
harry.petsName = "Hedwig";
console.log(harry);
console.log(harry.greet() + "\n" + harry.petInfo());
*/

/*DATA Structures in ES6*/

/* SET Collection
let a = new Set();
a.add(5); a.add(43); a.add("Woohoo!"); a.add({"x": 50, "y": 20});
console.log(a);
console.log(a.size);
console.log("a has 43? " + a.has(43) + " - a has Woohoo? " + a.has("Woohoo"));

let numbers = [5, 7, 8, 8, 13, 17];
let setOfNumbers = new Set(numbers);
console.log(setOfNumbers);

for(let e of setOfNumbers.values()) {
  console.log(e);
}*/

/* MAP Collection
let a = new Map();
let key1 = "key1";
let key2 = {a: "key2"};
let key3 = function () {};

a.set(key1, "value for string key");
a.set(key2, "value for object key");
a.set(key3, "value for function key");
console.log(a);

let numbers = [[1, 'one'], [2, 'two'], [3, 'three'], [4, 'four']];
let mapOfNumbers = new Map(numbers);
console.log(mapOfNumbers);

for(let [key, value] of mapOfNumbers.entries()) {
  console.log(`${key} points to ${value}`);
}*/

/*CLOSURES function call() {
  let secret = "vedas has the secret";
  let reveal = function() {
    return secret;
  }
  return reveal();
}

//secret is not accessible here
//console.log(secret);
console.log(call());
*/

/* FUNCTION FACTORIES part of CLOSURES

const concat = function(x) {
  const inner = function(y) {
    return x + y;
  }

  return inner;
}

//let ful = concat("ful");
//console.log(ful("beauti"));
//above can also be written as
console.log(concat("fruit")("ful"));

const product = x => y => y * x;

console.log(product(5)(6)); */

/* CLOSURES to define PRIVATE METHODS

const account = () => {
  let balance = 0;
  let depositSum = sum => balance += sum;
  const deposit20 = () => depositSum(20);
  const withdraw20 = () => depositSum(-20);
  const check = () => balance;
  return {deposit20, withdraw20, check};
}

let wallet = account();
wallet.deposit20();
wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
wallet.withdraw20();
wallet.deposit20();
console.log(wallet.check()); */

/* GENERATORs in ES6

function* letterMaker() {
  yield 'a';
  yield 'b';
  yield 'c';
}

let letterGenerator = letterMaker();
console.log(letterGenerator.next().value);
console.log(letterGenerator.next().value);
console.log(letterGenerator.next().value);
console.log(letterGenerator.next().value);

function* numberMaker() {
  let count = 0
  while(count < 4) {
    yield ++count;
  }
}

let numberGenerator = numberMaker();
console.log(numberGenerator.next().value);
console.log(numberGenerator.next().value);
console.log(numberGenerator.next().value);
console.log(numberGenerator.next().value);

function* evens() {
  let count = 0;
  while (true) {
    count += 2;
    let reset = yield count;
    if(reset) {
      count = 0;
    }
  }
}

let evenSequence = evens();
console.log(evenSequence.next().value);
console.log(evenSequence.next().value);
console.log(evenSequence.next().value);
console.log(evenSequence.next(true).value);
console.log(evenSequence.next().value); */

/* ITERATOR AND GENERATOR

const arrayIterator = (array) => {
  let index = 0;
  return {
    next: () => {
      if(index < array.length) {
        let next = array[index];
        index += 1;
        return index;
      }
    }
  }
}

let iter = arrayIterator([1, 2, 3]);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

function* arrayIteratorG() {
  //doesnt yeild one by one
  //yield arguments;

  //to yield one after one, either enhanced for can be used as below
  //for(let arg of arguments) {
  //  yield arg;
  //}

  //or
  yield* arguments;
}

let it = arrayIteratorG(1, 2, 3);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);*/

/* PROMISES in ES6
let p = new Promise((resolve, reject) => {
  //resolve('Resolved Promised data');
  //reject('Rejected Promised data');
  setTimeout(() => resolve('Resolved Promised data'), 3000);
});

p.then(r => console.log(r))
.catch(e => console.log(e));

console.log('after Promise consumption'); */
