import { LightningElement } from 'lwc';
//import fetch from 'node-fetch';

const columns = [
    { label: 'Label', fieldName: 'name' },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
];

const data = [
  {name: 'bob', 
  website: 'www.google.com', 
  phone: '5019930941',
  }
]

console.log("howdy");


/*
async function dome() {
    let url = 'https://api.company-information.service.gov.uk/company/06559846';
    let AuthKey = 'b3a3aaad-f3ff-4ecf-908e-5dfb560af870:';
    let response = await fetch(url, {method:'GET', 
    headers: {'Authorization': 'Basic ' + btoa(AuthKey)}});
    let resp = await response.json();
    return resp;
}
console.log(dome());
*/


export default class TabsetScoped extends LightningElement {
  data = data;
  columns = columns;
}