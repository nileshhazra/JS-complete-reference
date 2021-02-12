// for-loop
for (let i = 0; i < 5; i++) {
  console.log(`Number: ${i}`);
}

// while-loop
let i = 0;
while (i < 5) {
  console.log(`While Number: ${i}`);
  i++;
}

// dowhile-loop
let i = 0;
do {
  console.log(`While Number: ${i}`);
  i++;
} while (i < 5);

const houses = [
  'Godric Gryffindor',
  'Salazar Slytherin',
  'Rowena Ravenclaw',
  'Helga Hufflepuff',
];

houses.forEach((house) => {
  console.log(house);
});

const users = [
  { id: 1, firstName: 'Alyson' },
  { id: 2, firstName: 'Buford' },
];

const names = users.map((user) => user.firstName);
console.log(names);

const person = {
  firstName: 'Devon',
  lastName: 'Wintheiser',
  age: 23,
};

for (let x in person) {
  console.log(`${x}: ${person[x]}`);
}
