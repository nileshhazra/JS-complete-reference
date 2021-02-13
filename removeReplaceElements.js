const li = document.createElement('li');
li.className = 'item';
li.id = 'new-item';
li.setAttribute('title', 'New-Item');
li.appendChild(document.createTextNode('Hello world'));

const link = document.createElement('a');
link.className = 'secondary-content';
link.innerHTML = 'Click here';

// Remove and Replace Elements
// parent
const cardAction = document.querySelector('card-action');
cardAction.replaceChild(newHeading, oldHeading);

const lis = document.querySelectorAll('li');
const list = document.querySelectorAll('ul');
list[0].remove();

lis.removeChild(li[2]);

// classes & attribubtes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

val = link.className;
val = link.classList;
link.classList.add('test');
link.classList.remove('test');

val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
val = link.hasAttribute('href');
val = link.removeAttribute('href');

console.log(li);
console.log(link);
