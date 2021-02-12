// Global scope
var a = 1;
let b = 2;
const c = 3;

// function scope
function showNumbers() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log(a, b, c);
}
showNumbers(); // let, const are block scoped
console.log(a, b, c); // var is function scoped

if (true) {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log(a, b, c);
}

console.log(a, b, c); // var is overwritten
