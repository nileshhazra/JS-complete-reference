// const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const select = document.getElementsByTagName('select');
taskInput.value = ''; //clear input after submission
// form.addEventListener('submit', runEvent);

// when you press and hold
taskInput.addEventListener('keydown', runEvent);
//when you hold and leave
taskInput.addEventListener('keyup', runEvent);
taskInput.addEventListener('keypress', runEvent);
taskInput.addEventListener('focus', runEvent);
taskInput.addEventListener('blur', runEvent);
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);
taskInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);

function runEvent(e) {
  console.log(`Event type: ${e.type}`);
  //   console.log(taskInput.value);
  e.preventDefault();
}
