import { LightningElement, api, wire, track } from 'lwc';
import translate from './translations';
import obtainCompanyNumber from '@salesforce/apex/compHouseCallout.obtainCompanyNumber';
import getCompanyInfo from '@salesforce/apex/compHouseCallout.getCompanyInfo';
import getFilingHistory from '@salesforce/apex/compHouseCallout.getFilingHistory';
import getCompanyOfficersList from '@salesforce/apex/compHouseCallout.getCompanyOfficersList';
import getPersonsWithSignificantControlList from '@salesforce/apex/compHouseCallout.getPersonsWithSignificantControlList';
import getCompanyUKEstablishments from '@salesforce/apex/compHouseCallout.getCompanyUKEstablishments';
import getCompanyChargesList from '@salesforce/apex/compHouseCallout.getCompanyChargesList';
import getCompanyInsolvencyItem from '@salesforce/apex/compHouseCallout.getCompanyInsolvencyItem';

export default class CompaniesHouse extends LightningElement {

  //Obtain the Company Number that is stored in the field noted on the Lightning Component
  @api CompaniesHouseNumber;
  @api recordId;
  @api cNum;
  @wire(obtainCompanyNumber, { recordId: '$recordId', fieldAPI: '$CompaniesHouseNumber'})
  wiredCompanyNumber({error, data}) {
    if (data) {
      this.cNum = data;
    } else if (error) {
      this.testError = "Error!";
    }
  }

  //Standard company fields
  @api companyName;
  @api companyNumber;
  @api companyStatus;
  @api companyOfficeAddress;
  @api companyType;
  @api dateOfCreation;
  @api dateofCessation;
  @api canFile;
  @api hasBeenLiquidated;
  @api hasCharges;
  @api hasInsolvencyHistory;
  @api isCommunityInterestCompany;
  @api jurisdiction;
  @api registeredOfficeinDispute;
  @api undeliverableRegOfficeAddress;
  @api accountsOverdue;
  @api nextAccountsTo;
  @api nextAccuontsDue;
  @api lasAccountsTo;
  @api statementsOverdue;
  @api nextStatementTo;
  @api nextStatementDue;
  @api lastStatememtTo;
  @api previousCompanyNames = [];
  @api sicCodes = [];
  @api registrationNumber;
  @api parentRegistry;
  @api incorporatedIn;
  @api creditFinanceInstitution;
  @api governedBy;
  @api foreignCompanyType;
  @api businessActivity;
  @api mustFilewithin;
  @api accountPeriodToMonth;
  @api accountPeriodToDay;
  @api accountPeriodFromMonth;
  @api accountPeriodFromDay;
  @api termsOfAccountPublication;
  @api foreignAccountType;

