let val;

const today = new Date();
let birthday = new Date('11-22-1998 21:54:00');
birthday = new Date('November 22 1998');
birthday = new Date('11/22/1998');

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1999);
birthday.setHours(12);
birthday.setMinutes(21);
birthday.setSeconds(33);
birthday.setMilliseconds(334);

console.log(birthday);
console.log(val);
