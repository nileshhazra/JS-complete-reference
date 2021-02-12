const num = 4;
if (num > 4) {
  console.log(`${num} is greater than 4`);
} else {
  console.log(`${num} is less than 4`);
}

console.log(num > 2 ? 'greater than 2' : 'less than 2');

switch (num) {
  case 1:
    console.log('it is one');
    break;
  case 2:
    console.log('it is two');
    break;
  default:
    console.log('it is what it is.');
}
