const li = document.createElement('li');
li.className = 'item';
li.id = 'new-item';
li.setAttribute('title', 'New-Item');
li.appendChild(document.createTextNode('Hello world'));

const link = document.createElement('a');
link.className = 'secondary-content';
link.innerHTML = 'Click here';

console.log(li);
console.log(link);