  //callout to obtain the company details
  @wire(getCompanyInfo, {compNumber: '$cNum'})
  wiredCompany({error, data}) {
    if (data) {
      this.companyName = JSON.parse(data).companyx5fname;
      this.companyNumber = JSON.parse(data).companyx5fnumber;
      this.companyStatus = translate('company_status', JSON.parse(data).companyx5fstatus);
      this.companyOfficeAddress = JSON.parse(data).registeredx5fofficex5faddress.addressx5flinex5f1 + " " + JSON.parse(data).registeredx5fofficex5faddress.addressx5flinex5f2 + ", " + JSON.parse(data).registeredx5fofficex5faddress.locality + ", " + JSON.parse(data).registeredx5fofficex5faddress.country + ", " + JSON.parse(data).registeredx5fofficex5faddress.postalx5fcode;
      this.companyType = translate('company_type', JSON.parse(data).z0type);
      this.dateOfCreation = JSON.parse(data).datex5fofx5fcreation;
      this.dateofCessation = JSON.parse(data).datex5fofx5fcessation;
      this.canFile = JSON.parse(data).canx5ffile;
      this.hasBeenLiquidated = JSON.parse(data).hasx5fbeenx5fliquidated;
      this.hasCharges = JSON.parse(data).hasx5fcharges;
      this.hasInsolvencyHistory = JSON.parse(data).hasx5finsolvencyx5fhistory;
      this.isCommunityInterestCompany = JSON.parse(data).isx5fcommunityx5finterestx5fcompany;
      this.jurisdiction = translate('jurisdiction', JSON.parse(data).jurisdiction);
      this.registeredOfficeinDispute = JSON.parse(data).registeredx5fofficex5fisx5finx5fdispute;
      this.undeliverableRegOfficeAddress = JSON.parse(data).undeliverablex5fregisteredx5fofficex5faddress;
      if (JSON.parse(data).accounts !== null){
        this.accountsOverdue = JSON.parse(data).accounts.overdue;
        this.nextAccountsTo = JSON.parse(data).accounts.nextx5fmadex5fupx5fto;
        this.nextAccuontsDue = JSON.parse(data).accounts.nextx5fdue;
        this.lasAccountsTo = JSON.parse(data).accounts.lastx5faccounts.madex5fupx5fto;
      }
      if (JSON.parse(data).confirmationx5fstatement !== null){
        this.statementsOverdue = JSON.parse(data).confirmationx5fstatement.overdue;
        this.nextStatementTo = JSON.parse(data).confirmationx5fstatement.nextx5fmadex5fupx5fto;
        this.nextStatementDue = JSON.parse(data).confirmationx5fstatement.nextx5fdue;
        this.lastStatememtTo = JSON.parse(data).confirmationx5fstatement.lastx5fmadex5fupx5fto;
      }
      this.previousCompanyNames = JSON.parse(data).previosx5fcompanyx5fnames;
      this.sicCodes = JSON.parse(data).sicx5fcodes + ' - ' + translate('sic_descriptions', JSON.parse(data).sicx5fcodes);
      //Foreign Compoany Details
      if (JSON.parse(data).foreignx5fcompanyx5fdetails !== null){
        this.registrationNumber = JSON.parse(data).foreignx5fcompanyx5fdetails.registrationx5fnumber;
        this.parentRegistry = JSON.parse(data).foreignx5fcompanyx5fdetails.originatingx5fregistry.name;
        this.incorporatedIn = JSON.parse(data).foreignx5fcompanyx5fdetails.originatingx5fregistry.country;
        this.creditFinanceInstitution = JSON.parse(data).foreignx5fcompanyx5fdetails.isx5fax5fcreditx5ffinancex5finstitution;
        this.governedBy = JSON.parse(data).foreignx5fcompanyx5fdetails.governedx5fby;
        this.foreignCompanyType = JSON.parse(data).foreignx5fcompanyx5fdetails.companyx5ftype;
        this.businessActivity = JSON.parse(data).foreignx5fcompanyx5fdetails.businessx5factivity;
        this.mustFilewithin = JSON.parse(data).foreignx5fcompanyx5fdetails.accounts.mustx5ffilex5fwithin.months;
        this.accountPeriodToMonth = JSON.parse(data).foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5fto.month;
        this.accountPeriodToDay = JSON.parse(data).foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5fto.day;
        this.accountPeriodFromMonth = JSON.parse(data).foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5ffrom.month;
        this.accountPeriodFromDay = JSON.parse(data).foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5ffrom.day;
        this.termsOfAccountPublication = translate('terms_of_account_publication', JSON.parse(data).foreignx5fcompanyx5fdetails.accountingx5frequirement.termsx5fofx5faccountx5fpublication);
        this.foreignAccountType = translate('foreign_account_type', JSON.parse(data).foreignx5fcompanyx5fdetails.accountingx5frequirement.foreignx5faccountx5ftype);
      }
      
    } else if (error) {
      this.testError = "Error!";
      console.log(error);
    }
  }

