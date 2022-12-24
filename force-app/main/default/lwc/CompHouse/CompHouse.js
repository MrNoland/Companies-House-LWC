import { LightningElement, api, wire, track } from 'lwc';
import translate from './translations';
import obtainCompanyNumber from '@salesforce/apex/compHouseCallout.obtainCompanyNumber';
import getCompanyInfo from '@salesforce/apex/compHouseCallout.getCompanyInfo';
import getFilingHistory from '@salesforce/apex/compHouseCallout.getFilingHistory';
import getCompanyOfficersList from '@salesforce/apex/compHouseCallout.getCompanyOfficersList';
import getOfficerAppointments from '@salesforce/apex/compHouseCallout.getOfficerAppointments';
import getPersonsWithSignificantControlList from '@salesforce/apex/compHouseCallout.getPersonsWithSignificantControlList';
import getCompanyUKEstablishments from '@salesforce/apex/compHouseCallout.getCompanyUKEstablishments';
import getCompanyChargesList from '@salesforce/apex/compHouseCallout.getCompanyChargesList';
import getCompanyInsolvency from '@salesforce/apex/compHouseCallout.getCompanyInsolvency';
import CH_Icon from '@salesforce/resourceUrl/CH_Logo';

export default class CompaniesHouse extends LightningElement {

  //Set Logo to variable
  CH_Icon = CH_Icon;

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

  //Set company info field variables
  @api companyInfo;
  @api companyName;
  @api companyNumber;
  @api companyStatus;
  @api companyOfficeAddress = "";
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
  @api accounts;
  @api accountsOverdue;
  @api nextAccountsTo;
  @api nextAccuontsDue;
  @api lasAccountsTo;
  @api confirmationStatement;
  @api statementsOverdue;
  @api nextStatementTo;
  @api nextStatementDue;
  @api lastStatememtTo;
  @api sicCodes;
  @api foreignCompany;
  @api registrationNumber;
  @api parentRegistry;
  @api incorporatedIn;
  @api creditFinanceInstitution;
  @api governedBy;
  @api foreignCompanyType;
  @api foreignCompanyLegalForm;
  @api businessActivity;
  @api mustFilewithin;
  @api accountPeriodToMonth;
  @api accountPeriodToDay;
  @api accountPeriodFromMonth;
  @api accountPeriodFromDay;
  @api termsOfAccountPublication;
  @api foreignAccountType;
  @api companyURL;
  @api statusBadgeTheme
  @api previosNamesData = [];
  @api previousNamesColumns = [
    {label: 'Previous Names', fieldName: 'name', hideDefaultActions: true},
    {label: 'Effective', fieldName: 'effectivex5ffrom', type: 'date', hideDefaultActions: true},
    {label: 'Ceased', fieldName: 'ceasedx5fon', type: 'date', hideDefaultActions: true}
  ];

