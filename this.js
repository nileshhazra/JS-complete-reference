function Person(name, age, dob) {
  this.name = name;
  this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const john = new Person('John', 20, '11-22-1998');
const Bill = new Person('Bill', 30, '11-22-1999');
console.log(john.calculateAge());

// Built in constructors
const name1 = 'Nilesh';
const name2 = new String('Robert');
console.log(name1);
console.log(name2);
console.log(typeof name1);
console.log(typeof name2);

const num1 = 5;
const num2 = new Number(5);

const bool = new Boolean(true);
const setSum = new Function('x', 'y', 'return 1 + 1');

const john = new Object({ name: 'John' });
const arr = new Array(1, 2, 3, 4);

const re1 = new RegExp('\\w+');
