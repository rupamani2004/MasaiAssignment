// ---------------------------
// 1. Template Literals + Expressions
// ---------------------------

// a)
console.log(`5 + 7 = ${5 + 7}`);

// b)
const multiLine = `
This is line 1
This is line 2
This is line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);



// ---------------------------
// 2. Arrow Functions & this
// ---------------------------

// a)
const square = (n) => n * n;

// b) Explanation:
// Arrow functions do NOT have their own 'this'.
// 'this' refers to the global object, not 'obj', so this.value is undefined.

// c)
const obj2 = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};
obj2.test();



// ---------------------------
// 3. Rest, Spread & Copying Objects
// ---------------------------

// a)
let product;
const productCopy = {...product };

// b)
let a;
let b;
const merged = { ...a, ...b };

// c)
function maxValue(...nums) {
  return Math.max(...nums);
}



// ---------------------------
// 4. Destructuring & Optional Chaining
// ---------------------------

// a)
const arr = [10, 20, 30];
const [a1, b1] = arr;

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;

// c)
const info = {};
console.log(info?.details?.name); // undefined



// ---------------------------
// 5. Scoping (let/var/const)
// ---------------------------

// a) var = function-scoped → i is accessible outside loop
// Output: 3
for (var i = 0; i < 3; i++) {}
console.log(i);

// b) let = block-scoped → j not accessible → Error
// console.log(j); // ReferenceError
for (let j = 0; j < 3; j++) {}
// console.log(j); // Cannot print

// c)
// const is used when a variable should NOT be reassigned.



// ---------------------------
// 6. Ternary Operator – Practice
// ---------------------------

// a)
let kmph
let speed = kmph > 60 ? "Fast" : "Normal";

// b)
let age
const category = age >= 18 ? "Adult" : "Minor";

// c)
const checkNum = (num) =>
  num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative";



// ---------------------------
// 7. Spread, Rest & Arrays
// ---------------------------

// a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];

// b)
let A = ["x", "y"];
let B = ["z"];
const combined = [...A, ...B];

// c)
function printNames(...names) {
  return names;
}



// ---------------------------
// 8. Object Destructuring & Shorthand
// ---------------------------

// a)
const user = { id: 101, status: "active" };
const { id, status } = user;

// b)
const id2 = 101;
const role2 = "admin";
const user2 = { id2, role2 };

// c)
const person = {
  name: "Rupa",
  age: 22,
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};



// ---------------------------
// 9. Template Literals (More Practice)
// ---------------------------

// a)
console.log(`Today's Date: ${new Date().toDateString()}`);

// b)
let NAME = "Rupa";
let SCORE = 90;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);



// ---------------------------
// 10. Arrow Function Shorthands
// ---------------------------

// a)
const add = (a, b) => a + b;

// b)
const isAdult = (age) => age >= 18;

// c)
const double = (n) => n * n;



// ---------------------------
// 11. Spread Operator (Arrays & Objects)
// ---------------------------

// a)
const original = [1, 2, 3];
const clone = [...original];

// b)
const newArray = [100, ...original];

// c)
const objA = { x: 1, y: 2 };
const objB = { y: 3, z: 4 };
const mergedObj = { ...objA, ...objB };



// ---------------------------
// 12. Optional Chaining (More Practice)
// ---------------------------

// a)
const user3 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user3?.address?.city);

// b)
console.log(user3?.job?.title); // undefined

// c)
const student = { name: "Meera" };
console.log(student?.marks?.total); // undefined (no error)