  //callout to obtain the company details and assign variables
  @wire(getCompanyInfo, {compNumber: '$cNum'})
  wiredCompany({error, data}) {
    if (data) {
      console.log(data);
      this.companyInfo = JSON.parse(data);
      this.companyURL = "https://find-and-update.company-information.service.gov.uk" + this.companyInfo.links.self;
      this.companyName = this.companyInfo.companyx5fname;
      this.companyNumber = this.companyInfo.companyx5fnumber;
      this.companyStatus = translate('company_status', this.companyInfo.companyx5fstatus);
      if (this.companyStatus === 'Active' || this.companyStatus ==='Open' || this.companyStatus === 'Registered') {
        this.statusBadgeTheme = 'slds-theme_success'
      } else {
        this.statusBadgeTheme = 'slds-theme_error'
      }
      
      if (this.companyInfo.registeredx5fofficex5faddress.addressx5flinex5f1 !== null) {
        this.companyOfficeAddress = this.companyInfo.registeredx5fofficex5faddress.addressx5flinex5f1
        } if (this.companyInfo.registeredx5fofficex5faddress.addressx5flinex5f2 !== null) {
          this.companyOfficeAddress = this.companyOfficeAddress + ", " + this.companyInfo.registeredx5fofficex5faddress.addressx5flinex5f2
          } if (this.companyInfo.registeredx5fofficex5faddress.premises !== null) {
            this.companyOfficeAddress = this.companyInfo.registeredx5fofficex5faddress.premises
            } if (this.companyInfo.registeredx5fofficex5faddress.carex5fof !== null) {
              this.companyOfficeAddress = this.companyOfficeAddress + ", " + this.companyInfo.registeredx5fofficex5faddress.premises
              } if (this.companyInfo.registeredx5fofficex5faddress.pox5fbox !== null) {
                this.companyOfficeAddress = this.companyOfficeAddress + ", " + this.companyInfo.registeredx5fofficex5faddress.pox5fbox
                } if (this.companyInfo.registeredx5fofficex5faddress.locality !== null) {
                  this.companyOfficeAddress = this.companyOfficeAddress + ", " + this.companyInfo.registeredx5fofficex5faddress.locality
                  } if (this.companyInfo.registeredx5fofficex5faddress.region !== null) {
                    this.companyOfficeAddress = this.companyOfficeAddress + ", " + this.companyInfo.registeredx5fofficex5faddress.region
                    } if (this.companyInfo.registeredx5fofficex5faddress.country !== null) {
                      this.companyOfficeAddress = this.companyOfficeAddress + ", " + this.companyInfo.registeredx5fofficex5faddress.country
                      } if (this.companyInfo.registeredx5fofficex5faddress.postalx5fcode !== null) {
                        this.companyOfficeAddress = this.companyOfficeAddress + ", " + this.companyInfo.registeredx5fofficex5faddress.postalx5fcode
                        }
      this.companyType = translate('company_type', this.companyInfo.z0type);
      this.dateOfCreation = this.companyInfo.datex5fofx5fcreation;
      this.dateofCessation = this.companyInfo.datex5fofx5fcessation;
      this.canFile = this.companyInfo.canx5ffile;
      this.hasBeenLiquidated = this.companyInfo.hasx5fbeenx5fliquidated;
      this.hasCharges = this.companyInfo.hasx5fcharges;
      this.hasInsolvencyHistory = this.companyInfo.hasx5finsolvencyx5fhistory;
      this.isCommunityInterestCompany = this.companyInfo.isx5fcommunityx5finterestx5fcompany;
      this.jurisdiction = translate('jurisdiction', this.companyInfo.jurisdiction);
      this.registeredOfficeinDispute = this.companyInfo.registeredx5fofficex5fisx5finx5fdispute;
      this.undeliverableRegOfficeAddress = this.companyInfo.undeliverablex5fregisteredx5fofficex5faddress;
      
      this.accounts = this.companyInfo.accounts;
      if (this.companyInfo.accounts !== null){
        this.accountsOverdue = this.companyInfo.accounts.overdue;
        this.nextAccountsTo = this.companyInfo.accounts.nextx5fmadex5fupx5fto;
        this.nextAccuontsDue = this.companyInfo.accounts.nextx5fdue;
        this.lasAccountsTo = this.companyInfo.accounts.lastx5faccounts.madex5fupx5fto;
      }
      
      this.confirmationStatement = this.companyInfo.confirmationx5fstatement;
      if (this.companyInfo.confirmationx5fstatement !== null){
        this.statementsOverdue = this.companyInfo.confirmationx5fstatement.overdue;
        this.nextStatementTo = this.companyInfo.confirmationx5fstatement.nextx5fmadex5fupx5fto;
        this.nextStatementDue = this.companyInfo.confirmationx5fstatement.nextx5fdue;
        this.lastStatememtTo = this.companyInfo.confirmationx5fstatement.lastx5fmadex5fupx5fto;
      }
      
      this.sicCodes = this.companyInfo.sicx5fcodes;
      if (this.sicCodes !== null) {
        for(var x= 0; x < this.sicCodes.length; x++) {
          this.sicCodes[x] = this.sicCodes[x] + " - " + translate('sic_descriptions', this.sicCodes[x]);
        };
      };
      
      this.previosNamesData = this.companyInfo.previousx5fcompanyx5fnames;
      this.foreignCompany = this.companyInfo.foreignx5fcompanyx5fdetails;
      if (this.companyInfo.foreignx5fcompanyx5fdetails !== null){
        this.registrationNumber = this.companyInfo.foreignx5fcompanyx5fdetails.registrationx5fnumber;
        this.parentRegistry = this.companyInfo.foreignx5fcompanyx5fdetails.originatingx5fregistry.name;
        this.incorporatedIn = this.companyInfo.foreignx5fcompanyx5fdetails.originatingx5fregistry.country;
        this.creditFinanceInstitution = this.companyInfo.foreignx5fcompanyx5fdetails.isx5fax5fcreditx5ffinancex5finstitution;
        this.governedBy = this.companyInfo.foreignx5fcompanyx5fdetails.governedx5fby;
        this.foreignCompanyType = this.companyInfo.foreignx5fcompanyx5fdetails.companyx5ftype;
        this.foreignCompanyLegalForm = this.companyInfo.foreignx5fcompanyx5fdetails.legalx5fform;
        this.businessActivity = this.companyInfo.foreignx5fcompanyx5fdetails.businessx5factivity;
        this.mustFilewithin = this.companyInfo.foreignx5fcompanyx5fdetails.accounts.mustx5ffilex5fwithin.months;
        this.accountPeriodToMonth = translate('month', this.companyInfo.foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5fto.month);
        this.accountPeriodToDay = this.companyInfo.foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5fto.day;
        this.accountPeriodFromMonth = translate('month', this.companyInfo.foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5ffrom.month);
        this.accountPeriodFromDay = this.companyInfo.foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5ffrom.day;
        this.termsOfAccountPublication = translate('terms_of_account_publication', this.companyInfo.foreignx5fcompanyx5fdetails.accountingx5frequirement.termsx5fofx5faccountx5fpublication);
        this.foreignAccountType = translate('foreign_account_type', this.companyInfo.foreignx5fcompanyx5fdetails.accountingx5frequirement.foreignx5faccountx5ftype);
      }
      
    } else if (error) {
      this.testError = "Error!";
      console.log(error);
    }
  }