  //callout to getFilingHistory to obtain data
  @api filingHistoryColumns = [
    { label: 'Date', fieldName: 'z0date'},
    { label: 'Category', fieldName: 'category'},
    { label: 'Description', fieldName: 'description'},
    { label: 'Documents', fieldName: 'pages', type: 'url',
      cellAttributes: {
        iconName: 'utility:download',
        iconPosition: 'right',
        iconAlternativeText: 'View/Download',
      },  
      typeAttributes: {
          label: {
              fieldName: 'barcode'
          },
          tooltip: "View/Download Document"
        }
      },
  ];

  @api viewDownload;
  @api filingHistoryData = []
  @api filingHistoryCount
  @api categoryFilters = [
    {label: 'Accounts', value: 'accounts'},
    {label: 'Address', value: 'address'},
    {label: 'Confirmation Statements / Annual Returns', value: 'annual-return'},
    {label: 'Capital', value: 'capital'},
    {label: 'Change of Name', value: 'change-of-name'},
    {label: 'Charges', value: 'charges'},
    {label: 'Incorporation', value: 'incorporation'},
    {label: 'Liquidation', value: 'liquidation'},
    {label: 'Miscellaneous', value: 'miscellaneous'},
    {label: 'Mortgage', value: 'mortgage'},
    {label: 'Officers', value: 'officers'},
    {label: 'Resolution', value: 'resolution'},
    ]
  @api itemsFilter = [
    {label: '5', value: '5'},
    {label: '10', value: '10'},
    {label: '15', value: '15'},
    {label: '20', value: '20'},
    {label: '25', value: '25'},
    {label: '30', value: '30'},
  ]
  @api categoryFilter = [];
  @api itemsPerPage = 15;
  @api startIndex = 0;
  @api totalPageCount;
  @api pageNumber = 1;
  @api isFirstPage;
  @api isLastPage;
  
  handleCategoryFilterChange(event) {
    this.pageNumber = 1;
    this.startIndex = 0;
    this.categoryFilter = event.detail.value;
    }
  
  handleItemsFilterChange(event) {
    this.pageNumber = 1;
    this.startIndex = 0;
    this.itemsPerPage = event.detail.value;
    }

  handleNextPage(event) {
    if(this.pageNumber < this.totalPageCount){
      this.pageNumber = this.pageNumber + 1;
      this.startIndex =  (this.pageNumber-1)*this.itemsPerPage;
    }
  }

  handlePrevPage(event) {
    if(this.pageNumber > 1){
      this.pageNumber = this.pageNumber - 1;
      this.startIndex =  (this.pageNumber-1)*this.itemsPerPage;
    }
  }

  updatePageButtons() {
    if(this.pageNumber === 1 ){
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
    }
    if (this.pageNumber >= this.totalPageCount){
      this.isLastPage = true;
    } else {
      this.isLastPage = false;
    }
  }

  @wire(getFilingHistory, {compNumber: '$cNum', categoryFilter: '$categoryFilter', itemsPerPage: '$itemsPerPage', startIndex: '$startIndex'})
  wiredFilingList({error, data}) {
    if (data) {
      this.filingHistoryCount = JSON.parse(data).totalx5fcount;
      this.totalPageCount = Math.ceil(this.filingHistoryCount/this.itemsPerPage)
      this.updatePageButtons();
      this.filingHistoryData = JSON.parse(data).items;
      //console.log(this.filingHistoryData);
      this.filingHistoryData.forEach(filingHistoryData => {
        if (filingHistoryData['pages'] === 1){
          filingHistoryData['barcode'] = filingHistoryData['barcode'] + " (" + filingHistoryData['pages'] + " page)";
        } else {
          filingHistoryData['barcode'] = filingHistoryData['barcode'] + " (" + filingHistoryData['pages'] + " pages)";
        };
        filingHistoryData['pages'] = "https://beta.companieshouse.gov.uk" + filingHistoryData['links']['self'] + "/document?format=pdf&download=0";
        filingHistoryData['category'] = translate('filing_category', filingHistoryData['category']);
      });
      //console.log(this.filingHistoryData);
    } else if (error) {
      this.testError = "Filing List Error!";
    }
  }

