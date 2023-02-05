import { LightningElement, api, wire, track } from 'lwc';
import retrieveFieldValue from "@salesforce/apex/retrieveFieldValue.retrieveFieldValue";

export default class CompHouseRecordPage extends LightningElement {

  //Obtain the Company Number that is stored in the field noted on the Lightning Component
  @api companiesHouseNumberAPI;
  @api recordId;
  @track compNumber;
  @wire(retrieveFieldValue, {
    recordId: "$recordId",
    fieldAPI: "$companiesHouseNumberAPI"
  })
  wiredCompanyNumber({ error, data }) {
    if (data) {
      this.compNumber = data;
      //console.log(this.compNumber);
    } else if (error) {
      this.testError = "Error!";
      //console.log("error fetching company number");
    }
  }

}