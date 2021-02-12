const person = {
  firstName: 'Skylar',
  lastName: 'Balistreri',
  age: 23,
  email: 'skyler@hotmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Ranchi',
    state: 'Jharkhand',
  },
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

let val;

val = person;
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.address.city;
val = person.address['state'];
val = person.getBirthYear();

console.log(val);

const people = [
  { firstName: 'Mable', age: 30 },
  { firstName: 'Nicholaus', age: 20 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].firstName);
}
