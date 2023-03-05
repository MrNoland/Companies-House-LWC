/* eslint-disable @lwc/lwc/no-api-reassignments */
import { api, track, wire, LightningElement } from 'lwc';
import searchCompany from "@salesforce/apex/compHouseCallout.searchCompany";
import myModal from 'c/baseLightningModal';

export default class CompanySearchResults extends LightningElement {

    @api syncFlowAPI;
    @api recordId;
    @track companyURL;
    @api searchColumns = [
        { label: "Sync", fieldname: "sync", type: "button" , fixedWidth: 80, typeAttributes: { label: "Sync" }},
        {
          label: "Name",
          fieldName: "companyURL",
          type: "url",
          wrapText: true,
          cellAttributes: {
            iconName: "utility:new_window",
            iconPosition: "right"
          },
          typeAttributes: {
            label: {
              fieldName: "title"
            },
            tooltip: "View in Companies House website"
          }
        },
        { label: "Description", fieldName: "description", wrapText: true },
        { label: "Address", fieldName: "addressx5fsnippet", wrapText: true }
    ]
    
    @api searchQuery;
    @api itemsPerPage = 10;
    @api startIndex = 0;
    @api searchData = [];
    @api totalResults;

    @wire(searchCompany, { query: "$searchQuery", itemsPerPage: "$itemsPerPage", startIndex: "$startIndex" })
    wiredsearchCompany({ error, data }) {
    if (data) {
        this.totalResults = JSON.parse(data).totalx5fresults;
        this.searchData = JSON.parse(data).items;
        for (const obj of this.searchData) {
          obj.companyURL = "https://find-and-update.company-information.service.gov.uk" + obj.links.self;
        }
        //console.log(data);
    } else if (error) {
      console.log(error.body.message);
    }
  }

  @api compHouseNumber;

  async openModal(event) {
    const result = await myModal.open({
        size: 'small',
        description: 'Accessible description of modal\'s purpose',
        flowAPI: this.syncFlowAPI,
        compHouseNumber: event.detail.row.companyx5fnumber,
        recordId: this.recordId,
    });
    console.log(result);
  }

  loadMoreData(event) {
    event.target.isLoading = true;
    if (this.itemsPerPage >= this.totalResults){
      event.target.enableInfiniteLoading = false;
    } else {
      this.itemsPerPage = this.itemsPerPage + 10;
    }
    event.target.isLoading = false;
  }

}