  //callout to getFilingHistory to obtain data
  @api filingHistoryColumns = [
    { label: 'Date', fieldName: 'z0date', type: 'date'},
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
    {label: '35', value: '35'},
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
    { label: 'Appointed On', fieldName: 'appointedx5fon', type: 'date'},
    { label: 'Resigned On', fieldName: 'resignedx5fon', type: 'date'},
  ];
  @track officerData = [];
  @track filteredOfficerData = [];
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
  @api officerId;

  @api officersFilter = [
    {label: '5', value: '5'},
    {label: '10', value: '10'},
    {label: '15', value: '15'},
    {label: '20', value: '20'},
    {label: '25', value: '25'},
    {label: '30', value: '30'},
    {label: '35', value: '35'},
  ];
  @api officersPerPage = 10;
  @api officerStartIndex = 0;
  @api totalOfficerPageCount;
  @api officerPageNumber = 1;
  @api officerIsFirstPage;
  @api officerIsLastPage;
  
  handleOfficerFilterChange(event) {
    this.officerPageNumber = 1;
    this.officerStartIndex = 0;
    this.officersPerPage = event.detail.value;
    }

  handleOfficerNextPage(event) {
    if(this.officerPageNumber < this.totalOfficerPageCount){
      this.officerPageNumber = this.officerPageNumber + 1;
      this.officerStartIndex =  (this.officerPageNumber-1)*this.officersPerPage;
    }
  }

  handleOfficerPrevPage(event) {
    if(this.officerPageNumber > 1){
      this.officerPageNumber = this.officerPageNumber - 1;
      this.officerStartIndex =  (this.officerPageNumber-1)*this.officersPerPage;
    }
  }

  updateOfficerPageButtons() {
    if(this.officerPageNumber === 1 ){
      this.officerIsFirstPage = true;
    } else {
      this.officerIsFirstPage = false;
    }
    if (this.officerPageNumber >= this.totalOfficerPageCount){
      this.officerIsLastPage = true;
    } else {
      this.officerIsLastPage = false;
    }
  }

  showOfficerDetails(event){
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
    if (event.detail.row.datex5fofx5fbirth !== null ) {
      if (event.detail.row.datex5fofx5fbirth.day == null) {
        this.officerDateOfBirth = translate("month" , event.detail.row.datex5fofx5fbirth.month) + " " + String(event.detail.row.datex5fofx5fbirth.year);
      } else {
        this.officerDateOfBirth = translate("month" , event.detail.row.datex5fofx5fbirth.month) + " " + String(event.detail.row.datex5fofx5fbirth.day) + " " + String(event.detail.row.datex5fofx5fbirth.year);
      }
    } else {
      this.officerDateOfBirth = null;
    };
    this.officerCountryOfResidence = event.detail.row.countryx5fofx5fresidence;
    this.officerContactDetails = event.detail.row.contactx5fdetails;
    this.officerAppointedOn = event.detail.row.appointedx5fon;
    this.officerAddress = event.detail.row.address.region + event.detail.row.address.addressx5flinex5f1 + event.detail.row.address.addressx5flinex5f2 + event.detail.row.address.pox5fbox + event.detail.row.address.postalx5fcode + event.detail.row.address.locality + event.detail.row.address.country + event.detail.row.address.carex5fof;
    this.officerId = event.detail.row.links.officer.appointments.slice( 10, 37);
  };