  //callout to getCompanyOfficersList to obtain data
  @api officerColumns = [
    {label: 'Details', fieldname: 'details', type: 'button', typeAttributes: { label: 'Details'}},
    { label: 'Name', fieldName: 'nameURL', type: 'url',
    cellAttributes: {
      iconName: 'utility:new_window',
      iconPosition: 'right',
    },  
    typeAttributes: {
        label: {
          fieldName: 'name'
        },
        tooltip: "View in Companies House website",
      }
    },
    { label: 'Role', fieldName: 'officerx5frole'},
    { label: 'Nationality', fieldName: 'nationality'},
    { label: 'Appointed On', fieldName: 'appointedx5fon'},
    { label: 'Resigned On', fieldName: 'resignedx5fon'},
  ];
  @track officerData = [];
  @api showOfficerCard;
  @api officerFilter;
  @api officerActiveCount;
  @api officerResignedCount;
  @api officerTotalCount;

  @api officerName;
  @api officerResponsibilities;
  @api officerResignedOn;
  @api officerPrincipalAddress;
  @api officerRole;
  @api officerOccupation;
  @api officerNationality;
  @api officerIdentification;
  @api officerformerNames = [];
  @api officerDateOfBirth;
  @api officerCountryOfResidence;
  @api officerContactDetails;
  @api officerAppointedOn;
  @api officerAddress;
  showOfficerDetails(event){
    console.log(JSON.stringify(event.detail.row));
    this.showOfficerCard = true;
    this.officerName = event.detail.row.name;
    this.officerResponsibilities = event.detail.row.responsibilities;
    this.officerResignedOn = event.detail.row.resignedx5fon;
    this.officerPrincipalAddress = event.detail.row.principalx5fofficex5faddress;
    this.officerRole = event.detail.row.officerx5frole;
    this.officerOccupation = event.detail.row.occupation;
    this.officerNationality = event.detail.row.nationality;
    this.officerIdentification = event.detail.row.identification;
    this.officerformerNames = event.detail.row.formerx5fnames;
    this.officerDateOfBirth = event.detail.row.datex5fofx5fbirth;
    this.officerCountryOfResidence = event.detail.row.countryx5fofx5fresidence;
    this.officerContactDetails = event.detail.row.contactx5fdetails;
    this.officerAppointedOn = event.detail.row.appointedx5fon;
    this.officerAddress = event.detail.row.address.region + event.detail.row.address.addressx5flinex5f1 + event.detail.row.address.addressx5flinex5f1 + event.detail.row.address.premises + event.detail.row.address.pox5fbox + event.detail.row.address.postalx5fcode + event.detail.row.address.locality + event.detail.row.address.country + event.detail.row.address.carex5fof;
  };

  backOfficerTable(event){
    this.showOfficerCard = false;
  }

  toggleOfficers(event){
    this.officerFilter = true;
  };

  @wire(getCompanyOfficersList, {compNumber: '$cNum'})
  wiredOfficerList({error, data}) {
    if (data) {
      this.officerData = JSON.parse(data).items;
      this.officerResignedCount = JSON.parse(data).totalx5fresults;
      this.officerActiveCount = JSON.parse(data).totalx5fresults - JSON.parse(data).resignedx5fcount;
      this.officerResignedCount = JSON.parse(data).resignedx5fcount; 
      console.log(this.officerData);
      for (const obj of this.officerData) {
        obj.officerx5frole = translate('officer_role', obj.officerx5frole);
        obj.nameURL = "https://find-and-update.company-information.service.gov.uk/" + obj.links.officer.appointments;
      };
      
      /*if (this.officerFilter = true){
        officerdata = officerData.filter(officerData => officerData.resignedx5fon === '');
      }
      console.log(this.officerData);
      console.log(data);*/
    } else if (error) {
      this.testError = "Officer List Error!";
    }
  }

