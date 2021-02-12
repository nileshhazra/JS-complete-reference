let val;

val = document;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

document.getElementById().style.background = '#222';
document.getElementsByClassName(); // HTML Collection
val = document.getElementsByTagName(); // HTML Collection
val = Array.from(val);
val.reverse();

document.getElementById().textContent = 'Task Item';
document.getElementById().innerText = 'Task Item';
document.getElementById().innerHTML = '<li>Item</li>';

document.querySelector('#id');
document.querySelector('.class');
document.querySelector('h1'); // get the first h1 element

const list = document.querySelectorAll(''); // Node List
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// Node types
// 1 - Element
// 2 - Attribute
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

val = list.children; // HTML Collection of all elements
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = list.parentNode;
val = list.parentElement;
val = list.parentElement.parentElement;

val = list.nextSibling;
val = list.nextElementSibling;

val = list.previousSibling;
val = list.previousElementSibling;

console.log(val);