  backOfficerTable(event){
    this.showOfficerCard = false;
  }
  
  @api showOfficerFiltered;
  @api filteredOfficerCount;
  @api totalFilteredOfficerPageCount;
  
  
  toggleOfficers(event){
    this.showOfficerFiltered = event.target.checked;
    this.officerStartIndex = 0;
    this.officerPageNumber = 1;
  };

  @wire(getCompanyOfficersList, {compNumber: '$cNum', itemsPerPage: '$officersPerPage', startIndex: '$officerStartIndex'})
  wiredOfficerList({data, error}) {
    if (data) {
      this.officerData = JSON.parse(data).items;
      this.filteredOfficerData = this.officerData.filter(officer => officer.resignedx5fon == null);
      this.filteredOfficerCount = this.filteredOfficerData.length;
      this.totalFilteredOfficerPageCount = Math.ceil(this.filteredOfficerCount/this.officersPerPage);
      this.officerTotalCount = Math.trunc(JSON.parse(data).totalx5fresults);
      this.officerActiveCount = JSON.parse(data).totalx5fresults - JSON.parse(data).resignedx5fcount;
      this.officerResignedCount = Math.trunc(JSON.parse(data).resignedx5fcount);
      this.totalOfficerPageCount = Math.ceil(this.officerTotalCount/this.officersPerPage);
      this.updateOfficerPageButtons();
      for (const obj of this.officerData) {
        obj.officerx5frole = translate('officer_role', obj.officerx5frole);
        obj.nameURL = "https://find-and-update.company-information.service.gov.uk/" + obj.links.officer.appointments;
      };
    } else if (error) {
      this.testError = "Officer List Error!";
    }
  }
    //callout to getOfficerAppointments to obtain data
    @api officerAppointmentsColumns = [
      { label: 'Company Name', fieldName: 'companyURL', type: 'url',
        cellAttributes: {
          iconName: 'utility:new_window',
          iconPosition: 'right',
        },  
        typeAttributes: {
            label: {
              fieldName: 'companyName'
            },
            tooltip: "View in Companies House website",
          }
        },
      { label: 'Company Status', fieldName: 'companyStatus' },
      { label: 'Role', fieldName: 'officerx5frole'},
      { label: 'Appointed On', fieldName: 'appointedx5fon'},
      { label: 'Resigned On', fieldName: 'resignedx5fon'},
    ];
    @api officerAppointmentsData = [];

    @wire(getOfficerAppointments, {officerId: '$officerId'})
    wiredofficerAppointments({error, data}) {
      if (data) {
        //console.log(data);
        this.officerAppointmentsData = JSON.parse(data).items;
        for (const obj of this.officerAppointmentsData) {
          obj.officerx5frole = translate('officer_role', obj.officerx5frole);
          obj.companyName = obj.appointedx5fto.companyx5fname;
          obj.companyStatus = translate('company_status', obj.appointedx5fto.companyx5fstatus);
          obj.companyURL = 'https://find-and-update.company-information.service.gov.uk' + obj.links.company;
        };
      } else if (error) {
        this.testError = "Officer Appoints Error!";
      }
    }

  //callout to getPersonsWithSignificantControlList to obtain data
  @api pscData = [];
  @api pscDateofBirth;
  @api pscName;
  @api pscKind
  @wire(getPersonsWithSignificantControlList, {compNumber: '$cNum'})
  wiredPscList({error, data}) {
    if (data) {
      //console.log(data);
      this.pscData = JSON.parse(data).items;
      for (const obj of this.pscData) {
        obj.kind = translate('pscKind', obj.kind);
        if (obj.datex5fofx5fbirth !== null ) {
          if (obj.datex5fofx5fbirth.day == null) {
            obj.pscDateofBirth = translate("month" , obj.datex5fofx5fbirth.month) + " " + String(obj.datex5fofx5fbirth.year);
          } else {
            obj.pscDateofBirth = translate("month" , obj.datex5fofx5fbirth.month) + " " + String(obj.datex5fofx5fbirth.day) + " " + String(obj.datex5fofx5fbirth.year);
          }
        } if (obj.address.address == null) {
          obj.address == null
        }
      }
      //console.log(JSON.stringify(pscdata));
    } else if (error) {
      this.testError = "PSC List error!";
    }
  }

