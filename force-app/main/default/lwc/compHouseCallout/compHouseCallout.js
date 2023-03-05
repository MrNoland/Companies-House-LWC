/* eslint-disable @lwc/lwc/no-api-reassignments */
import { LightningElement, api, wire, track } from "lwc";
import translateCompany from "./translations_company";
import translatePSC from "./translations_psc";
import translateCharges from "./translations_charges";
import translateFilings1 from "./translations_filings1";
import translateFilings2 from "./translations_filings2";
//import retrieveFieldValue from "@salesforce/apex/retrieveFieldValue.retrieveFieldValue";
import getCompanyInfo from "@salesforce/apex/compHouseCallout.getCompanyInfo";
import getFilingHistory from "@salesforce/apex/compHouseCallout.getFilingHistory";
import getCompanyOfficersList from "@salesforce/apex/compHouseCallout.getCompanyOfficersList";
import getOfficerAppointments from "@salesforce/apex/compHouseCallout.getOfficerAppointments";
import getPersonsWithSignificantControlList from "@salesforce/apex/compHouseCallout.getPersonsWithSignificantControlList";
import getCompanyUKEstablishments from "@salesforce/apex/compHouseCallout.getCompanyUKEstablishments";
import getCompanyChargesList from "@salesforce/apex/compHouseCallout.getCompanyChargesList";
import getCompanyInsolvency from "@salesforce/apex/compHouseCallout.getCompanyInsolvency";
import CH_Icon from "@salesforce/resourceUrl/CH_Logo";

export default class CompaniesHouse extends LightningElement {
  //Set Logo to variable
  CH_Icon = CH_Icon;
  
  //Pull in Component Config value
  @api cNum;
  @api searchQuery;
  @api syncFlowAPI;
  @api recordId;
  @api hideSyncTab;

  //Set company info field variables
  @api unauthorizedApiKey;
  @api invalidCHNumber;
  @api successCHNumber;
  @api companyInfo;
  @api companyName;
  @api companyNumber;
  @api companyStatus;
  @api companyOfficeAddress = "";
  @api companyType;
  @api dateOfCreation;
  @api dateOfCessation;
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
  @api statusBadgeTheme;
  @api previosNamesData = [];
  @api previousNamesColumns = [
    { label: "Previous Names", fieldName: "name", hideDefaultActions: true },
    {
      label: "Effective",
      fieldName: "effectivex5ffrom",
      type: "date",
      hideDefaultActions: true
    },
    {
      label: "Ceased",
      fieldName: "ceasedx5fon",
      type: "date",
      hideDefaultActions: true
    }
  ];

