import { LightningElement, api } from 'lwc';

const columns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Category', fieldName: 'category'},
    { label: 'Pages', fieldName: 'pages'},
];

const data = [
  {name: 'bob', 
  website: 'www.google.com', 
  phone: '5019930941',
  }
]


export default class TabsetScoped extends LightningElement {
    @api
    columns = columns;

    @api filing_data
}