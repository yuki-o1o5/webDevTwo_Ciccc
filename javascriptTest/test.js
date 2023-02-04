// 1- What is ES6?
// ECMAScript 6 or ECMAScript 2015, is a version of the ECMAScript programming language standard.
// It is the 6th edition of the ECMAScript standard and introduced many new features and syntax improvements
// aimed at making JavaScript more modern, scalable and versatile.

// 2- Name 3 examples of ES6 features which you learnt.
// Let and const
// Arrow Functions
// String Literal

// 3- What is the difference between let and const?

// we can reassign the variables in with using let while, we can only assign the variable one time with using const.

// 4- How do you access object values? Give 3 examples

let car = {
  make: "BMW",
  model: "3 series",
  topSpeed: 200,
  isSportsCar: true,
};

// If I want to access "BMW",

// 1st
console.log(car.make);

// 2nd
console.log(car["make"]);

// 3rd
let { make, model, topSpeed, isSportsCar } = car;
console.log(make);

// 5- What does setInterval and setTimeout do?
// setInterval is a method that executes a function repeatedly at a specified interval (in milliseconds).
// It continues to call the function until it is explicitly stopped or the page is unloaded.

// setTimeout is a method that executes a function only once after a specified interval (in milliseconds).
// After the specified time has elapsed, the function is executed only once.

// What will be the output of the following ?

// 1st
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// output
5;
5;
5;
5;
5;

// 2nd
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

// output
0;
1;
2;
3;
4;

// 6- What are promises?
// A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It allows you to write asynchronous code in a way that looks and behaves like synchronous code.
// Promise has three states.
// 1. Fulfilled State - Success State
// 2. Rejected State - Failuare/Reject State
// 3. Pending State - Waiting for response

// 7- Convert this async function to async/await

getQuote()
  .then((quote) => {
    console.log(quote);
  })
  .catch(function (err) {
    console.log(err);
  });

// after this line,

async function showQuote() {
  try {
    let quote = await getQuote();
    console.log(quote);
  } catch (error) {
    console.log(error);
  }
}

// 8- Convert this code to arrow function.

function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

const greetingArrowFanction = (firstname, lastname) => {
  return `Hello ${firstname} ${lastname}`;
};

// 9- Explain what a callback function is.
// A callback function is a function passed as an argument to another function and
// is executed after the parent function has completed. It allows for asynchronous processing.

// 10- What does the functions pop and push do to an array? And what do they return ?

// Array.prototype.pop() is a method in JavaScript that removes the last element
// from an array and returns that element.

// Array.prototype.push() is a method in JavaScript that adds one or more elements to
// the end of an array and returns the new length of the array.

// 11- What is the expected answer to this code?

let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);

"" + 1 + ("" + 1 + 2) + ("" + 1 + 2 + 3);
123;

// 12- What data type would Array.map() and Array.filter() return?
// new array

// Additionally what will be the output of this ?
let array = [1, 2, 3, 0, 4, 10, 0];
let output = array.filter((item) => item);

[1, 2, 3, 4, 10];

// 13- What data type would Array.includes() and Array.some() return?
// Boolean

// 14- Write down the 4 main methods of rest api
// GET
// POST
// PUT
// DELETE

// 15- What is the difference between JSON and a JavaScript object?
// In JSON, the key is string and it is a lightweight data interchange format that is easy for humans to read and write and for machines to parse and generate.
// A JavaScript object is a collection of properties, where each property has a name and a value.
// The value can be a primitive type (such as a string, number, or boolean), an object, or a function.

// 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.

//www.boredapi.com/api/activity

fetch("https://www.boredapi.com/api/activity")
  .then((response) => {
    return response.json();
  })
  .then((finalOutput) => {
    console.log(finalOutput);
  });

// The above API returns what to do when you are bored.

async function showbored() {
  try {
    let res = await fetch("https://www.boredapi.com/api/activity");
    let answer = await res.json();
    console.log(answer);
  } catch (error) {
    console.log(error);
  }
}
