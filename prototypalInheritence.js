// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person('John', 'Smith');
console.log(person1.greeting());

function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person protoype methods
Customer.prototype = Object.create(Person.prototype);
// make customer.prototype return customer
Customer.prototype.constructor = Customer;
const customer1 = new Customer('Tom', 'Smith', '444-444-444', 'standard');
console.log(customer1);
// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}, welcome to our company`;
};
console.log(customer1.greeting());
