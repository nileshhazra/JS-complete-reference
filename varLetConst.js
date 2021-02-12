// var, const let
var myName = 'John Doe';
console.log(myName);
myName = 'Sara';
console.log(myName);

// init var
var greeting;
console.log(greeting);
greeting = 'Hallo';
console.log(greeting);

// letters, numbers, _, $
// cannot start with a number
var $name = 'john';
console.log($name);

// multi-word varibles
var firstName = 'Nilesh'; // Recommended
var first_name = 'Sara';
var FirstName = 'Robert'; // For Classes

// let
let yourName;
console.log(yourName);
yourName = 'Winifred';
console.log(yourName);

// const
const hisName = 'john';
// cannot reassign

const person = {
  firstName: 'john',
  age: 30,
};
person.name = 'Sara';
console.log(person.firstName);

const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
