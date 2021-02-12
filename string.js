const firstName = 'Hattie';
const lastName = 'Schmidt';
const myage = 23;

let val;

val = firstName + lastName;

// concatenation
val = firstName + ' ' + lastName;

// append
val = 'Agnes ';
val += 'Bartell';

val = `hello my name is ${firstName}`;

// escaping
val = "That's my name";

// length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName.indexOf('t');
val = firstName.lastIndexOf('t');

val = firstName.charAt('2');
val = firstName.charAt(firstName.length - 1);

val = firstName.substring(0, 4);
val = firstName.slice(0, 4);
val = firstName.slice(-3);

const courses = 'html, css, javascript, react, react-native';
val = courses.split(',');

val = courses.replace('html', 'c++');

val = courses.includes('css');

console.log(val);
