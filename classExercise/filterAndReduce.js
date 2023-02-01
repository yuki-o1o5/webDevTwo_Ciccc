week2day1;

let numList = [1, 2, 4, 20, -10, 40, 50];

function minimumValue() {
  let min = numList.reduce((accumulator, current) => {
    if (accumulator > current) {
      return current;
    }
    return accumulator;
  }, Infinity);
  // console.log(min);
  return min;
}
minimumValue();

let array = ["fizz", "fizzbuzz", "buzzfizz", "fiz", "buzz", "buzzFizz"];

function filterArray() {
  let fil = array.filter((item) => {
    if (item.includes("buzz")) {
      return true;
    }
  });
  // console.log(fil);
  return fil;
}
filterArray();
