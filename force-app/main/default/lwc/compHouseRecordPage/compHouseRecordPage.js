/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api, wire } from 'lwc';
import retrieveFieldValue from "@salesforce/apex/retrieveFieldValue.retrieveFieldValue";

export default class CompHouseRecordPage extends LightningElement {

  //Obtain the Company Number that is stored in the field noted on the Lightning Component
  @api searchFieldAPI
  @api companiesHouseNumberAPI;
  @api recordId;
  @api compNumber;
  @api searchQuery;
  @api syncFlowAPI;

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

  @wire(retrieveFieldValue, {
    recordId: "$recordId",
    fieldAPI: "$searchFieldAPI"
  })
  wiredSearchQuery({ error, data }) {
    if (data) {
      this.searchQuery = data;
      //console.log(this.searchQuery);
    } else if (error) {
      this.testError = "Error!";
      //console.log("error fetching company number");
    }
  }

}