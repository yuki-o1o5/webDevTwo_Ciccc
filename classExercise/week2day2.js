// Use the setInterval() function to log "Hello, World!" to the console after every 6 seconds, and then use the clearInterval() function to stop the interval.

function sayhello() {
  console.log("Hello, World!");
}

let sayHelloEverySixSeconds = setInterval(sayhello, 6000);

setTimeout(() => {
  clearInterval(sayHelloEverySixSeconds);
}, 24000);

// Use the find function to locate the first element in an array that satisfies a certain condition.
// Find that object whose age is 40
let objectArr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Joe", age: 45 },
];

let findItem = objectArr.find((item) => {
  if (item.age === 40) {
    return true;
  }
});

findItem;

// Use the some function to determine if any elements in an array satisfy a certain condition.
// Use some function to check if any of the strng has a length more than 5
let stringArr = ["hello", "world", "this", "is", "a", "string"];

let checkLengthMoreThanFive = stringArr.some((item) => {
  if (item.length >= 5) {
    return true;
  }
});

checkLengthMoreThanFive;

// Use the reduce function to count the total number of characters in all strings for the above array.

let countTotalNumberOfCharacters = stringArr.reduce((acc, curr) => {
  return acc + curr.length;
}, 0);

countTotalNumberOfCharacters;

// Use the reduce function to concatenate all elements in an array into a single string. Use above example ,
// "Hello world this is a string"

let concatenateAllElements = stringArr.reduce((acc, cur) => {
  return `${acc} ${cur}`;
}, "");
concatenateAllElements;
