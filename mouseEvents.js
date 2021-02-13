document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  console.log('Hello World');
  e.preventDefault();
  let val;
  val = e;
  val = e.target; // gives the element
  val = e.target.className;
  val = e.target.classList;
  val = e.type;
  val = e.timeStamp;
  // Window
  val = e.clientY;
  val = e.clientX;
  // Element
  val = e.offsetX;
  val = e.offsetY;

  console.log(e);
  console.log(val);
}

clearbtn.addEventListener('click', runEvent);
clearbtn.addEventListener('dbclick', runEvent);
clearbtn.addEventListener('mousedown', runEvent); // Click Hold
clearbtn.addEventListener('mouseup', runEvent);
clearbtn.addEventListener('mouseenter', runEvent); // parent
clearbtn.addEventListener('mouseleave', runEvent); // parent
clearbtn.addEventListener('mouseover', runEvent);
clearbtn.addEventListener('mouseout', runEvent);
body.addEventListener('mousemove', runEvent);

function runEvent(e) {
  document.body.style.background = `rgb${e.offsetX}, ${e.offsetY}, 245`;
}
