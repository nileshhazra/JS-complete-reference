// window object
window.console.log('logging now..');
window.alert("You're Hacked!");
const input = prompt('Type your credit card number: ');
console.log(input);

if (confirm('Are you sure?')) {
  console.log('Yes');
}

let val;

val = window.innerHeight;
val = window.innerWidth;
val = window.outerHeight;
val = window.outerWidth;

val = window.scrollY;
val = window.scrollX;

val = window.location;
val = window.location.hostname;

window.location.href = 'https://nileshhazra.me';
window.location.reload();

window.history.go(-2); // -2 steps in history
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;
console.log(val);
