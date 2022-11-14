import { LightningElement, api, wire, track } from 'lwc';
import translations from './translations';
import obtainCompanyNumber from '@salesforce/apex/compHouseCallout.obtainCompanyNumber';
import getCompanyInfo from '@salesforce/apex/compHouseCallout.getCompanyInfo';
import getFilingHistory from '@salesforce/apex/compHouseCallout.getFilingHistory';
import getCompanyOfficersList from '@salesforce/apex/compHouseCallout.getCompanyOfficersList';
import getPersonsWithSignificantControlList from '@salesforce/apex/compHouseCallout.getPersonsWithSignificantControlList';
import getCompanyUKEstablishments from '@salesforce/apex/compHouseCallout.getCompanyUKEstablishments';
import getCompanyChargesList from '@salesforce/apex/compHouseCallout.getCompanyChargesList';
import getCompanyInsolvencyItem from '@salesforce/apex/compHouseCallout.getCompanyInsolvencyItem';

export default class CompaniesHouse extends LightningElement {

  //Obtain the Company Number value on the record
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

  //callout to getCompanyInfo to obtain data
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
  @api sicCodes =[];
  @wire(getCompanyInfo, {compNumber: '$cNum'})
  wiredCompany({error, data}) {
    if (data) {
      console.log(data);
      this.companyName = JSON.parse(data).companyx5fname;
      this.companyNumber = JSON.parse(data).companyx5fnumber;
      this.companyStatus = JSON.parse(data).companyx5fstatus;
      this.companyOfficeAddress = JSON.parse(data).registeredx5fofficex5faddress.addressx5flinex5f1 + " " + JSON.parse(data).registeredx5fofficex5faddress.addressx5flinex5f2 + ", " + JSON.parse(data).registeredx5fofficex5faddress.locality + ", " + JSON.parse(data).registeredx5fofficex5faddress.country + ", " + JSON.parse(data).registeredx5fofficex5faddress.postalx5fcode;
      this.companyType = JSON.parse(data).z0type;
      this.dateOfCreation = JSON.parse(data).datex5fofx5fcreation;
      this.dateofCessation = JSON.parse(data).datex5fofx5fcessation;
      this.canFile = JSON.parse(data).canx5ffile;
      this.hasBeenLiquidated = JSON.parse(data).hasx5fbeenx5fliquidated;
      this.hasCharges = JSON.parse(data).hasx5fcharges;
      this.hasInsolvencyHistory = JSON.parse(data).hasx5finsolvencyx5fhistory;
      this.isCommunityInterestCompany = JSON.parse(data).isx5fcommunityx5finterestx5fcompany;
      this.jurisdiction = JSON.parse(data).jurisdiction;
      this.registeredOfficeinDispute = JSON.parse(data).registeredx5fofficex5fisx5finx5fdispute;
      this.undeliverableRegOfficeAddress = JSON.parse(data).undeliverablex5fregisteredx5fofficex5faddress;
      this.accountsOverdue = JSON.parse(data).accounts.overdue;
      this.nextAccountsTo = JSON.parse(data).accounts.nextx5fmadex5fupx5fto;
      this.nextAccuontsDue = JSON.parse(data).accounts.nextx5fdue;
      this.lasAccountsTo = JSON.parse(data).accounts.lastx5faccounts.madex5fupx5fto;
      this.statementsOverdue = JSON.parse(data).confirmationx5fstatement.overdue;
      this.nextStatementTo = JSON.parse(data).confirmationx5fstatement.nextx5fmadex5fupx5fto;
      this.nextStatementDue = JSON.parse(data).confirmationx5fstatement.nextx5fdue;
      this.lastStatememtTo = JSON.parse(data).confirmationx5fstatement.lastx5fmadex5fupx5fto;
      this.sicCodes = JSON.parse(data).sicx5fcodes;
      this.previousCompanyNames = JSON.parse(data).previosx5fcompanyx5fnames;

    } else if (error) {
      this.testError = "Error!";
      console.log(error);
    }
  }

  //callout to getFilingHistory to obtain data
  @api filingHistoryColumns = [
    { label: 'Date', fieldName: 'z0date' },
    { label: 'Category', fieldName: 'category'},
    { label: 'Description', fieldName: 'description'},
    { label: 'Pages', fieldName: 'pages'},
  ];
  @api filingHistoryData = []
  @api filingHistoryCount
  @wire(getFilingHistory, {compNumber: '$cNum'})
  wiredFilingList({error, data}) {
    if (data) {
      console.log(data);
      this.filingHistoryCount = JSON.parse(data).totalx5fcount;
      console.log(this.filingHistoryCount);
      this.filingHistoryData = JSON.parse(data).items;
    } else if (error) {
      this.testError = "Error!";
    }
  }

  //callout to getCompanyOfficersList to obtain data
  @api officerColumns = [
    { label: 'Name', fieldName: 'name' },
    { label: 'Role', fieldName: 'officerx5frole'},
    { label: 'Correspondence Address', fieldName: 'address'},
    { label: 'Date of Birth', fieldName: 'datex5fofx5fbirth'},
    { label: 'Appointed On', fieldName: 'appointedx5fon'},
    { label: 'Resigned On', fieldName: 'resignedx5fon'},
    { label: 'Nationality', fieldName: 'nationality'},
    { label: 'Country of Residence', fieldName: 'countryx5fofx5fresidence'},
    { label: 'Occupation', fieldName: 'occupation'},
  ];
  @api officerData = [];
  @wire(getCompanyOfficersList, {compNumber: '$cNum'})
  wiredOfficerList({error, data}) {
    if (data) {
      //console.log(data);
      this.officerData = JSON.parse(data).items;
    } else if (error) {
      this.testError = "Error!";
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
      this.testError = "Error!";
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
      this.testError = "Error!";
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
  wiredUKEstablishments({error, data}) {
    if (data) {
      //console.log(data);
      this.chargesData = JSON.parse(data).items;
    } else if (error) {
      this.testError = "Error!";
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
      this.testError = "Error!";
      console.log('error bitch')
    }
  }
  

  constructor() {
    super(); // Must be called first
    console.log('>>> cNum');
  }

}