  //callout to obtain the company details and assign variables
  @wire(getCompanyInfo, { compNumber: "$cNum" })
  wiredCompany({ error, data }) {
    if (data) {
      //console.log(data);
      this.successCHNumber = true;
      this.companyInfo = JSON.parse(data);
      this.companyURL =
        "https://find-and-update.company-information.service.gov.uk" +
        this.companyInfo.links.self;
      this.companyName = this.companyInfo.companyx5fname;
      this.companyNumber = this.companyInfo.companyx5fnumber;
      this.companyStatus = translateCompany(
        "company_status",
        this.companyInfo.companyx5fstatus
      );
      if (
        this.companyStatus === "Active" ||
        this.companyStatus === "Open" ||
        this.companyStatus === "Registered"
      ) {
        this.statusBadgeTheme = "slds-theme_success";
      } else {
        this.statusBadgeTheme = "slds-theme_error";
      }

      if (
        this.companyInfo.registeredx5fofficex5faddress.addressx5flinex5f1 !==
        null
      ) {
        this.companyOfficeAddress =
          this.companyInfo.registeredx5fofficex5faddress.addressx5flinex5f1;
      }
      if (
        this.companyInfo.registeredx5fofficex5faddress.addressx5flinex5f2 !==
        null
      ) {
        this.companyOfficeAddress =
          this.companyOfficeAddress +
          ", " +
          this.companyInfo.registeredx5fofficex5faddress.addressx5flinex5f2;
      }
      if (this.companyInfo.registeredx5fofficex5faddress.premises !== null) {
        this.companyOfficeAddress =
          this.companyOfficeAddress +
          ", " +
          this.companyInfo.registeredx5fofficex5faddress.premises;
      }
      if (this.companyInfo.registeredx5fofficex5faddress.carex5fof !== null) {
        this.companyOfficeAddress =
          this.companyOfficeAddress +
          ", " +
          this.companyInfo.registeredx5fofficex5faddress.carex5fof;
      }
      if (this.companyInfo.registeredx5fofficex5faddress.pox5fbox !== null) {
        this.companyOfficeAddress =
          this.companyOfficeAddress +
          ", " +
          this.companyInfo.registeredx5fofficex5faddress.pox5fbox;
      }
      if (this.companyInfo.registeredx5fofficex5faddress.locality !== null) {
        this.companyOfficeAddress =
          this.companyOfficeAddress +
          ", " +
          this.companyInfo.registeredx5fofficex5faddress.locality;
      }
      if (this.companyInfo.registeredx5fofficex5faddress.region !== null) {
        this.companyOfficeAddress =
          this.companyOfficeAddress +
          ", " +
          this.companyInfo.registeredx5fofficex5faddress.region;
      }
      if (this.companyInfo.registeredx5fofficex5faddress.country !== null) {
        this.companyOfficeAddress =
          this.companyOfficeAddress +
          ", " +
          this.companyInfo.registeredx5fofficex5faddress.country;
      }
      if (
        this.companyInfo.registeredx5fofficex5faddress.postalx5fcode !== null
      ) {
        this.companyOfficeAddress =
          this.companyOfficeAddress +
          ", " +
          this.companyInfo.registeredx5fofficex5faddress.postalx5fcode;
      }
      this.companyType = translateCompany(
        "company_type",
        this.companyInfo.z0type
      );
      this.dateOfCreation = this.companyInfo.datex5fofx5fcreation;
      this.dateOfCessation = this.companyInfo.datex5fofx5fcessation;
      this.canFile = this.companyInfo.canx5ffile;
      this.hasBeenLiquidated = this.companyInfo.hasx5fbeenx5fliquidated;
      this.hasCharges = this.companyInfo.hasx5fcharges;
      this.hasInsolvencyHistory = this.companyInfo.hasx5finsolvencyx5fhistory;
      this.isCommunityInterestCompany =
        this.companyInfo.isx5fcommunityx5finterestx5fcompany;
      this.jurisdiction = translateCompany(
        "jurisdiction",
        this.companyInfo.jurisdiction
      );
      this.registeredOfficeinDispute =
        this.companyInfo.registeredx5fofficex5fisx5finx5fdispute;
      this.undeliverableRegOfficeAddress =
        this.companyInfo.undeliverablex5fregisteredx5fofficex5faddress;

      this.accounts = this.companyInfo.accounts;
      if (this.companyInfo.accounts !== null) {
        this.accountsOverdue = this.companyInfo.accounts.overdue;
        this.nextAccountsTo = this.companyInfo.accounts.nextx5fmadex5fupx5fto;
        this.nextAccuontsDue = this.companyInfo.accounts.nextx5fdue;
        this.lasAccountsTo =
          this.companyInfo.accounts.lastx5faccounts.madex5fupx5fto;
      }

      this.confirmationStatement = this.companyInfo.confirmationx5fstatement;
      if (this.companyInfo.confirmationx5fstatement !== null) {
        this.statementsOverdue =
          this.companyInfo.confirmationx5fstatement.overdue;
        this.nextStatementTo =
          this.companyInfo.confirmationx5fstatement.nextx5fmadex5fupx5fto;
        this.nextStatementDue =
          this.companyInfo.confirmationx5fstatement.nextx5fdue;
        this.lastStatememtTo =
          this.companyInfo.confirmationx5fstatement.lastx5fmadex5fupx5fto;
      }

      this.sicCodes = this.companyInfo.sicx5fcodes;
      if (this.sicCodes !== null) {
        for (let x = 0; x < this.sicCodes.length; x++) {
          this.sicCodes[x] =
            this.sicCodes[x] +
            " - " +
            translateCompany("sic_descriptions", this.sicCodes[x]);
        }
      }

      this.previosNamesData = this.companyInfo.previousx5fcompanyx5fnames;
      this.foreignCompany = this.companyInfo.foreignx5fcompanyx5fdetails;
      if (this.companyInfo.foreignx5fcompanyx5fdetails !== null) {
        this.registrationNumber =
          this.companyInfo.foreignx5fcompanyx5fdetails.registrationx5fnumber;
        this.parentRegistry =
          this.companyInfo.foreignx5fcompanyx5fdetails.originatingx5fregistry.name;
        this.incorporatedIn =
          this.companyInfo.foreignx5fcompanyx5fdetails.originatingx5fregistry.country;
        this.creditFinanceInstitution =
          this.companyInfo.foreignx5fcompanyx5fdetails.isx5fax5fcreditx5ffinancex5finstitution;
        this.governedBy =
          this.companyInfo.foreignx5fcompanyx5fdetails.governedx5fby;
        this.foreignCompanyType =
          this.companyInfo.foreignx5fcompanyx5fdetails.companyx5ftype;
        this.foreignCompanyLegalForm =
          this.companyInfo.foreignx5fcompanyx5fdetails.legalx5fform;
        this.businessActivity =
          this.companyInfo.foreignx5fcompanyx5fdetails.businessx5factivity;
        this.mustFilewithin =
          this.companyInfo.foreignx5fcompanyx5fdetails.accounts.mustx5ffilex5fwithin.months;
        this.accountPeriodToMonth = translateCompany(
          "month",
          this.companyInfo.foreignx5fcompanyx5fdetails.accounts
            .accountx5fperiodx5fto.month
        );
        this.accountPeriodToDay =
          this.companyInfo.foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5fto.day;
        this.accountPeriodFromMonth = translateCompany(
          "month",
          this.companyInfo.foreignx5fcompanyx5fdetails.accounts
            .accountx5fperiodx5ffrom.month
        );
        this.accountPeriodFromDay =
          this.companyInfo.foreignx5fcompanyx5fdetails.accounts.accountx5fperiodx5ffrom.day;
        this.termsOfAccountPublication = translateCompany(
          "terms_of_account_publication",
          this.companyInfo.foreignx5fcompanyx5fdetails.accountingx5frequirement
            .termsx5fofx5faccountx5fpublication
        );
        this.foreignAccountType = translateCompany(
          "foreign_account_type",
          this.companyInfo.foreignx5fcompanyx5fdetails.accountingx5frequirement
            .foreignx5faccountx5ftype
        );
      }
    } else if (error) {
      console.log(error.body.message);
      if (error.body.message === "401: Unauthorized API Key") {
        this.unauthorizedApiKey = true;
      } else if (error.body.message === "404: Company not found") {
        this.invalidCHNumber = true;
      }
    }
  }

