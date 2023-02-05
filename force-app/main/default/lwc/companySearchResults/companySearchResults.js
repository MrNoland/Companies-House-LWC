/* eslint-disable @lwc/lwc/no-api-reassignments */
import { api, wire, LightningElement } from 'lwc';
import searchCompany from "@salesforce/apex/compHouseCallout.searchCompany";

export default class CompanySearchResults extends LightningElement {


    @api searchColumns = [
        { label: "Name", fieldName: "title" },
        { label: "Description", fieldName: "description" },
    ]
    
    @api searchquery;
    @api itemsperpage;
    @api startIndex = 0;
    @api searchData = [];

    @wire(searchCompany, { query: "$searchquery", itemsPerPage: "$itemsperpage", startIndex: "$startIndex" })
    wiredsearchCompany({ error, data }) {
    if (data) {
        this.searchData = JSON.parse(data).items;
        console.log(data);
    } else if (error) {
      console.log(error.body.message);
    }
  }
        
}