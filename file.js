// Part a:
const username = "Sam";
const course = "JavaScript";
console.log(`Hello, ${username}, welcome to the ${course} course!`);

// Part b:
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

// Part c:
const getFullName = (first, last) => `${first} ${last}`;