  //callout to getFilingHistory to obtain data
  @api filingHistoryColumns = [
    { label: "Date", fieldName: "z0date", type: "date-local" },
    { label: "Category", fieldName: "category" },
    { label: "Description", fieldName: "description" },
    {
      label: "Documents",
      fieldName: "pages",
      type: "url",
      cellAttributes: {
        iconName: "utility:download",
        iconPosition: "right",
        iconAlternativeText: "View/Download"
      },
      typeAttributes: {
        label: {
          fieldName: "barcode"
        },
        tooltip: "View/Download Document"
      }
    }
  ];

  @api filingTabName;
  @api filingHideTab;
  @api viewDownload;
  @api filingHistoryData = [];
  @api filingHistoryCount;
  @api categoryFilters = [
    { label: "All", value: "" },
    { label: "Accounts", value: "accounts" },
    { label: "Address", value: "address" },
    {
      label: "Confirmation Statements / Annual Returns",
      value: "annual-return"
    },
    { label: "Capital", value: "capital" },
    { label: "Change of Name", value: "change-of-name" },
    { label: "Charges", value: "charges" },
    { label: "Incorporation", value: "incorporation" },
    { label: "Liquidation", value: "liquidation" },
    { label: "Miscellaneous", value: "miscellaneous" },
    { label: "Mortgage", value: "mortgage" },
    { label: "Officers", value: "officers" },
    { label: "Resolution", value: "resolution" },
    { label: "Other", value: "other" }
  ];
  @api itemsFilter = [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "15", value: "15" },
    { label: "20", value: "20" },
    { label: "25", value: "25" },
    { label: "30", value: "30" },
    { label: "35", value: "35" }
  ];
  @api categoryFilter = [];
  @api itemsPerPage = 10;
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

  handleNextPage() {
    if (this.pageNumber < this.totalPageCount) {
      this.pageNumber = this.pageNumber + 1;
      this.startIndex = (this.pageNumber - 1) * this.itemsPerPage;
    }
  }

  handlePrevPage() {
    if (this.pageNumber > 1) {
      this.pageNumber = this.pageNumber - 1;
      this.startIndex = (this.pageNumber - 1) * this.itemsPerPage;
    }
  }

  updatePageButtons() {
    if (this.pageNumber === 1) {
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
    }
    if (this.pageNumber >= this.totalPageCount) {
      this.isLastPage = true;
    } else {
      this.isLastPage = false;
    }
  }

  @api serviceKey;
  @wire(getFilingHistory, {
    compNumber: "$cNum",
    categoryFilter: "$categoryFilter",
    itemsPerPage: "$itemsPerPage",
    startIndex: "$startIndex"
  })
  wiredFilingList({ error, data }) {
    if (data) {
      //console.log(data);
      this.filingHistoryCount = JSON.parse(data).totalx5fcount;
      this.totalPageCount = Math.ceil(
        this.filingHistoryCount / this.itemsPerPage
      );
      this.updatePageButtons();
      this.filingHistoryData = JSON.parse(data).items;
      this.filingTabName = "Filing History (" + this.filingHistoryCount + ")";
      this.filingHistoryData.forEach((filingHistoryData) => {
        if (filingHistoryData.barcode == null) {
          filingHistoryData.barcode = "No Barcode";
        }
        if (filingHistoryData.pages === 1) {
          filingHistoryData.barcode =
            filingHistoryData.barcode +
            " (" +
            filingHistoryData.pages +
            " page)";
        } else {
          filingHistoryData.barcode =
            filingHistoryData.barcode +
            " (" +
            filingHistoryData.pages +
            " pages)";
        }
        filingHistoryData.pages =
          "https://beta.companieshouse.gov.uk" +
          filingHistoryData.links.self +
          "/document?format=pdf&download=0";
        filingHistoryData.category = translateFilings1(
          "filing_category",
          filingHistoryData.category
        );
        if (
          translateFilings2("description", filingHistoryData.description) ==
          null
        ) {
          filingHistoryData.description = translateFilings1(
            "description",
            filingHistoryData.description
          );
        } else {
          filingHistoryData.description = translateFilings2(
            "description",
            filingHistoryData.description
          );
        }

        //Insert the Description Values into the translated filing description (e.g. dates). Each of the fields in the Description Values object had to be coded in the OAS Spec
        if (filingHistoryData.descriptionx5fvalues !== null) {
          for (const [key, value] of Object.entries(
            filingHistoryData.descriptionx5fvalues
          )) {
            if (`${value}` !== "null") {
              this.serviceKey = `${key}`;
              if (this.serviceKey !== "description") {
                this.serviceKey =
                  "{" + this.serviceKey.replace(/x5f/g, "_") + "}";
              }
              if (filingHistoryData.description.includes(this.serviceKey)) {
                filingHistoryData.description =
                  filingHistoryData.description.replace(
                    this.serviceKey,
                    filingHistoryData.descriptionx5fvalues[`${key}`]
                  );
              }
            }
          }
        }
      });
    } else if (error) {
      this.filingHideTab = true;
      console.log(error.body.message);
    }
  }

  //callout to getCompanyOfficersList to obtain data
  @api officerColumns = [
    {
      label: "Details",
      fieldname: "details",
      type: "button",
      typeAttributes: { label: "Details" }
    },
    {
      label: "Name",
      fieldName: "nameURL",
      type: "url",
      cellAttributes: {
        iconName: "utility:new_window",
        iconPosition: "right"
      },
      typeAttributes: {
        label: {
          fieldName: "name"
        },
        tooltip: "View in Companies House website"
      }
    },
    { label: "Role", fieldName: "officerx5frole" },
    { label: "Nationality", fieldName: "nationality" },
    { label: "Appointed On", fieldName: "appointedx5fon", type: "date-local" },
    { label: "Resigned On", fieldName: "resignedx5fon", type: "date-local" }
  ];
  @track officerData = [];
  @track filteredOfficerData = [];
  @api showOfficerCard;
  @api officerFilter;
  @api officerActiveCount;
  @api officerResignedCount;
  @api officerTotalCount;
  @api officerTabName;
  @api officerHideTab;

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
  @api officerRegistrationNumber;
  @api officerPlaceRegistered;
  @api officerLegalForm;
  @api officerLegalAuthority;
  @api officerIdentificationType;

  @api officersFilter = [
    { label: "5", value: "5" },
    { label: "10", value: "10" },
    { label: "15", value: "15" },
    { label: "20", value: "20" },
    { label: "25", value: "25" },
    { label: "30", value: "30" },
    { label: "35", value: "35" }
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

  handleOfficerNextPage() {
    if (this.officerPageNumber < this.totalOfficerPageCount) {
      this.officerPageNumber = this.officerPageNumber + 1;
      this.officerStartIndex =
        (this.officerPageNumber - 1) * this.officersPerPage;
    }
  }

  handleOfficerPrevPage() {
    if (this.officerPageNumber > 1) {
      this.officerPageNumber = this.officerPageNumber - 1;
      this.officerStartIndex =
        (this.officerPageNumber - 1) * this.officersPerPage;
    }
  }

  updateOfficerPageButtons() {
    if (this.officerPageNumber === 1) {
      this.officerIsFirstPage = true;
    } else {
      this.officerIsFirstPage = false;
    }
    if (this.officerPageNumber >= this.totalOfficerPageCount) {
      this.officerIsLastPage = true;
    } else {
      this.officerIsLastPage = false;
    }
  }

  showOfficerDetails(event) {
    //console.log(event.detail.row)
    this.showOfficerCard = true;
    this.officerName = event.detail.row.name;
    this.officerResponsibilities = event.detail.row.responsibilities;
    this.officerResignedOn = event.detail.row.resignedx5fon;
    this.officerPrincipalAddress =
      event.detail.row.principalx5fofficex5faddress;
    this.officerRole = event.detail.row.officerx5frole;
    this.officerOccupation = event.detail.row.occupation;
    this.officerNationality = event.detail.row.nationality;
    //break apart the identification object
    if (event.detail.row.identification !== null) {
      this.officerRegistrationNumber =
        event.detail.row.identification.registrationx5fnumber;
      this.officerPlaceRegistered =
        event.detail.row.identification.placex5fregistered;
      this.officerLegalForm = event.detail.row.identification.legalx5fform;
      this.officerLegalAuthority =
        event.detail.row.identification.legalx5fauthority;
      this.officerIdentificationType = translateCompany(
        "identification_type",
        event.detail.row.identification.identificationx5ftype
      );
    } else {
      this.officerRegistrationNumber = null;
      this.officerPlaceRegistered = null;
      this.officerLegalForm = null;
      this.officerLegalAuthority = null;
      this.officerIdentificationType = null;
    }

    this.officerformerNames = event.detail.row.formerx5fnames;
    if (event.detail.row.datex5fofx5fbirth !== null) {
      if (event.detail.row.datex5fofx5fbirth.day == null) {
        this.officerDateOfBirth =
          translateCompany("month", event.detail.row.datex5fofx5fbirth.month) +
          " " +
          String(event.detail.row.datex5fofx5fbirth.year);
      } else {
        this.officerDateOfBirth =
          translateCompany("month", event.detail.row.datex5fofx5fbirth.month) +
          " " +
          String(event.detail.row.datex5fofx5fbirth.day) +
          " " +
          String(event.detail.row.datex5fofx5fbirth.year);
      }
    } else {
      this.officerDateOfBirth = null;
    }
    this.officerCountryOfResidence = event.detail.row.countryx5fofx5fresidence;
    this.officerContactDetails = event.detail.row.contactx5fdetails;
    this.officerAppointedOn = event.detail.row.appointedx5fon;
    this.officerAddress = event.detail.row.officerAddress;
    this.officerId = event.detail.row.links.officer.appointments.slice(10, 37);
    this.nameURL = event.detail.row.nameURL;
  }

  backOfficerTable() {
    this.showOfficerCard = false;
  }

  @api showOfficerFiltered;
  @api filteredOfficerCount;
  @api totalFilteredOfficerPageCount;

  toggleOfficers(event) {
    this.showOfficerFiltered = event.target.checked;
    this.officerStartIndex = 0;
    this.officerPageNumber = 1;
  }

  @wire(getCompanyOfficersList, {
    compNumber: "$cNum",
    itemsPerPage: "$officersPerPage",
    startIndex: "$officerStartIndex"
  })
  wiredOfficerList({ data, error }) {
    if (data) {
      //console.log(data);
      this.officerData = JSON.parse(data).items;
      this.filteredOfficerData = this.officerData.filter(
        (officer) => officer.resignedx5fon == null
      );
      this.filteredOfficerCount = this.filteredOfficerData.length;
      this.totalFilteredOfficerPageCount = Math.ceil(
        this.filteredOfficerCount / this.officersPerPage
      );
      this.officerTotalCount = Math.trunc(JSON.parse(data).totalx5fresults);
      this.officerActiveCount =
        JSON.parse(data).totalx5fresults - JSON.parse(data).resignedx5fcount;
      this.officerResignedCount = Math.trunc(JSON.parse(data).resignedx5fcount);
      this.totalOfficerPageCount = Math.ceil(
        this.officerTotalCount / this.officersPerPage
      );
      this.officerTabName = "Officers (" + this.officerTotalCount + ")";
      this.updateOfficerPageButtons();
      for (const obj of this.officerData) {
        obj.officerx5frole = translateCompany(
          "officer_role",
          obj.officerx5frole
        );
        obj.nameURL =
          "https://find-and-update.company-information.service.gov.uk/" +
          obj.links.officer.appointments;
        obj.officerAddress = "";
        if (obj.address.premises !== null) {
          obj.officerAddress = obj.address.premises + ", ";
        }
        if (obj.address.addressx5flinex5f1 !== null) {
          obj.officerAddress =
            obj.officerAddress + obj.address.addressx5flinex5f1;
        }
        if (obj.address.addressx5flinex5f2 !== null) {
          obj.officerAddress =
            obj.officerAddress + ", " + obj.address.addressx5flinex5f2;
        }
        if (obj.address.carex5fof !== null) {
          obj.officerAddress =
            obj.officerAddress + ", " + obj.address.carex5fof;
        }
        if (obj.address.pox5fbox !== null) {
          obj.officerAddress = obj.officerAddress + ", " + obj.address.pox5fbox;
        }
        if (obj.address.locality !== null) {
          obj.officerAddress = obj.officerAddress + ", " + obj.address.locality;
        }
        if (obj.address.region !== null) {
          obj.officerAddress = obj.officerAddress + ", " + obj.address.region;
        }
        if (obj.address.country !== null) {
          obj.officerAddress = obj.officerAddress + ", " + obj.address.country;
        }
        if (obj.address.postalx5fcode !== null) {
          obj.officerAddress =
            obj.officerAddress + ", " + obj.address.postalx5fcode;
        }
      }
      //console.log(JSON.stringify(officerData));
    } else if (error) {
      this.officerHideTab = true;
      console.log(error.body.message);
    }
  }
  //callout to getOfficerAppointments to obtain data
  @api officerAppointmentsColumns = [
    {
      label: "Company Name",
      fieldName: "companyURL",
      type: "url",
      cellAttributes: {
        iconName: "utility:new_window",
        iconPosition: "right"
      },
      typeAttributes: {
        label: {
          fieldName: "companyName"
        },
        tooltip: "View in Companies House website"
      }
    },
    { label: "Company Status", fieldName: "companyStatus" },
    { label: "Role", fieldName: "officerx5frole" },
    { label: "Appointed On", fieldName: "appointedx5fon", type: "date-local" },
    { label: "Resigned On", fieldName: "resignedx5fon", type: "date-local" }
  ];
  @api officerAppointmentsData = [];
  @api totalOfficerAppointments;

  @wire(getOfficerAppointments, { officerId: "$officerId" })
  wiredofficerAppointments({ error, data }) {
    if (data) {
      //console.log(data);
      this.officerAppointmentsData = JSON.parse(data).items;
      this.totalOfficerAppointments = JSON.parse(data).totalx5fresults;
      for (const obj of this.officerAppointmentsData) {
        obj.officerx5frole = translateCompany(
          "officer_role",
          obj.officerx5frole
        );
        obj.companyName = obj.appointedx5fto.companyx5fname;
        obj.companyStatus = translateCompany(
          "company_status",
          obj.appointedx5fto.companyx5fstatus
        );
        obj.companyURL =
          "https://find-and-update.company-information.service.gov.uk" +
          obj.links.company;
      }
    } else if (error) {
      console.log(error.body.message);
    }
  }

  //callout to getPersonsWithSignificantControlList to obtain data
  @api pscData = [];
  @api pscErrors = [];
  @api pscDateofBirth;
  @api pscName;
  @api pscKind;
  @api pscTotal;
  @api pscActive;
  @api pscCeased;
  @api pscTabName;
  @api pscHideTab;
  @api pscAddress;
  @wire(getPersonsWithSignificantControlList, { compNumber: "$cNum" })
  wiredPscList({ error, data }) {
    if (data) {
      //console.log(data);
      this.pscData = JSON.parse(data).items;
      this.pscActive = JSON.parse(data).activex5fcount;
      this.pscCeased = JSON.parse(data).ceasedx5fcount;
      this.pscTotal = JSON.parse(data).totalx5fresults;
      this.pscTabName = "PSC (" + this.pscTotal + ")";
      for (const obj of this.pscData) {
        obj.kind = translatePSC("pscKind", obj.kind);
        for (let x = 0; x < obj.naturesx5fofx5fcontrol.length; x++) {
          obj.naturesx5fofx5fcontrol[x] = translatePSC(
            "psc_short_description",
            obj.naturesx5fofx5fcontrol[x]
          );
        }
        if (obj.datex5fofx5fbirth !== null) {
          if (obj.datex5fofx5fbirth.day == null) {
            //console.log(JSON.stringify(obj));
            //month translations are in the translations_company.js file
            obj.pscDateofBirth =
              translateCompany("month", obj.datex5fofx5fbirth.month) +
              " " +
              String(obj.datex5fofx5fbirth.year);
          } else {
            obj.pscDateofBirth =
              translateCompany("month", obj.datex5fofx5fbirth.month) +
              " " +
              String(obj.datex5fofx5fbirth.day) +
              " " +
              String(obj.datex5fofx5fbirth.year);
          }
        }
        obj.pscAddress = "";
        if (obj.address.premises !== null) {
          obj.pscAddress = obj.address.premises + ", ";
        }
        if (obj.address.addressx5flinex5f1 !== null) {
          obj.pscAddress = obj.pscAddress + obj.address.addressx5flinex5f1;
        }
        if (obj.address.addressx5flinex5f2 !== null) {
          obj.pscAddress =
            obj.pscAddress + ", " + obj.address.addressx5flinex5f2;
        }
        if (obj.address.carex5fof !== null) {
          obj.pscAddress = obj.pscAddress + ", " + obj.address.carex5fof;
        }
        if (obj.address.pox5fbox !== null) {
          obj.pscAddress = obj.pscAddress + ", " + obj.address.pox5fbox;
        }
        if (obj.address.locality !== null) {
          obj.pscAddress = obj.pscAddress + ", " + obj.address.locality;
        }
        if (obj.address.region !== null) {
          obj.pscAddress = obj.pscAddress + ", " + obj.address.region;
        }
        if (obj.address.country !== null) {
          obj.pscAddress = obj.pscAddress + ", " + obj.address.country;
        }
        if (obj.address.postalx5fcode !== null) {
          obj.pscAddress = obj.pscAddress + ", " + obj.address.postalx5fcode;
        }
      }
    } else if (error) {
      this.pscHideTab = true;
      console.log(error.body.message);
    }
  }

  //callout to getCompanyUKEstablishments to obtain data
  //When no UK Establishments are found, it returns an empty string of Items instead of an error
  @api ukEstablishmentsColumns = [
    {
      label: "Company Name",
      fieldName: "companyURL",
      type: "url",
      cellAttributes: {
        iconName: "utility:new_window",
        iconPosition: "right"
      },
      typeAttributes: {
        label: {
          fieldName: "companyName"
        },
        tooltip: "View in Companies House website"
      }
    },
    { label: "Company Number", fieldName: "companyx5fnumber" },
    { label: "Company Status", fieldName: "companyx5fstatus" },
    { label: "Locality", fieldName: "locality" }
  ];
  @api ukEstablishmentsData = [];
  @api ukEstablishmentsCount;
  @api hideukEstablishmentsTab;
  @api ukEstablishmentsTabName;
  @wire(getCompanyUKEstablishments, { compNumber: "$cNum" })
  wiredUKEstablishments({ error, data }) {
    if (data) {
      //console.log(data);
      this.ukEstablishmentsData = JSON.parse(data).items;
      this.ukEstablishmentsCount = this.ukEstablishmentsData.length;
      if (this.ukEstablishmentsCount === 0) {
        this.hideukEstablishmentsTab = true;
      } else {
        this.ukEstablishmentsTabName =
          "UK Establishments (" + this.ukEstablishmentsCount + ")";
      }
      for (const obj of this.ukEstablishmentsData) {
        obj.companyx5fstatus = translateCompany(
          "company_status",
          obj.companyx5fstatus
        );
        obj.companyName = obj.companyx5fname;
        obj.companyURL =
          "https://find-and-update.company-information.service.gov.uk" +
          obj.links.company;
      }
    } else if (error) {
      console.log(error.body.message);
    }
  }

  //callout to getCompanyChargesList to obtain data
  @api chargesColumns = [
    {
      label: "Details",
      fieldName: "details",
      type: "button",
      typeAttributes: { label: "Details" }
    },
    {
      label: "Description",
      fieldName: "chargeURL",
      type: "url",
      cellAttributes: {
        iconName: "utility:new_window",
        iconPosition: "right"
      },
      typeAttributes: {
        label: {
          fieldName: "description"
        },
        tooltip: "View in Companies House website"
      }
    },
    { label: "Delivered", fieldName: "deliveredx5fon", type: "date-local" },
    { label: "Status", fieldName: "status" },
    { label: "Persons Entitled", fieldName: "personsEntitled" } //Only showing first value, need to figure out how to show all
  ];
  @api chargesData = [];

  @api transactionsColumns = [
    { label: "Type", fieldName: "filingType" },
    { label: "Delivered", fieldName: "deliveredx5fon", type: "date-local" },
    {
      label: "Filings",
      fieldName: "filingURL",
      type: "url",
      cellAttributes: {
        iconName: "utility:new_window",
        iconPosition: "right"
      },
      typeAttributes: {
        label: "View/Download",
        tooltip: "View in Companies House website"
      }
    }
  ];
  @api transactionsData = [];

  @api chargeURL;
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
  @api chargeFloatingCoversAll;
  @api containsNegativePledge;
  @api chargeResolvedOn;
  @api chargeSatisfiedOn;
  @api chargeSecuredtype;
  @api chargeSecuredDescription;
  @api chargePersonsEntitled = [];
  @api chargeScottinhAlterations;
  @api chargeTransactions = [];

  showChargeDetails(event) {
    //console.log(JSON.stringify(event.detail.row));
    this.showChargeCard = true;
    this.chargeAcquiredOn = event.detail.row.acquiredx5fon;
    this.chargeCode = event.detail.row.chargex5fcode;
    this.chargeClassificationDescription =
      event.detail.row.classification.description;
    this.chargeClassificationType = event.detail.row.classification.z0type;
    this.chargeStatus = event.detail.row.status;
    this.chargeDeliveredOn = event.detail.row.deliveredx5fon;
    this.chargeCreatedOn = event.detail.row.createdx5fon;
    this.chargeInsolvencyCases = event.detail.row.insolvencyx5fcases;
    this.chargeParticularsType = translateCharges(
      "particular-description",
      event.detail.row.particulars.z0type
    );
    this.chargeParticularsDescription =
      event.detail.row.particulars.description;
    this.chargeParticularsFloating =
      event.detail.row.particulars.containsx5ffloatingx5fcharge;
    this.chargeParticularsFixed =
      event.detail.row.particulars.containsx5ffixedx5fcharge;
    this.chargeFloatingCoversAll =
      event.detail.row.particulars.floatingx5fchargex5fcoversx5fall;
    this.containsNegativePledge =
      event.detail.row.particulars.containsx5fnegativex5fpledge;
    this.chargeResolvedOn = event.detail.row.resolvedx5fon;
    this.chargeSatisfiedOn = event.detail.row.satisfiedx5fon;
    if (event.detail.row.securedx5fdetails !== null) {
      this.chargeSecuredtype = translateCharges(
        "secured-details-description",
        event.detail.row.securedx5fdetails.z0type
      );
      this.chargeSecuredDescription =
        event.detail.row.securedx5fdetails.description;
    } else {
      this.chargeSecuredtype = null;
      this.chargeSecuredDescription = null;
    }
    this.chargePersonsEntitled = event.detail.row.personsx5fentitled;
    this.chargeScottinhAlterations = event.detail.row.scottishx5falterations;
    this.transactionsData = event.detail.row.transactions;
    this.chargeURL = event.detail.row.chargeURL;
    for (const obj of this.transactionsData) {
      obj.filingURL =
        "https://beta.companieshouse.gov.uk" +
        obj.links.filing +
        "/document?format=pdf&download=0";
      obj.filingType = translateCharges("filing_type", obj.filingx5ftype);
    }
  }

  backChargeTable() {
    this.showChargeCard = false;
  }

  @api showChargesFiltered;
  toggleCharges(event) {
    this.showChargesFiltered = event.target.checked;
  }

  @api totalCharges;
  @api satisfiedCharges;
  @api partiallySatisfiedCharges;
  @api outstandingCharges;
  @api filteredChargesData;
  @api chargesTabName;
  @api chargesHideTab;
  @wire(getCompanyChargesList, { compNumber: "$cNum" })
  wiredCompanyCharges({ error, data }) {
    if (data) {
      //console.log(data);
      this.totalCharges = JSON.parse(data).unfilteredx5fcount;
      if (this.totalCharges === 0) {
        this.chargesHideTab = true;
      }
      this.chargesTabName = "Charges (" + this.totalCharges + ")";
      this.satisfiedCharges = JSON.parse(data).satisfiedx5fcount;
      this.partiallySatisfiedCharges =
        JSON.parse(data).partx5fsatisfiedx5fcount;
      this.outstandingCharges =
        this.totalCharges -
        this.satisfiedCharges -
        this.partiallySatisfiedCharges;
      this.chargesData = JSON.parse(data).items;
      this.filteredChargesData = this.chargesData.filter(
        (charge) =>
          charge.status === "part-satisfied" || charge.status === "outstanding"
      );
      for (const obj of this.chargesData) {
        obj.description = obj.classification.description;
        obj.chargeURL =
          "https://find-and-update.company-information.service.gov.uk/" +
          obj.links.self;
        if (obj.satisfiedx5fon !== null) {
          obj.status =
            translateCharges("status", obj.status) + " " + obj.satisfiedx5fon;
        } else {
          obj.status = translateCharges("status", obj.status);
        }
        obj.personsEntitled = obj.personsx5fentitled[0].name;
        obj.particularsDescription = obj.particulars.description;
      }
    } else if (error) {
      console.log(error.body.message);
    }
  }

  //callout to getCompanyInsolvency to obtain data
  //When there are no insolvency cases, its resuls in an error
  @api insolvencyData = [];
  @api insolvencyName;
  @api insolvencyDates = [];
  @api hideInsolvencyTab;
  @api insolvencyCount;
  @api insolvencyTabName;
  @wire(getCompanyInsolvency, { compNumber: "$cNum" })
  wiredInsolvency({ error, data }) {
    if (data) {
      //console.log(data);
      this.insolvencyData = JSON.parse(data).cases;
      this.insolvencycount = this.insolvencyData.length;
      this.insolvencyTabName = "Insolvency (" + this.insolvencycount + ")";
      for (const obj of this.insolvencyData) {
        obj.insolvencyName =
          "Case Number " +
          obj.z0number +
          " - " +
          translateCompany("insolvency_case_type", obj.z0type);
        for (const obj2 of obj.practitioners) {
          if (obj2.address.addressx5flinex5f1 !== null) {
            obj2.practitionerAddress = obj2.address.addressx5flinex5f1;
          }
          if (obj2.address.addressx5flinex5f2 !== null) {
            obj2.practitionerAddress =
              obj2.practitionerAddress + ", " + obj2.address.addressx5flinex5f2;
          }
          if (obj2.address.locality !== null) {
            obj2.practitionerAddress =
              obj2.practitionerAddress + ", " + obj2.address.locality;
          }
          if (obj2.address.region !== null) {
            obj2.practitionerAddress =
              obj2.practitionerAddress + ", " + obj2.address.region;
          }
          if (obj2.address.country !== null) {
            obj2.practitionerAddress =
              obj2.practitionerAddress + ", " + obj2.address.country;
          }
          if (obj2.address.postalx5fcode !== null) {
            obj2.practitionerAddress =
              obj2.practitionerAddress + ", " + obj2.address.postalx5fcode;
          }
        }
        for (const obj3 of obj.dates) {
          obj3.z0type = translateCompany(
            "insolvency_case_date_type",
            obj3.z0type
          );
        }
      }
    } else if (error) {
      this.hideInsolvencyTab = true;
      console.log(error.body.message);
    }
  }

  constructor() {
    super(); // Must be called first
    console.log(">>> cNum");
  }
}
