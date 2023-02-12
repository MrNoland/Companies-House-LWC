/* eslint-disable @lwc/lwc/no-api-reassignments */
import { api, wire, LightningElement } from 'lwc';
import searchCompany from "@salesforce/apex/compHouseCallout.searchCompany";
import myModal from 'c/baseLightningModal';

export default class CompanySearchResults extends LightningElement {

    @api syncFlowAPI;
    @api searchColumns = [
        { label: "Sync", fieldname: "sync", type: "button" , typeAttributes: { label: "Sync" }},
        { label: "Name", fieldName: "title" },
        { label: "Description", fieldName: "description" },
        { label: "Address", fieldName: "addressx5fsnippet" },
    ]
    
    @api searchQuery;
    @api itemsperpage = 10;
    @api startIndex = 0;
    @api searchData = [];

    @wire(searchCompany, { query: "$searchQuery", itemsPerPage: "$itemsperpage", startIndex: "$startIndex" })
    wiredsearchCompany({ error, data }) {
    if (data) {
        this.searchData = JSON.parse(data).items;
        console.log(data);
    } else if (error) {
      console.log(error.body.message);
    }
  }

  async openModal() {
    const result = await myModal.open({
        size: 'small',
        description: 'Accessible description of modal\'s purpose',
        flowAPI: this.syncFlowAPI,
    });
    console.log(result);
  }

  @api showSyncFlow 
  launchSyncFlow() {
    this.showSyncFlow = true 
  }
}