  //callout to getCompanyUKEstablishments to obtain data
  @api ukEstablishmentsColumns = [
    { label: 'Company Name', fieldName: 'companyURL', type: 'url',
        cellAttributes: {
          iconName: 'utility:new_window',
          iconPosition: 'right',
        },  
        typeAttributes: {
            label: {
              fieldName: 'companyName'
            },
            tooltip: "View in Companies House website",
          }
        },
    { label: 'Company Number', fieldName: 'companyx5fnumber'},
    { label: 'Company Status', fieldName: 'companyx5fstatus'},
    { label: 'Locality', fieldName: 'locality'},
  ];
  @api ukEstablishmentsData = [];
  @wire(getCompanyUKEstablishments, {compNumber: '$cNum'})
  wiredUKEstablishments({error, data}) {
    if (data) {
      //console.log(data);
      this.ukEstablishmentsData = JSON.parse(data).items;
      for (const obj of this.ukEstablishmentsData) {
        obj.companyx5fstatus = translate('company_status', obj.companyx5fstatus);
        obj.companyName = obj.companyx5fname;
        obj.companyURL = 'https://find-and-update.company-information.service.gov.uk' + obj.links.company;
      };
    } else if (error) {
      this.testError = "UK Establishments Error!";
    }
  }

  //callout to getCompanyChargesList to obtain data
  @api chargesColumns = [
    { label: 'Details', fieldName: 'details', type: 'button', typeAttributes: { label: 'Details'}},
    { label: 'Description', fieldName: 'description' },
    { label: 'Delivered', fieldName: 'deliveredx5fon'},
    { label: 'Status', fieldName: 'status'},
    { label: 'Persons Entitled', fieldName: 'personsEntitled'},//Only showing first value, need to figure out how to show all
    { label: 'Description', fieldName: 'particularsDescription', wrapText: true},
  ];
  @api chargesData = [];

  @api transactionsColumns = [
    {label: 'Type', fieldName: 'filingType'},
    {label: 'Delivered', fieldName: 'deliveredx5fon' },
    { label: 'Filings', fieldName: 'filingURL', type: 'url',
        cellAttributes: {
          iconName: 'utility:new_window',
          iconPosition: 'right',
        },  
        typeAttributes: {
            label: "View/Download",
            tooltip: "View in Companies House website",
          }
        },
  ];
  @api transactionsData = [];

  @api showChargeCard;
  @api chargeAcquiredOn;
  @api chargeCode;
  @api chargeClassificationDescription;
  @api chargeClassificationType;
  @api chargeStatus;
  @api chargeDeliveredOn;
  @api chargeCreatedOn;
  @api chargeInsolvencyCases;
  @api chargeParticularsType;
  @api chargeParticularsDescription;
  @api chargeParticularsFloating;
  @api chargeParticularsFixed;
  @api chargeResolvedOn;
  @api chargeSatisfiedOn;
  @api chargeSecuredtype;
  @api chargeSecuredDescription;
  @api chargePersonsEntitled = [];
  @api chargeScottinhAlterations;
  @api chargeTransactions = [];

  showChargeDetails(event){
    //console.log(JSON.stringify(event.detail.row));
    this.showChargeCard = true;
    this.chargeAcquiredOn = event.detail.row.acquiredx5fon;
    this.chargeCode = event.detail.row.chargex5fcode;
    this.chargeClassificationDescription = event.detail.row.classification.description;
    this.chargeClassificationType = event.detail.row.classification.z0type;
    this.chargeStatus = event.detail.row.status
    this.chargeDeliveredOn = event.detail.row.deliveredx5fon;
    this.chargeCreatedOn = event.detail.row.createdx5fon;
    this.chargeInsolvencyCases = event.detail.row.insolvencyx5fcases;
    this.chargeParticularsType = translate('particular-description', event.detail.row.particulars.z0type);
    this.chargeParticularsDescription = event.detail.row.particulars.description;
    this.chargeParticularsFloating = event.detail.row.particulars.containsx5ffloatingx5fcharge;
    this.chargeParticularsFixed = event.detail.row.particulars.containsx5ffixedx5fcharge;
    this.chargeResolvedOn = event.detail.row.resolvedx5fon;
    this.chargeSatisfiedOn = event.detail.row.satisfiedx5fon;
    if (event.detail.row.securedx5fdetails !== null){
      this.chargeSecuredtype = translate('secured-details-description' , event.detail.row.securedx5fdetails.z0type);
      this.chargeSecuredDescription = event.detail.row.securedx5fdetails.description;
    } else {
      this.chargeSecuredtype = null;
      this.chargeSecuredDescription = null;
    };
    this.chargePersonsEntitled = event.detail.row.personsx5fentitled;
    this.chargeScottinhAlterations = event.detail.row.scottishx5falterations;
    this.transactionsData = event.detail.row.transactions;
    for (const obj of this.transactionsData){
      obj.filingURL = "https://beta.companieshouse.gov.uk" + obj.links.filing + "/document?format=pdf&download=0";
      obj.filingType = translate('filing_type', obj.filingx5ftype)
    }
  }