  //callout to getPersonsWithSignificantControlList to obtain data
  //Will likely need another callout to get Person details
  //Needs significant work to clean up object
  @api pscColumns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Correspondence Address', fieldName: 'address'}, //this field needs fixing in service
    { label: 'Notified On', fieldName: 'notifiedx5fon'},
    { label: 'Governing Law', fieldName: 'legalx5fauthority'},
    { label: 'Legal Form', fieldName: 'legalx5fform'},
    { label: 'Place Registered', fieldName: 'placex5fregistered'},
    { label: 'Registration Number', fieldName: 'registrationx5fnumber'},
    { label: 'Incorporated In', fieldName: 'countryx5fregistered'},
    { label: 'Date of Birth', fieldName: 'datex5fofx5fbirth'},
    { label: 'Ceased Date', fieldName: 'ceasedx5fon'},
    { label: 'Country of Residence', fieldName: 'countryx5fofx5fresidence'},
    { label: 'Nature of Control', fieldName: 'naturesx5fofx5fcontrol'},
  ];
  @api pscData = [];
  @wire(getPersonsWithSignificantControlList, {compNumber: '$cNum'})
  wiredPscList({error, data}) {
    if (data) {
      //console.log(data);
      this.pscData = JSON.parse(data).items;
    } else if (error) {
      this.testError = "PSC List error!";
    }
  }

  //callout to getCompanyUKEstablishments to obtain data
  @api ukEstablishmentsColumns = [
    { label: 'Company Name', fieldName: 'companyx5fname' },
    { label: 'Company Number', fieldName: 'companyx5fnumber'},
    { label: 'Locality', fieldName: 'locality'},
    { label: 'Company Status', fieldName: 'companyx5fstatus'},
  ];
  @api ukEstablishmentsData = [];
  @wire(getCompanyUKEstablishments, {compNumber: '$cNum'})
  wiredUKEstablishments({error, data}) {
    if (data) {
      //console.log(data);
      this.ukEstablishmentsData = JSON.parse(data).items;
    } else if (error) {
      this.testError = "UK Establishments Error!";
    }
  }

  //callout to getCompanyChargesList to obtain data
  //Will likely need abother callout to ger charge details
  @api chargesColumns = [
    { label: 'Description', fieldName: 'description' },//need to pull from inside Classification object
    { label: 'Created', fieldName: 'createdx5fon'},
    { label: 'Delivered', fieldName: 'deliveredx5fon'},
    { label: 'Status', fieldName: 'status'},
    { label: 'Transaction Filed', fieldName: 'companyx5fstatus'},
    { label: 'Persons Entitled', fieldName: 'personsx5fentitled'},//Array of objects needs to be broken apart
    { label: 'Amount Secured', fieldName: 'securedx5fdetails'}, // Object needs to be broken apart
    { label: 'Particulars', fieldName: 'personsx5fentitled'}, //Object needs to be broken apart
  ];
  @api chargesData = [];
  @wire(getCompanyChargesList, {compNumber: '$cNum'})
  wiredCompanyCharges({error, data}) {
    if (data) {
      //console.log(data);
      this.chargesData = JSON.parse(data).items;
    } else if (error) {
      this.testError = "Company Charges Error!";
    }
  }

  //callout to getCompanyInsolvencyItem to obtain data
  //Something is wrong with the Apex class (or more likley the API definition)
  @api insolvencyColumns = [
    { label: 'Date', fieldName: 'z0date' },
    { label: 'Category', fieldName: 'category'},
    { label: 'Description', fieldName: 'description'},
    { label: 'Pages', fieldName: 'pages'},
  ];
  @api insolvencyData = []
  @wire(getCompanyInsolvencyItem, {compNumber: '$cNum'})
  wiredInsolvency({error, data}) {
    if (data) {
      //console.log(data);
      //this.solvencyData = JSON.parse(data).items;
    } else if (error) {
      this.testError = "Insolvency Error!";
      console.log('')
    }
  }
  

  constructor() {
    super(); // Must be called first
    console.log('>>> cNum');
  }

}