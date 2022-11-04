import { LightningElement, api, wire, track } from 'lwc';
import getCompanyInfo from '@salesforce/apex/calloutTest.getCompanyInfo';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import COMP_NUMBER from '@salesforce/schema/Account.Companies_House_Number__c';

export default class CompaniesHouse extends LightningElement {

  @api CompaniesHouseNumber
  @api recordId
  @track compHouseValue = '';
  companyName;
  getRecordError;
  
  @wire(getRecord, { recordId: '$recordId' , fields: COMP_NUMBER})
    wiredCompNumber({error, data}) {
      if (data) {
        console.log("this worked");
        this.compHouseValue = getFieldValue(data, 'Account.Companies_House_Number__c');
        
        
        console.log(this.compHouseValue);
      } else if (error) {
        console.log("this did not work");  
        this.getRecordError = "error";
      }
    }

  @wire(getCompanyInfo, { CompNumber: '06559846'})
  wiredCompany({error, data}) {
    if (data) {
      this.companyName = JSON.parse(data).company_name;
      this.error = undefined;
    } else if (error) {
        this.error = error;
        this.companyName = undefined;
    }
  }


  columns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Category', fieldName: 'category'},
    { label: 'Pages', fieldName: 'pages'},
  ];

  data = [
    {name: 'bob', 
    website: 'www.google.com', 
    phone: '5019930941',
    }
  ]

}