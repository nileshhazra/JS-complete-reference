// declaration
function calculateAge(age = 20) {
  return `your age is ${age}`;
}

console.log(calculateAge(32));
console.log(calculateAge());

// expression
const square = function (x = 2) {
  return x * x;
};
console.log(square(4));

// immidiately invocable function expressions : IIFEs
(function (name) {
  console.log('Hello' + name);
})(' Jonathon');

// property methods
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};
todo.delete = function () {
  console.log('Delete todo...');
};

todo.add();
todo.edit(12);
todo.delete();
