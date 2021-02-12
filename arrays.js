const numbers = [1, 2, 3, 4, 5];
const numbersAgain = new Array(1, 2, 3, 4, 5);
const fruits = ['Banana', 'Apple', 'Avacado'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;
val = numbers.length;
val = Array.isArray(numbers);
val = numbers[3];
numbers[3] = 100;
val = numbers.indexOf(2);

numbers.push(10);
numbers.unshift(20);

numbers.pop();
numbers.shift();

numbers.splice(1, 3);
numbers.reverse();

numbers.concat(numbersAgain);
val = fruits.sort();
val = numbersAgain.sort();

val = numbersAgain.sort((x, y) => x - y); // ascending
val = numbersAgain.sort((x, y) => y - x); // descending

function under3(num) {
  return num < 3;
}
val = numbersAgain.find(under3);

console.log(numbersAgain);
console.log(numbers);
console.log(val);