  backChargeTable(event){
    this.showChargeCard = false;
  }

  @api showChargesFiltered;
  toggleCharges(event){
    this.showChargesFiltered = event.target.checked;
  };

  @api totalCharges;
  @api satisfiedCharges;
  @api partiallySatisfiedCharges;
  @api filteredChargesData;
  @wire(getCompanyChargesList, {compNumber: '$cNum'})
  wiredCompanyCharges({error, data}) {
    if (data) {
      //console.log(data);
      this.totalCharges = JSON.parse(data).unfilteredx5fcount;
      this.satisfiedCharges = JSON.parse(data).satisfiedx5fcount;
      this.partiallySatisfiedCharges = JSON.parse(data).partx5fsatisfiedx5fcount;
      this.chargesData = JSON.parse(data).items;
      this.filteredChargesData = this.chargesData.filter(charge => charge.status === 'part-satisfied' || charge.status === 'outstanding');
      //console.log(filteredChargesData);
      for (const obj of this.chargesData) {
        obj.description = obj.classification.description;
        if (obj.satisfiedx5fon !== null){
          obj.status = translate('status', obj.status) + " " + obj.satisfiedx5fon;
        } else {
          obj.status = translate('status', obj.status);
        };
        obj.personsEntitled = obj.personsx5fentitled[0].name;
        obj.particularsDescription = obj.particulars.description;
      };
    } else if (error) {
      this.testError = "Company Charges Error!";
    }
  }

  //callout to getCompanyInsolvency to obtain data
  @api insolvencyData = []
  @api insolvencyName;
  @api insolvencyDates = [];
  @wire(getCompanyInsolvency, {compNumber: '$cNum'})
  wiredInsolvency({error, data}) {
    if (data) {
      //console.log(data);
      this.insolvencyData = JSON.parse(data).cases;
      console.log(JSON.stringify(insolvencyData))
      for (const obj of this.insolvencyData){
        obj.insolvencyName = "Case Number " + obj.z0number + " - " + translate('insolvency_case_type', obj.z0type);
        for (const obj2 of obj.practitioners){
          if (obj2.address.addressx5flinex5f1 !== null) {
            obj2.practitionerAddress = obj2.address.addressx5flinex5f1
          } if (obj2.address.addressx5flinex5f2 !== null) {
            obj2.practitionerAddress = obj2.practitionerAddress + ", " + obj2.address.addressx5flinex5f2
            } if (obj2.address.locality !== null) {
              obj2.practitionerAddress = obj2.practitionerAddress + ", " + obj2.address.locality
              } if (obj2.address.region !== null) {
                obj2.practitionerAddress = obj2.practitionerAddress + ", " + obj2.address.region
                } if (obj2.address.country !== null) {
                  obj2.practitionerAddress = obj2.practitionerAddress + ", " + obj2.address.country
                  } if (obj2.address.postalx5fcode !== null) {
                    obj2.practitionerAddress = obj2.practitionerAddress + ", " + obj2.address.postalx5fcode
                    }
        }
        for (const obj3 of obj.dates) {
          obj3.z0type = translate('insolvency_case_date_type', obj3.z0type);
        }
      }
      console.log(JSON.stringify(insolvencyData));
    } else if (error) {
      this.testError = "Insolvency Error!";
      console.log('Insolvency Error!')
    }
  }
  
  constructor() {
    super(); // Must be called first
    console.log('>>> cNum');
  }

}