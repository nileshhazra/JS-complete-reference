const yourName = 'Murl';
const yourAge = 20;
const job = 'District Intranet Administrator';
const city = 'Mumbai';

// without template literal ES5
html =
  '<ul><li>Name: ' +
  yourName +
  '</li><li>Age: ' +
  yourAge +
  '</li><li>job: ' +
  job +
  '</li><li>City' +
  city +
  '</li></ul>';

function hello() {
  return 'hello';
}

// with template literal ES6
html = `
  <ul>
    
    <li>Name: ${yourName}</li>
    <li>Age: ${yourAge}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${hello()}, you are ${yourAge < 30 ? 'under 30' : 'over 30'}</li>
  </ul>
  
  
  
  `;

document.body.innerHTML = html;
