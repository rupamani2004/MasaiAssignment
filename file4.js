// a) Output and explanation for scoping (let/var)
if (true) {
  var x = 10;
  var y = 20;
}
console.log(y); // 20
console.log(x); // ReferenceError: x is not defined

// Explanation:
// 'var y' is accessible outside the block, 'let x' is not.
// Accessing 'x' outside the block causes a ReferenceError.

// b) Safe access using optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email);  // "test@mail.com"
console.log(profile?.user?.details?.phone);  // undefined (no error thrown)

// c) Example where optional chaining prevents a runtime error
const data = {
  student: {
    info: {
      name: "Ravi"
      // age property missing
    }
  }
};

console.log(data?.student?.info?.age); // undefined (no runtime error)
