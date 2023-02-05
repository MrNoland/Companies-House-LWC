//Source: https://github.com/companieshouse/api-enumerations/blob/master/filing_history_descriptions.yml

const filingsTranslationTable2 = {
  description: {
    resolution: "Resolutions",
    "resolution-adopt-memorandum-and-articles":
      "Resolution of adoption of Memorandum and/or Articles of Association",
    "resolution-adopt-memorandum":
      "Resolution of adoption of Memorandum of Association",
    "resolution-adopt-articles":
      "Resolution of adoption of Articles of Association",
    "resolution-alteration-memorandum-and-articles":
      "Resolution of alteration of Memorandum and/or Articles of Association",
    "resolution-alteration-memorandum":
      "Resolution of alteration of Memorandum of Association",
    "resolution-alteration-articles":
      "Resolution of alteration of Articles of Association",
    "resolution-memorandum-and-articles":
      "Resolution of Memorandum and/or Articles of Association",
    "resolution-memorandum":
      "Resolution of Memorandum and/or Articles of Association",
    "resolution-re-registration": "Resolution of re-registration",
    "resolution-exemption":
      "Resolution of exemption from the Appointing of Auditors",
    "resolution-increase-capital":
      "Resolution of increasing authorised share capital",
    "resolution-decrease-capital":
      "Resolution of decreasing authorised share capital",
    "resolution-reduction-capital":
      "Resolution of reduction in issued share capital",
    "resolution-acquisition":
      "Resolution of financial assistance for the acquisition of shares",
    "resolution-purchase-shares":
      "Resolution of authority to purchase own shares out of capital",
    "resolution-purchase-number-shares":
      "Resolution of authority to purchase a number of shares",
    "resolution-securities": "Resolution of allotment of securities",
    "resolution-removal-pre-emption":
      "Resolution of removal of pre-emption rights",
    "resolution-varying-share-rights":
      "Resolution of varying share rights or name",
    "resolution-capitalisation":
      "Resolution of capitalisation or a bonus issue of shares",
    "resolution-change-of-name":
      "Change company name resolution on {resolution_date}",
    "resolution-redeem-shares": "Resolution of redemption of redeemable shares",
    "resolution-redonominate-shares": "Resolution to redenominate shares",
    "resolution-reduce-capital":
      "Resolution to reduce share capital on re-denomination",
    "certificate-change-of-name-limited-partnership":
      "Certificate of change of name of a Limited Partnership",
    "certificate-capital-iron-steel-act-reduction-issed-capital":
      "Certificate of Iron & Steel Act 1985 reduction of issued capital",
    "certificate-capital-reduction-issued-capital":
      "Certificate of reduction of issued capital",
    "certificate-capital-reduction-issued-capital-share-premium":
      "Certificate of reduction of issued capital and share premium",
    "certificate-capital-reduction-issued-capital-share-premium-cancellation-share-premiumn":
      "Certificate of reduction of issued capital and share premium and cancellation of share premium",
    "certificate-capital-reduction-issued-capital-cancellation-share-premium-cancellation-capital-redemption-reserve":
      "Certificate of reduction of issued capital and share premium and cancellation of share premium and capital redemption reserve",
    "certificate-capital-reduction-share-premium":
      "Certificate of reduction of share premium",
    "certificate-capital-reduction-share-premium-cancellation-capital-redemption-reserve":
      "Certificate of reduction of share premium and cancellation of capital redemption reserve",
    "certificate-capital-cancellation-share-premium-account":
      "Certificate of cancellation of share premium account",
    "certificate-re-registration-change-of-name":
      "Certificate of re-registration and or change of name",
    "certificate-re-registration-unlimited-to-limited":
      "Certificate of re-registration from Unlimited to Limited",
    "certificate-re-registration-public-limited-company-to-private":
      "Certificate of re-registration from Public Limited Company to Private",
    "certificate-change-of-name-re-registration-public-limited-company-to-private":
      "Certificate of change of name and re-registration from Public Limited Company to Private",
    "certificate-change-of-name-re-registration-to-limited":
      "Certificate of change of name and re-registration to Limited",
    "certificate-re-registration-old-public-company-to-public-limited-company":
      "Certificate of re-registration of an Old Public Company to Public Limited Company",
    "certificate-change-of-name-re-registration-old-public-company-to-public-limited-company":
      "Certificate of change of name and re-registration from old Public Company to Public Limited Company",
    "certificate-re-registration-limited-to-unlimited":
      "Certificate of re-registration from Limited to Unlimited",
    "certificate-change-of-name-re-registration-to-unlimited":
      "Certificate of change of name and re-registration to Unlimited",
    "certificate-re-registration-private-to-public-limited-company":
      "Certificate of re-registration from Private to Public Limited Company",
    "certificate-re-registration-unlimited-to-public-limited-company":
      "Certificate of re-registration from Unlimited to Public Limited Company",
    "certificate-change-of-name-re-registration-private-to-public-limited-company":
      "Certificate of change of name and re-registration from Private to Public Limited Company",
    "certificate-authorisation-to-commence-business-borrow":
      "Certificate of authorisation to commence business and borrow",
    "certificate-re-registration-old-public-company-to-private-limited-company":
      "Certificate of re-registration of an Old Public Company to Private",
    "certificate-incorporation-foreign-private-act":
      "Certificate of foreign incorporation - Private Act",
    "certificate-incorporation": "Certificate of Incorporation",
    certificate: "Certificate",
    "certificate-registration-limited-partnership":
      "Certificate of registration of a Limited Partnership",
    "certificate-registration-friendly-society":
      "Certificate of registration of a Friendly Society",
    "certificate-change-of-name-company": "Certificate of change of name",
    "gazette-filings-brought-up-to-date":
      "Compulsory strike-off action has been discontinued",
    "gazette-notice-voluntary": "First Gazette notice for voluntary strike-off",
    "gazette-dissolved-voluntary":
      "Final Gazette dissolved via voluntary strike-off",
    "gazette-notice-compulsary":
      "First Gazette notice for compulsory strike-off",
    "gazette-notice-compulsory":
      "First Gazette notice for compulsory strike-off",
    "gazette-dissolved-compulsary":
      "Final Gazette dissolved via compulsory strike-off",
    "gazette-dissolved-compulsory":
      "Final Gazette dissolved via compulsory strike-off",
    miscellaneous: "Miscellaneous",
    "application-to-court-to-cancel-bearer-shares":
      "Application to court to cancel bearer shares",
    "court-order": "Court order",
    "bona-vacantia-company": "Bona Vacantia disclaimer",
    "bona-vacantia-limited-liability-partnership": "Bona Vacantia disclaimer",
    "administrative-restoration-company":
      "Administrative restoration application",
    "administrative-restoration-limited-liability-partnership":
      "Administrative restoration application",
    "accounts-with-accounts-type-dormant":
      "Accounts for a dormant company made up to {made_up_date}",
    "accounts-with-accounts-type-full":
      "Full accounts made up to {made_up_date}",
    "accounts-with-accounts-type-full-group":
      "Full group accounts made up to {made_up_date}",
    "accounts-with-accounts-type-initial":
      "Initial accounts made up to {made_up_date}",
    "accounts-with-accounts-type-interim":
      "Interim accounts made up to {made_up_date}",
    "accounts-with-accounts-type-group":
      "Group of companies' accounts made up to {made_up_date}",
    "accounts-with-accounts-type-medium":
      "Accounts for a medium company made up to {made_up_date}",
    "accounts-with-accounts-type-medium-group":
      "Group accounts for a medium company made up to {made_up_date}",
    "accounts-with-accounts-type-small":
      "Accounts for a small company made up to {made_up_date}",
    "accounts-with-accounts-type-small-group":
      "Group accounts for a small company made up to {made_up_date}",
    "accounts-with-accounts-type-micro-entity":
      "Micro company accounts made up to {made_up_date}",
    "accounts-with-accounts-type-partial-exemption":
      "Partial exemption accounts made up to {made_up_date}",
    "accounts-with-accounts-type-total-exemption-full":
      "Total exemption full accounts made up to {made_up_date}",
    "accounts-with-accounts-type-total-exemption-small":
      "Total exemption small company accounts made up to {made_up_date}",
    "accounts-with-accounts-type-audit-exemption-subsiduary":
      "Audit exemption subsidiary accounts made up to {made_up_date}",
    "accounts-with-made-up-date": "Accounts made up to {made_up_date}",
    accounts: "Accounts",
    "accounts-amended-with-accounts-type-dormant":
      "Amended accounts for a dormant company made up to {made_up_date}",
    "accounts-amended-with-accounts-type-full":
      "Amended full accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-full-group":
      "Amended full group accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-initial":
      "Amended initial accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-interim":
      "Amended interim accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-group":
      "Amended group of companies' accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-medium":
      "Amended accounts for a medium company made up to {made_up_date}",
    "accounts-amended-with-accounts-type-medium-group":
      "Amended group accounts for a medium company made up to {made_up_date}",
    "accounts-amended-with-accounts-type-small":
      "Amended accounts for a small company made up to {made_up_date}",
    "accounts-amended-with-accounts-type-small-group":
      "Amended group accounts for a small company made up to {made_up_date}",
    "accounts-amended-with-accounts-type-micro-entity":
      "Amended micro company accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-partial-exemption":
      "Amended partial exemption accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-total-exemption-full":
      "Amended total exemption full accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-total-exemption-small":
      "Amended total exemption small company accounts made up to {made_up_date}",
    "accounts-amended-with-accounts-type-audit-exemption-subsiduary":
      "Amended audit exemption subsidiary accounts made up to {made_up_date}",
    "accounts-amended-with-made-up-date":
      "Amended accounts made up to {made_up_date}",
    "accounts-amended": "Amended accounts",
    "change-account-reference-date-company-previous-extended":
      "Previous accounting period extended from {made_up_date} to {new_date}",
    "change-account-reference-date-company-previous-shortened":
      "Previous accounting period shortened from {made_up_date} to {new_date}",
    "change-account-reference-date-company-current-extended":
      "Current accounting period extended from {made_up_date} to {new_date}",
    "change-account-reference-date-company-current-shortened":
      "Current accounting period shortened from {made_up_date} to {new_date}",
    "change-account-reference-date-company":
      "Change of accounting reference date",
    "accounts-dormant-company":
      "Dormant company accounts made up to {made_up_date}",
    "change-account-reference-date-limited-liability-partnership-previous-extended":
      "Previous accounting period extended from {made_up_date} to {new_date}",
    "change-account-reference-date-limited-liability-partnership-previous-shortened":
      "Previous accounting period shortened from {made_up_date} to {new_date}",
    "change-account-reference-date-limited-liability-partnership-current-extended":
      "Current accounting period extended from {made_up_date} to {new_date}",
    "change-account-reference-date-limited-liability-partnership-current-shortened":
      "Current accounting period shortened from {made_up_date} to {new_date}",
    "change-account-reference-date-limited-liability-partnership":
      "Change of accounting reference date",
    "accounts-balance-sheet": "Balance Sheet",
    "annual-return-limited-liability-partnership-with-made-up-date":
      "Annual return made up to {made_up_date}",
    "annual-return-limited-liability-partnership": "Annual return",
    "annual-return-company-with-made-up-date":
      "Annual return made up to {made_up_date}",
    "annual-return-company-with-made-up-date-full-list-shareholders":
      "Annual return made up to {made_up_date} with full list of shareholders",
    "annual-return-company-with-made-up-date-bulk-list-shareholders":
      "Annual return made up to {made_up_date} with bulk list of shareholders",
    "annual-return-company-with-made-up-date-changes-to-shareholders":
      "Annual return made up to {made_up_date}. List of shareholders has changed",
    "annual-return-company-with-made-up-date-bearer-shares":
      "Annual return made up to {made_up_date} with bearer shares",
    "annual-return-company-with-made-up-date-no-shareholders-list":
      "Annual return made up to {made_up_date}, no shareholder list provided",
    "annual-return-company-with-made-up-date-no-member-list":
      "Annual return made up to {made_up_date} no member list",
    "annual-return-company": "Annual return",
    "annual-return-newspaper": "Annual return",
    "annual-return-overseas-company":
      "Transitional return by a UK establishment of an overseas company",
    "annual-return-add-person-authorised-to-represent-to-uk-establishment":
      "Transitional return for {branch_number} - person authorised to represent, {representative_details}",
    "annual-return-add-person-authorised-to-accept-service-to-uk-establishment":
      "Transitional return for {branch_number} - person authorised to accept service, {representative_details}",
    "annual-return-add-person-to-uk-establisment":
      "Transitional return - {representative_details}",
    "annual-return-update-with-change-details":
      "Transitional return for {branch_number} - Changes made to the UK establishment, {representative_details}",
    "annual-return-update-details":
      "Transitional return - {representative_details}",
    "auditors-resignation-company": "Auditor's resignation",
    "auditors-report": "Auditor's report",
    "auditors-statement": "Auditor's statement",
    "auditors-resignation-limited-liability-partnership":
      "Resignation of an auditor",
    "auditors-resignation-limited-company": "Resignation of an auditor",
    "statement-guarantee-by-parent-undertaking-of-subsidiary-company":
      "Statement of guarantee by a parent undertaking of a subsidiary company",
    "statement-guarantee-by-parent-undertaking-of-subsidiary-limited-liability-partnership":
      "Statement of guarantee by a parent undertaking of a subsidiary Limited Liability Partnership",
    "miscellaneous-limited-liability-partnership": "Miscellaneous",
    "appoint-person-director-company-with-name-date":
      "Appointment of {officer_name} as a director on {appointment_date}",
    "appoint-person-director-company-with-name":
      "Appointment of {officer_name} as a director",
    "appoint-person-director-company": "Appointment of a director",
    "appoint-person-secretary-company-with-name-date":
      "Appointment of {officer_name} as a secretary on {appointment_date}",
    "appoint-person-secretary-company-with-name":
      "Appointment of {officer_name} as a secretary",
    "appoint-person-secretary-company": "Appointment of a secretary",
    "appoint-corporate-director-company-with-name-date":
      "Appointment of {officer_name} as a director on {appointment_date}",
    "appoint-corporate-director-company-with-name":
      "Appointment of {officer_name} as a director",
    "appoint-corporate-director-company": "Appointment of a director",
    "appoint-corporate-secretary-company-with-name-date":
      "Appointment of {officer_name} as a secretary on {appointment_date}",
    "appoint-corporate-secretary-company-with-name":
      "Appointment of {officer_name} as a secretary",
    "appoint-corporate-secretary-company": "Appointment of a secretary",
    "appoint-person-member-limited-liability-partnership-with-appointment-date":
      "Appointment of {officer_name} as a member on {appointment_date}",
    "appoint-person-member-limited-liability-partnership":
      "Appointment of {officer_name} as a member",
    "appoint-corporate-member-limited-liability-partnership-with-appointment-date":
      "Appointment of {officer_name} as a member on {appointment_date}",
    "appoint-corporate-member-limited-liability-partnership":
      "Appointment of {officer_name} as a member",
    "appoint-manager-company-with-name-date":
      "Appointment of {officer_name} as a manager on {appointment_date}",
    "appoint-manager-company-with-name":
      "Appointment of {officer_name} as a manager",
    "appoint-judicial-factor-with-name-date":
      "Appointment of {officer_name} as a judicial factor on {appointment_date}",
    "appoint-judicial-factor-with-name":
      "Appointment of {officer_name} as a judicial factor",
    "appoint-manager-company": "Appointment of a manager",
    "appoint-person-director-overseas-company-with-name-appointment-date":
      "Appointment of {officer_name} as a director on {appointment_date}",
    "appoint-person-director-overseas-company-with-name":
      "Appointment of {officer_name} as a director",
    "appoint-person-director-overseas-company": "Appointment of a director",
    "appoint-corporate-director-overseas-company-with-appointment-date":
      "Appointment of {officer_name} as a director on {appointment_date}",
    "appoint-corporate-director-overseas-company":
      "Appointment of {officer_name} as a director",
    "appoint-person-secretary-overseas-company-with-appointment-date":
      "Appointment of {officer_name} as a secretary on {appointment_date}",
    "appoint-person-secretary-overseas-company":
      "Appointment of {officer_name} as a secretary",
    "appoint-corporate-secretary-overseas-company-with-appointment-date":
      "Appointment of {officer_name} as a secretary on {appointment_date}",
    "appoint-corporate-secretary-overseas-company":
      "Appointment of {officer_name} as a secretary",
    "appoint-person-authorised-represent-overseas-company-with-appointment-date":
      "Appointment of {officer_name} as a person authorised to represent UK establishment {branch_number} on {change_date}.",
    "appoint-person-authorised-represent-overseas-company":
      "Appointment {change_details}",
    "appoint-judicial-factor-overseas-company-with-appointment-date":
      "Appointment of {officer_name} as a judicial factor on {appointment_date}",
    "appoint-judicial-factor-overseas-company":
      "Appointment of a judicial factor",
    "appoint-person-authorised-accept-overseas-company-with-appointment-date":
      "Appointment of {officer_name} as a person authorised to accept service for UK establishment {branch_number} on {change_date}.",
    "appoint-person-authorised-accept-overseas-company":
      "Appointment {change_details}",
    "appoint-corporate-member-societas-europaea-with-name-appointment-date":
      "Appointment of {officer_name} as a corporate member on {appointment_date}",
    "appoint-corporate-member-societas-europaea-with-name":
      "Appointment of {officer_name} as a corporate member",
    "appoint-corporate-member-societas-europaea":
      "Appointment of a corporate member",
    "appoint-person-member-societas-europaea-with-name-appointment-date":
      "Appointment of {officer_name} as a member on {appointment_date}",
    "appoint-person-member-societas-europaea-with-name":
      "Appointment of {officer_name} as a member",
    "appoint-person-member-societas-europaea": "Appointment of a member",
    "appoint-manager-european-economic-interest-groupings-with-appointment-date":
      "Appointment of a manager on {appointment_date}",
    "appoint-manager-european-economic-interest-groupings":
      "Appointment of a manager",
    "change-person-director-company-with-change-date":
      "Director's details changed for {officer_name} on {change_date}",
    "change-person-director-company": "Director's details changed",
    "change-person-secretary-company-with-change-date":
      "Secretary's details changed for {officer_name} on {change_date}",
    "change-person-secretary-company": "Secretary's details changed",
    "change-corporate-director-company-with-change-date":
      "Director's details changed for {officer_name} on {change_date}",
    "change-corporate-director-company": "Director's details changed",
    "change-corporate-secretary-company-with-change-date":
      "Secretary's details changed for {officer_name} on {change_date}",
    "change-corporate-secretary-company": "Secretary's details changed",
    "change-person-director-overseas-company-with-change-date":
      "Director's details changed for {officer_name} on {change_date}",
    "change-person-director-overseas-company": "Director's details changed",
    "change-corporate-director-overseas-company-with-change-date":
      "Director's details changed for {officer_name} on {change_date}",
    "change-corporate-director-overseas-company": "Director's details changed",
    "change-person-secretary-overseas-company-with-change-date":
      "Secretary's details changed for {officer_name} on {change_date}",
    "change-person-secretary-overseas-company": "Secretary's details changed",
    "change-corporate-secretary-overseas-company-with-change-date":
      "Secretary's details changed for {officer_name} on {change_date}",
    "change-corporate-secretary-overseas-company":
      "Secretary's details changed",
    "change-person-authorised-overseas-company-with-change-date":
      "Change of details for {officer_name} of {officer_address} as a person authorised to represent UK establishment {branch_number} on {change_date}",
    "change-person-authorised-overseas-company":
      "Change of details {change_details}",
    "change-service-address-judicial-factor-overseas-company":
      "Service address changed",
    "change-person-authorised-to-represent-overseas-company-with-change-date":
      "Change of details for {officer_name} as a person authorised to accept service for UK establishment {branch_number} on {change_date}",
    "change-person-authorised-to-represent-overseas-company":
      "Change of details {change_details}",
    "change-service-address-manager":
      "Service address changed for {officer_name}",
    "change-person-member-limited-liability-partnership-with-name-change-date":
      "Member's details changed for {officer_name} on {change_date}",
    "change-person-member-limited-liability-partnership":
      "Member's details changed",
    "change-corporate-member-limited-liability-partnership-with-name-change-date":
      "Member's details changed for {officer_name} on {change_date}",
    "change-corporate-member-limited-liability-partnership":
      "Member's details changed for {officer_name}",
    "change-manager-european-economic-interest-groups-with-change-date":
      "Manager details changed on {change_date}",
    "change-manager-european-economic-interest-groups":
      "Manager details changed",
    "change-person-member-societas-europaea-with-name-date":
      "Member's details changed for {officer_name} on {change_date}",
    "change-person-member-societas-europaea-with-name":
      "Member's details changed for {officer_name}",
    "change-person-member-societas-europaea": "Member's details changed",
    "change-corporate-member-societas-europaea-with-name-date":
      "Member's details changed for {officer_name} on {change_date}",
    "change-corporate-member-societas-europaea-with-name":
      "Member's details changed for {officer_name}",
    "change-corporate-member-societas-europaea": "Member's details changed",
    "change-proprietors-newspaper":
      "Register a change of registered proprietors outside of the annual return",
    "termination-person-director-overseas-company-with-name-termination-date":
      "Termination of appointment of {officer_name} as a director on {termination_date}",
    "termination-person-director-overseas-company-with-name":
      "Termination of appointment of {officer_name} as a director",
    "termination-person-director-overseas-company":
      "Termination of appointment of a director",
    "termination-person-secretary-overseas-company-with-name-termination-date":
      "Termination of appointment of {officer_name} as secretary on {termination_date}",
    "termination-person-secretary-overseas-company-with-name":
      "Termination of appointment of {officer_name} as secretary",
    "termination-person-secretary-overseas-company":
      "Termination of appointment of a secretary",
    "termination-person-authorised-overseas-company":
      "Termination of appointment for a UK establishment - {change_details}",
    "termination-person-judicial-factor-overseas-company-with-name-termination-date":
      "Termination of appointment of {officer_name} as judicial factor on {termination_date}",
    "termination-person-judicial-factor-overseas-company-with-name":
      "Termination of appointment of {officer_name} as judicial factor",
    "termination-person-judicial-factor-overseas-company":
      "Termination of appointment of a judicial factor",
    "termination-director-company-with-name-termination-date":
      "Termination of appointment of {officer_name} as a director on {termination_date}",
    "termination-director-company-with-name":
      "Termination of appointment of {officer_name} as a director",
    "termination-director-company": "Termination of appointment of a director",
    "termination-member-limited-liability-partnership-with-name-termination-date":
      "Termination of appointment of {officer_name} as a member on {termination_date}",
    "termination-member-limited-liability-partnership-with-name":
      "Termination of appointment of {officer_name} as a member",
    "termination-member-limited-liability-partnership":
      "Termination of appointment of a member",
    "termination-secretary-company-with-name-termination-date":
      "Termination of appointment of {officer_name} as a secretary on {termination_date}",
    "termination-secretary-company-with-name":
      "Termination of appointment of {officer_name} as a secretary",
    "termination-secretary-company":
      "Termination of appointment of a secretary",
    "termination-manager-company-with-termination-date":
      "Termination of appointment of {officer_name} as a manager on {termination_date}",
    "termination-manager-company":
      "Termination of appointment of {officer_name} as a manager",
    "termination-member-societas-europaea-with-name-termination-date":
      "Termination of appointment of {officer_name} on {termination_date}",
    "termination-member-societas-europaea-with-name":
      "Termination of appointment of {officer_name}",
    "termination-member-societas-europaea":
      "Termination of appointment of a member",
    "notice-restriction-on-company-articles":
      "Notice of Restriction on the Company's Articles",
    "notice-removal-restriction-on-company-articles":
      "Notice of removal of restriction on the company's articles",
    "statement-compliance-articles-restricted":
      "Statement of compliance where amendment of articles restricted",
    "statement-of-companys-objects": "Statement of company's objects",
    "change-constitution-enactment": "Change of constitution by enactment",
    "change-constitution-by-court-order":
      "Change of constitution by order of court or other authority",
    "change-constitutional-documents-overseas-company-with-date":
      " Alteration of constitutional documents on {change_date}",
    "change-constitutional-documents-overseas-company":
      "Alteration of constitutional documents {change_date}",
    "change-uk-establishment-relating-to-constitutional-documents":
      "Change of UK establishment relating to constitutional documents",
    "change-of-name-direction":
      "Change of company name direction on {change_date}",
    "change-of-name-exemption":
      "Name change exemption from using 'limited' or 'cyfyngedig'",
    "change-of-name-conditional-resolution-satisfaction":
      "Change of name confirming satisfaction of conditional resolution",
    "change-of-name-by-provision-in-articles":
      "Change of name by provision in articles",
    "change-of-name-by-directors-resolution":
      "Change of name by directors resolution",
    "change-of-name-by-resolution": "Change of name by resolution",
    "change-of-name-by-conditional-resolution":
      "Change of name by conditional resolution",
    "change-of-name-request-comments":
      "Change of name with request to seek comments from relevant body",
    "change-of-name-notice": "Change of name notice",
    "change-of-name-overseas-by-resolution-with-date":
      "Change of registered name of an overseas company on {change_date} from {change_name}",
    "change-of-name-overseas-by-resolution":
      "Change of registered name {change_name}",
    "change-of-name-notice-limited-liability-partnership":
      "Change of name notice",
    "change-of-status-limited-liability-partnership": "Change of status notice",
    "change-of-name-community-interest-company": "Change of name",
    annotation: "",
    "dissolution-application-strike-off-company":
      "Application to strike the company off the register",
    "dissolution-withdrawal-application-strike-off-company":
      "Withdraw the company strike off application",
    "dissolution-application-strike-off-limited-liability-partnership":
      "Application to strike the limited liability partnership off the register",
    "dissolution-withdrawal-application-strike-off-limited-liability-partnership":
      "Withdraw the strike off application",
    "dissolution-closure-of-uk-establishment":
      "Closure of UK establishment(s) {branch_number} on {close_date}",
    "dissolution-closure-of-uk-establishment-and-overseas-company":
      "Closure of UK establishment(s) {branch_number} and overseas company {company_number} on {close_date}",
    "dissolution-closure-overseas-company":
      "Closure of UK establishment(s) {change_details}",
    "dissolution-termination-overseas-company":
      "Termination of overseas company insolvency proceedings",
    "dissolution-voluntary-strike-off-discontinued":
      "Voluntary strike-off action has been discontinued",
    "dissolution-voluntary-strike-off-suspended":
      "Voluntary strike-off action has been suspended",
    "dissolution-request-where-liquidator-ceased-to-act":
      "Request of dissolution of a company where a liquidator has ceased to act",
    "registration-of-uk-establishment": "Registration of a UK establishment",
    "register-overseas-company-with-date":
      "Registration of a UK establishment of an overseas company on {incorporation_date}",
    "register-overseas-company":
      "Registration of a UK establishment of an overseas company",
    "appointment-at-registration-of-person-authorised-to-accept-service":
      "Appointment at registration for {branch_number} - person authorised to accept service, {representative_details}",
    "appointment-at-registration-of-person-authorised-to-represent":
      "Appointment at registration for {branch_number} - person authorised to represent, {representative_details}",
    "appointment-overseas-company":
      "Appointment at registration {representative_details}",
    "incorporation-limited-liability-partnership-with-date":
      "Incorporation of a limited liability partnership on {incorporation_date}",
    "incorporation-limited-liability-partnership":
      "Incorporation of a limited liability partnership",
    "memorandum-articles": "Memorandum and Articles of Association",
    "re-registration-memorandum-articles":
      "Re-registration of Memorandum and Articles",
    "model-articles-adopted": "Model articles adopted",
    "model-articles-adopted-amended-provisions":
      "Model articles adopted (Amended Provisions)",
    "incorporation-company": "Incorporation",
    "incorporation-company-with-type-date":
      "Incorporation of a {company_type} on {incorporation_date}",
    "incorporation-community-interest-company-with-date":
      "Incorporation of a Community Interest Company on {incorporation_date}",
    "incorporation-community-interest-company":
      "Incorporation of a Community Interest Company",
    "registration-company-as-social-landlord":
      "Registration of a company as a social landlord",
    "formation-european-economic-interest-groups-official-address-inside-uk-with-date":
      "Formation of European Economic Interest Group on {incorporation_date} whose official address is in the UK",
    "formation-european-economic-interest-groups-official-address-inside-uk":
      "Formation of European Economic Interest Group whose official address is in the UK",
    "formation-european-economic-interest-groups-official-address-outside-uk":
      "Formation of Economic Interest Group on {incorporation_date} whose official address is outside of the UK",
    "formation-by-merger-of-societas-europaea":
      "Formation by merger of Societas Europaea to be registered in the UK",
    "formation-of-holding-societas-europaea":
      "Formation of holding Societas Europaea",
    "formation-of-subsidiary-societas-europaea-article2":
      "Formation of subsidiary Societas Europaea",
    "formation-of-subsidiary-societas-europaea-article3":
      "Formation of subsidiary Societas Europaea",
    "formation-terms-holding-societas-europaea": "Draft terms of formation",
    "formation-terms-conversion-public-limited-company-to-societas-europaea":
      "Draft terms of conversion of Public Limited Company to Societas Europaea",
    "formation-terms-conversion-societas-europaea-to-public-limited-company":
      "Draft terms of conversion to Public Limited Company",
    "transformation-public-limited-company-to-societas-europaea":
      "Closure of Public Limited Company and transformed to Societas Europaea",
    "proposed-transfer-societas-europaea-from-uk":
      "Proposed transfer of Societas Europaea from United Kingdom",
    "proposed-transfer-societas-europaea-to-uk":
      "Proposed transfer of Societas Europaea from United Kingdom",
    "transfer-societas-europaea-to-uk":
      "Transfer of Societas Europaea to United Kingdom",
    "transfer-societas-europaea-from-uk":
      "Transfer of Societas Europaea from United Kingdom",
    "statement-solvency-by-members-societas-euopaea-proposing-to-transfer-from-uk":
      "Statement of solvency by members of Societas Europaea which is proposing to transfer from the United Kingdom",
    "conversion-societas-europaea-to-public-limited-company":
      "Conversion to Public Limited Company",
    "notice-satisfaction-of-conditions-formation-of-societas-europaea":
      "Notice of satisfaction of conditions for the formation of holding Societas Europaea by a UK registered company",
    "notice-from-overseas-registry-transfer-from-uk":
      "Transfer of an overseas company from UK",
    "application-to-commence-business": "Application to commence business",
    "registration-of-european-economic-interest-group-address-in-uk":
      "Registration of a European Economic Interest Group whose official address is in the United Kingdom",
    "reregistration-private-to-public-company":
      "Re-registration from a private company to a public company",
    "reregistration-private-to-public-company-appoint-secretary":
      "Re-registration from a private company to a public company including appointment of secretary(s)",
    "reregistration-public-to-private-company":
      "Re-registration from a public company to a private limited company",
    "notice-to-cancel-reregistration-by-company":
      "Cancellation of re-registration by the company",
    "notice-to-cancel-reregistration-by-applicants":
      "Cancellation of reregistration by the applicants",
    "reregistration-private-limited-to-private-unlimited-company":
      "Re-registration from a private limited company to a private unlimited company",
    "reregistration-private-unlimited-to-private-limited-company":
      "Re-registration from a private unlimited company to a private limited company",
    "reregistration-public-to-private-unlimited-company":
      "Re-registration from a public company to a private unlimited company",
    "reregistration-public-to-private-following-court-order":
      "Re-registration from a public company to a private company following a court order",
    "reregistration-public-to-private-following-cancellation-of-shares":
      "Re-registration from a public company to a private company following share cancellation",
    "reregistration-public-to-private-following-capital-reduction":
      "Re-registration from a public company to a private company following capital reduction",
    "reregistration-assent": "Re-registration assent",
    reregistration: "Re-registration",
    "application-trading-certificate":
      "Trading certificate for a public company",
    "re-registration-court-order-to-reduce-share-capital":
      "Re-registration court order to reduce share capital",
    "document-replacement":
      "Replacement of a document not meeting requirements for proper delivery",
    "application-document-rectification":
      "Application for rectification of information held by Companies House",
    "notice-objection-to-request-to-rectify-register":
      "Notice of an objection to a request for the registrar of Companies House to rectify the register",
    "second-filing-of-form-with-form-type-made-up-date":
      "Second filing of {form_type} previously delivered to Companies House made up to {made_up_date}",
    "second-filing-of-form-with-form-type":
      "Second filing of {form_type} previously delivered to Companies House",
    "second-filing-of-form":
      "Second filing of form previously delivered to Companies House",
    "notice-carry-on-business-as-investment-company":
      "Notice of intention to carry on business as an investment company",
    "notice-no-longer-an-investment-company":
      "Notice that a company no longer wishes to be an investment company",
    "amendment-of-statutes-societas-europaea": "Amendment of Statutes",
    "removal-company-as-social-landlord-with-removal-date":
      "Removal of a company as a social landlord on {removal_date}",
    "removal-company-as-social-landlord":
      "Removal of a company as a social landlord",
    "notice-appeal-to-remove-company-from-social-landlord-register":
      "Notice of appeal against a decision to remove a company from the Register of Social Landlords",
    "statement-of-affairs": "Statement of affairs",
    "change-registered-office-address-limited-liability-partnership-with-date-old-address-new-address":
      "Registered office address changed from {old_address} to {new_address} on {change_date}",
    "change-registered-office-address-limited-liability-partnership-with-date-old-address":
      "Registered office address changed from {old_address} on {change_date}",
    "change-registered-office-address-limited-liability-partnership":
      "Registered office address changed",
    "change-registered-office-address-company-with-date-old-address-new-address":
      "Registered office address changed from {old_address} to {new_address} on {change_date}",
    "change-registered-office-address-company-with-date-old-address":
      "Registered office address changed from {old_address} on {change_date}",
    "change-registered-office-address-company":
      "Registered office address changed",
    "change-sail-address-company-with-old-address-new-address":
      "Register inspection address has been changed from {old_address} to {new_address}",
    "change-sail-address-company-with-new-address":
      "Register inspection address has been changed to {new_address}",
    "change-sail-address-company-with-old-address":
      "Register inspection address has been changed from {old_address}",
    "change-sail-address-company":
      "Register inspection address has been changed",
    "move-registers-to-sail-company-with-new-address":
      "Register(s) moved to registered inspection location {new_address}",
    "move-registers-to-sail-company":
      "Register(s) moved to registered inspection location",
    "move-registers-to-registered-office-company-with-new-address":
      "Register(s) moved to registered office address {new_address}",
    "move-registers-to-registered-office-company":
      "Register(s) moved to registered office address",
    "change-sail-address-limited-liability-partnership-with-old-address-new-address":
      "Location of register of charges has been changed from {old_address} to {new_address}",
    "change-sail-address-limited-liability-partnership-with-new-address":
      "Location of register of charges has been changed to {new_address}",
    "change-sail-address-limited-liability-partnership-with-old-address":
      "Location of register of charges has been changed from {old_address}",
    "change-sail-address-limited-liability-partnership":
      "Location of register of charges has been changed",
    "move-registers-to-sail-limited-liability-partnership-with-new-address":
      "Register(s) moved to registered inspection location {new_address}",
    "move-registers-to-sail-limited-liability-partnership":
      "Register(s) moved to registered inspection location",
    "move-registers-to-registered-office-limited-liability-partnership-with-new-address":
      "Register(s) moved to registered office address {new_address}",
    "move-registers-to-registered-office-limited-liability-partnership":
      "Register(s) moved to registered office address",
    "change-registered-office-addres-overseas-company":
      "Place of business address changed",
    "change-registered-office-situation-limited-liability-partnership":
      "Change the registered office situation",
    "change-registered-office-situation-company-with-old-jurisdiction-new-jurisdiction-date":
      "Change the registered office situation from {old_jurisdiction} to {new_jurisdiction} on {change_date}",
    "change-registered-office-situation-company-with-old-jurisdiction-new-jurisdiction":
      "Change the registered office situation from {old_jurisdiction} to {new_jurisdiction}",
    "change-registered-office-situation-company-with-new-jurisdiction":
      "Change the registered office situation to {new_jurisdiction}",
    "change-sail-address-overseas-company":
      "Location of register of charges has been changed",
    "statement-of-capital": "Statement of capital on {date}",
    "capital-allotment-shares":
      "Statement of capital following an allotment of shares on {date}",
    "capital-alter-shares-consolidation": "Consolidation of shares on {date}",
    "capital-alter-shares-consolidation-statement-of-capital":
      "Consolidation of shares Statement of capital on {date}",
    "capital-alter-shares-subdivision": "Sub-division of shares on {date}",
    "capital-alter-shares-subdivision-statement-of-capital":
      "Sub-division of shares Statement of capital on {date}",
    "capital-alter-shares-redemption-statement-of-capital":
      "Statement of capital on {date}",
    "capital-alter-shares-redemption": "Re-demption of shares on {date}",
    "capital-alter-shares-reconversion": "Re-conversion of shares on {date}",
    "capital-alter-shares-reconversion-statement-of-capital":
      "Re-conversion of shares Statement of capital on {date}",
    "capital-alter-shares-consolidation-subdivision-reconversion":
      "Consolidation, sub-division, re-conversion of shares on {date}",
    "capital-alter-shares-consolidation-subdivision-reconversion-statement-of-capital":
      "Consolidation, sub-division, re-conversion of shares. Statement of capital on {date}",
    "capital-alter-shares-consolidation-subdivision":
      "Consolidation and sub-division of shares on {date}",
    "capital-alter-shares-consolidation-subdivision-statement-of-capital":
      "Consolidation and sub-division of shares Statement of capital on {date}",
    "capital-alter-shares-consolidation-reconversion":
      "Consolidation and re-conversion of shares on {date}",
    "capital-alter-shares-consolidation-reconversion-statement-of-capital":
      "Consolidation and re-conversion of shares Statement of capital on {date}",
    "capital-alter-shares-subdivision-reconversion":
      "Sub-division, re-conversion of shares on {date}",
    "capital-alter-shares-subdivision-reconversion-statement-of-capital":
      "Sub-division, re-conversion of shares Statement of capital on {date}",
    "capital-alter-shares": "Alter Share Capital",
    "capital-return-purchase-own-shares-treasury-capital-date":
      "Purchase of own shares. Shares purchased into treasury:",
    "capital-return-purchase-own-shares-share-capital-date":
      "Purchase of own shares. Shares purchased into treasury:",
    "capital-return-purchase-own-shares": "Purchase of own shares.",
    "capital-return-purchase-own-shares-capital-date":
      "Purchase of own shares. Capital on {date}",
    "capital-sale-or-transfer-treasury-shares-with-date-currency-capital-figure":
      "Sale or transfer of treasury shares. Treasury capital:",
    "capital-sale-or-transfer-treasury-shares-with-date-currency":
      "Sale or transfer of treasury shares. Treasury capital:",
    "capital-sale-or-transfer-treasury-shares-with-date":
      "Sale or transfer of treasury shares. Treasury capital on {date}",
    "capital-sale-or-transfer-treasury-shares":
      "Sale or transfer of treasury shares. Treasury capital",
    "capital-cancellation-treasury-shares-with-date-currency-capital-figure":
      "Statement of capital on {date}",
    "capital-cancellation-treasury-shares-with-date-treasury-capital-figure":
      "Cancellation of treasury shares. Treasury capital:",
    "capital-cancellation-treasury-shares":
      "Cancellation of treasury shares. Statement of capital",
    "capital-cancellation-shares":
      "Cancellation of shares. Statement of capital on {date}",
    "capital-cancellation-shares-by-plc":
      "Cancellation of shares by a PLC. Statement of capital on {date}",
    "capital-name-of-class-of-shares-with-date":
      "Change of share class name or designation on {date}",
    "capital-name-of-class-of-shares":
      "Change of share class name or designation",
    "capital-allotment-new-class-of-shares":
      "Allotment of a new class of shares by an unlimited company",
    "capital-variation-of-rights-attached-to-shares":
      "Particulars of variation of rights attached to shares",
    "capital-new-class-members": "New class of members",
    "capital-variation-of-class-rights":
      "Particulars of variation of class rights update",
    "capital-update-to-class-of-members": "Update to class of members",
    "capital-redomination-of-shares":
      "Redenomination of shares. Statement of capital {date}",
    "capital-reduction-of-capital-redomination":
      "Reduction of capital following redenomination. Statement of capital on {date}",
    "capital-application-to-court-cancellation-of-special-resolution-approving-redemption-purchase-of-shares-out-of-capital":
      "Application to court for cancellation of the special resolution approving a redemption or purchase of shares out of capital",
    "capital-application-by-company-to-court-cancellation-of-special-resolution-approving-redemption-purchase-of-shares-out-of-capital":
      "Application by the company to court for cancellation of the special resolution approving a redemption or purchase of shares out of capital",
    "capital-statement-directors-reduction-of-capital-following-redomination":
      "Statement of directors in accordance with reduction of capital following redenomination",
    "capital-statement-capital-company-with-date-currency-figure":
      "Statement of capital on {date}",
    "capital-statement-capital-company": "Statement of capital",
    "capital-directors-statement-auditors-report":
      "Directors statement and auditors report. Out of capital",
    "change-company-details-by-uk-establishment-overseas-company":
      "Details changed for a UK establishment - {change_details}",
    "change-company-details-by-uk-establishment-overseas-company-with-change-details":
      "Details changed for a UK establishment - {branch_number} {change_type} {change_details},{change_date}",
    "change-company-details-overseas-company-with-change-details":
      "Details changed for an overseas company - {change_address}",
    "change-company-details-overseas-company":
      "Details changed for an overseas company -  {change_address}",
    "scheme-of-arrangement": "Scheme of arrangement",
    "notice-of-closure-branch-overseas-company":
      "Notice of closure of a place of business",
    "dissolved-company": "Dissolution",
    "gazette-return-of-final-meeting": "Gazette return of final meeting",
    "gazette-return-of-final-meeting-processed":
      "Gazette return of final meeting",
    "liquidation-ex": "No longer in liquidation",
    "restoration-order-of-court": "Restoration by order of the court",
    "order-of-court-restoration-previously-creditors-voluntary-liquidation":
      "Restoration by order of court - previously in Creditors' Voluntary Liquidation",
    "order-of-court-restoration-previously-members-voluntary-liquidation":
      "Restoration by order of court - previously in Members' Voluntary Liquidation",
    "order-of-court-restoration-previously-compulsory-liquidation":
      "Restoration by order of court - previously in Compulsory Liquidation",
    "address-correction": "Address correction",
    "dissolved-compulsory-strike-off-suspended":
      "Compulsory strike-off action has been suspended",
    "no-description-available": "No description available",
    "particulars-of-a-mortgage-charge": "Particulars of a mortgage charge",
    "default-companies-house-registered-office-address-applied":
      "Registered office address changed to {default_address} on {change_date}",
    "order-of-court-registered-office-address-change":
      "Registered office address changed on {change_date} by order of court from {old_address} to {new_address}",
    "order-of-court-registered-office-address-change-def":
      "Registered office address changed on {change_date} by order of court to {new_address}",
    "court-upheld-registrars-decision-on-registered-office-address":
      "Court upheld the registrar's decision to use Companies House default address as the registered office address",
    "notification-of-a-person-with-significant-control":
      "Notification of {psc_name} as a person with significant control on {notification_date}",
    "notification-of-a-super-secure-person-with-significant-control":
      "Notification of a protected person with significant control",
    "change-to-a-person-with-significant-control":
      "Change of details for {psc_name} as a person with significant control on {change_date}",
    "change-to-a-person-with-significant-control-without-name-date":
      "Change of details for a person with significant control",
    "cessation-of-a-person-with-significant-control":
      "Cessation of {psc_name} as a person with significant control on {cessation_date}",
    "cessation-of-a-super-secure-person-with-significant-control":
      "Cessation of a protected person with significant control",
    "cessation-of-a-person-with-significant-control-without-name-date":
      "Cessation of a person with significant control",
    "notification-of-a-person-with-significant-control-statement":
      "Notification of a person with significant control statement",
    "withdrawal-of-a-person-with-significant-control-statement":
      "Withdrawal of a person with significant control statement on {withdrawal_date}",
    "notification-of-a-person-with-significant-control-limited-liability-partnership":
      "Notification of {psc_name} as a person with significant control on {notification_date}",
    "notification-of-a-person-with-significant-control-scottish-limited-partnership":
      "Notification of {psc_name} as a person with significant control on {notification_date}",
    "notification-of-a-person-with-significant-control-scottish-partnership":
      "Notification of {psc_name} as a person with significant control on {notification_date}",
    "notification-of-a-super-secure-person-with-significant-control-limited-liability-partnership":
      "Notification of a protected person with significant control",
    "notification-of-a-person-with-significant-control-without-name-date":
      "Notification of a person with significant control",
    "change-to-a-person-with-significant-control-limited-liability-partnership":
      "Change of details for {psc_name} as a person with significant control on {change_date}",
    "change-to-a-person-with-significant-control-scottish-limited-partnership":
      "Change of details for {psc_name} as a person with significant control on {change_date}",
    "change-to-a-person-with-significant-control-scottish-partnership":
      "Change of details for {psc_name} as a person with significant control on {change_date}",
    "cessation-of-a-person-with-significant-control-limited-liability-partnership":
      "Cessation of {psc_name} as a person with significant control on {cessation_date}",
    "cessation-of-a-person-with-significant-control-scottish-limited-partnership":
      "Cessation of {psc_name} as a person with significant control on {cessation_date}",
    "cessation-of-a-person-with-significant-control-scottish-partnership":
      "Cessation of {psc_name} as a person with significant control on {cessation_date}",
    "cessation-of-a-super-secure-person-with-significant-control-limited-liability-partnership":
      "Cessation of a protected person with significant control",
    "notification-of-a-person-with-significant-control-statement-limited-liability-partnership":
      "Notification of a person with significant control statement",
    "notification-of-a-person-with-significant-control-statement-scottish-limited-partnership":
      "Notification of a person with significant control statement",
    "notification-of-a-person-with-significant-control-statement-scottish-partnership":
      "Notification of a person with significant control statement",
    "withdrawal-of-a-person-with-significant-control-statement-limited-liability-partnership":
      "Withdrawal of a person with significant control statement on {withdrawal_date}",
    "withdrawal-of-a-person-with-significant-control-statement-scottish-limited-partnership":
      "Withdrawal of a person with significant control statement on {withdrawal_date}",
    "withdrawal-of-a-person-with-significant-control-statement-scottish-partnership":
      "Withdrawal of a person with significant control statement on {withdrawal_date}",
    "elect-to-keep-the-directors-register-information-on-the-public-register":
      "Elect to keep the directors' register information on the public register",
    "elect-to-keep-the-directors-residential-address-register-information-on-the-public-register":
      "Elect to keep the directors' residential address register information on the public register",
    "elect-to-keep-the-secretaries-register-information-on-the-public-register":
      "Elect to keep the secretaries register information on the public register",
    "elect-to-keep-the-persons-with-significant-control-register-information-on-the-public-register":
      "Elect to keep the persons' with significant control register information on the public register",
    "elect-to-keep-the-members-register-information-on-the-public-register":
      "Elect to keep the members' register information on the public register",
    "update-to-the-members-register-information-on-the-public-register":
      "Update to the members' register information on the public register",
    "withdrawal-of-the-directors-register-information-from-the-public-register":
      "Withdrawal of the directors' register information from the public register",
    "withdrawal-of-the-directors-residential-address-register-information-from-the-public-register":
      "Withdrawal of the directors' residential address register information from the public register",
    "withdrawal-of-the-secretaries-register-information-from-the-public-register":
      "Withdrawal of the secretaries register information from the public register",
    "withdrawal-of-the-persons-with-significant-control-register-information-from-the-public-register":
      "Withdrawal of the persons' with significant control register information from the public register",
    "withdrawal-of-the-members-register-information-from-the-public-register":
      "Withdrawal of the members' register information from the public register",
    "elect-to-keep-the-limited-liability-partnership-members-register-information-on-the-public-register":
      "Elect to keep the members' register information on the public register",
    "elect-to-keep-the-limited-liability-partnership-members-residential-address-register-information-on-the-public-register":
      "Elect to keep the members' residential address register information on the public register",
    "elect-to-keep-the-limited-liability-partnership-persons-with-significant-control-register-information-on-the-public-register":
      "Elect to keep the persons' with significant control register information on the public register",
    "withdrawal-of-the-limited-liability-partnership-members-register-information-from-the-public-register":
      "Withdrawal of the members' register information from the public register",
    "withdrawal-of-the-limited-liability-partnership-members-residential-address-register-information-from-the-public-register":
      "Withdrawal of the members' residential address register information from the public register",
    "withdrawal-of-the-limited-liability-partnership-persons-with-significant-control-register-information-from-the-public-register":
      "Withdrawal of the persons' with significant control register information from the public register",
    "second-filing-of-director-appointment-with-name":
      "Second filing for the appointment of {officer_name} as a director",
    "second-filing-of-secretary-appointment-with-name":
      "Second filing for the appointment of {officer_name} as a secretary",
    "second-filing-of-change-of-director-details-with-name":
      "Second filing to change the details of {officer_name} as a director",
    "second-filing-of-change-of-secretary-details-with-name":
      "Second filing to change the details of {officer_name} as a secretary",
    "second-filing-of-director-termination-with-name":
      "Second filing for the termination of {officer_name} as a director",
    "second-filing-of-secretary-termination-with-name":
      "Second filing for the termination of {officer_name} as a secretary",
    "second-filing-of-annual-return-with-made-up-date":
      "Second filing of the annual return made up to {made_up_date}",
    "second-filing-of-member-appointment-with-name":
      "Second filing for the appointment of {officer_name} as a member",
    "second-filing-of-change-of-member-details-with-name":
      "Second filing to change the details of {officer_name} as a member",
    "second-filing-of-member-termination-with-name":
      "Second filing for the termination of {officer_name} as a member",
    "second-filing-notification-of-a-person-with-significant-control":
      "Second filing for the notification of {psc_name} as a person with significant control",
    "second-filing-notification-of-a-person-with-significant-control-without-name-date":
      "Second filing for the notification of a person with significant control",
    "second-filing-change-details-of-a-person-with-significant-control":
      "Second filing to change the details of {psc_name} as a person with significant control",
    "second-filing-change-to-a-person-with-significant-control-without-name-date":
      "Second filing to change the details for a person with significant control",
    "second-filing-cessation-of-a-person-with-significant-control":
      "Second filing for the cessation of {psc_name} as a person with significant control",
    "second-filing-cessation-of-a-person-with-significant-control-without-name-date":
      "Second filing for the cessation of a person with significant control",
    "second-filing-notification-of-a-person-with-significant-control-statement":
      "Second filing for the notification of a person with significant control statement",
    "second-filing-withdrawal-of-a-person-with-significant-control-statement":
      "Second filing for the withdrawal of a person with significant control statement",
    "second-filing-notification-of-a-person-with-significant-control-limited-liability-partnership":
      "Second filing for the notification of {psc_name} as a person with significant control",
    "second-filing-change-details-of-a-person-with-significant-control-limited-liability-partnership":
      "Second filing to change the details of {psc_name} as a person with significant control",
    "second-filing-cessation-of-a-person-with-significant-control-limited-liability-partnership":
      "Second filing for the cessation of {psc_name} as a person with significant control",
    "second-filing-notification-of-a-person-with-significant-control-statement-limited-liability-partnership":
      "Second filing for the notification of a person with significant control statement",
    "second-filing-withdrawal-of-a-person-with-significant-control-statement-limited-liability-partnership":
      "Second filing for the withdrawal of a person with significant control statement",
    "second-filing-capital-cancellation-treasury-shares-with-date-currency-capital-figure":
      "Second filing of statement of capital on {date}",
    "second-filing-capital-cancellation-treasury-shares-with-date-treasury-capital-figure":
      "Second filing of cancellation of treasury shares. Treasury capital:",
    "second-filing-capital-allotment-shares":
      "Second filing of a statement of capital following an allotment of shares on {date}",
    "second-filing-capital-alter-shares-consolidation-statement-of-capital":
      "Second filing of consolidation of shares. Statement of capital on {date}",
    "second-filing-capital-alter-shares-consolidation":
      "Second filing of consolidation of shares on {date}",
    "second-filing-capital-alter-shares-subdivision-statement-of-capital":
      "Second filing of sub-division of shares. Statement of capital on {date}",
    "second-filing-capital-alter-shares-subdivision":
      "Second filing of sub-division of shares on {date}",
    "second-filing-capital-alter-shares-redemption-statement-of-capital":
      "Second filing of statement of capital on {date}",
    "second-filing-capital-alter-shares-redemption":
      "Second filing of re-demption of shares on {date}",
    "second-filing-capital-alter-shares-reconversion-statement-of-capital":
      "Second filing of re-conversion of shares. Statement of capital on {date}",
    "second-filing-capital-alter-shares-reconversion":
      "Second filing of re-conversion of shares on {date}",
    "second-filing-capital-alter-shares-consolidation-subdivision-reconversion-statement-of-capital":
      "Second filing of consolidation, sub-division and re-conversion of shares. Statement of capital on {date}",
    "second-filing-capital-alter-shares-consolidation-subdivision-reconversion":
      "Second filing of consolidation, sub-division and re-conversion of shares on {date}",
    "second-filing-capital-alter-shares-consolidation-subdivision-statement-of-capital":
      "Second filing of consolidation and sub-division of shares. Statement of capital on {date}",
    "second-filing-capital-alter-shares-consolidation-subdivision":
      "Second filing of consolidation and sub-division of shares on {date}",
    "second-filing-capital-alter-shares-consolidation-reconversion-statement-of-capital":
      "Second filing of consolidation and re-conversion of shares. Statement of capital on {date}",
    "second-filing-capital-alter-shares-consolidation-reconversion":
      "Second filing of consolidation and re-conversion of shares on {date}",
    "second-filing-capital-alter-shares-subdivision-reconversion-statement-of-capital":
      "Second filing of sub-division and re-conversion of shares. Statement of capital on {date}",
    "second-filing-capital-alter-shares-subdivision-reconversion":
      "Second filing of sub-division and re-conversion of shares on {date}",
    "second-filing-capital-alter-shares":
      "Second filing of notice of consolidation, sub-division, redemption of shares or re-conversion of stock into shares",
    "second-filing-capital-cancellation-shares":
      "Second filing of cancellation of shares. Statement of capital on {date}",
    "second-filing-capital-cancellation-shares-by-plc":
      "Second filing of cancellation of shares by a PLC. Statement of capital on {date}",
    "second-filing-capital-redomination-of-shares":
      "Second filing of redenomination of shares. Statement of capital {date}",
    "second-filing-capital-reduction-of-capital-redomination":
      "Second filing Reduction of capital following redenomination. Statement of capital on {date}",
    "notice-of-removal-of-a-director": "Notice of removal of a director",
    "notice-of-removal-of-a-corporate-director":
      "Notice of removal of a corporate director",
    "accounts-with-accounts-type-audited-abridged":
      "Audited abridged accounts made up to {made_up_date}",
    "accounts-with-accounts-type-unaudited-abridged":
      "Unaudited abridged accounts made up to {made_up_date}",
    "directors-register-information-on-withdrawal-from-the-public-register":
      "Directors' register information at {date} on withdrawal from the public register",
    "directors-usual-residential-address-register-information-on-withdrawal-from-the-public-register":
      "Directors' usual residential address register information at {date} on withdrawal from the public register on {date}",
    "secretaries-register-information-on-withdrawal-from-the-public-register":
      "Secretaries register information at {date} on withdrawal from the public register",
    "persons-with-significant-control-register-information-on-withdrawal-from-the-public-register":
      "Persons' with significant control register information at {date} on withdrawal from the public register",
    "members-register-information-on-withdrawal-from-the-public-register":
      "Members register information at {date} on withdrawal from the public register",
    "limited-liability-partnership-members-register-information-on-withdrawal-from-the-public-register":
      "Members' register information at {date} on withdrawal from the public register",
    "limited-liability-partnership-members-usual-residential-address-register-information-on-withdrawal-from-the-public-register":
      "Members' usual residential address register information at {date} on withdrawal from the public register",
    "limited-liability-partnership-persons-with-significant-control-register-information-on-withdrawal-from-the-public-register":
      "Persons' with significant control register information at {date} on withdrawal from the public register",
    "confirmation-statement-with-no-updates":
      "Confirmation statement made on {made_up_date} with no updates",
    "confirmation-statement-with-updates":
      "Confirmation statement made on {made_up_date} with updates",
    "confirmation-statement-with-made-up-date":
      "Confirmation statement made on {made_up_date}",
    "confirmation-statement": "{original_description}",
    "second-filing-of-confirmation-statement-with-made-up-date":
      "Second filing of Confirmation Statement dated {made_up_date}",
    "gazette-dissolved-statutory-instrument":
      "Final Gazette dissolved by statutory instrument",
    "gazette-dissolved-liquidation":
      "Final Gazette dissolved following liquidation",
    "registration-and-designation-as-a-private-fund-limited-partnership":
      "Registration and designation as a Private Fund Limited Partnership",
    "certificate-of-registration-and-designation-as-a-private-fund-limited-partnership":
      "Certificate of registration and designation as a Private Fund Limited Partnership",
    "designation-as-a-private-fund-limited-partnership":
      "Designation as a Private Fund Limited Partnership",
    "certificate-of-designation-as-a-private-fund-limited-partnership":
      "Certificate of designation as a Private Fund Limited Partnership",
    "registration-of-a-limited-partnership":
      "Registration of a Limited Partnership",
    "registration-of-a-scottish-partnership":
      "Registration of a Scottish Partnership",
    "notice-of-ceasing-to-be-a-qualifying-partnership":
      "Notice of ceasing to be a qualifying partnership",
    "appoint-corporate-manager-european-economic-interest-groupings":
      "Appointment of corporate EEIG manager",
    "selection-of-documents-registered-before-January-1995":
      "A selection of documents registered before 1 January 1995",
    "selection-of-mortgage-documents-registered-before-January-1995":
      "A selection of mortgage documents registered before 1 January 1995",
    "selection-of-documents-registered-before-April-2014":
      "A selection of documents registered before 5 April 2014",
    "notice-of-insolvency-proceedings-for-a-further-education-or-sixth-form-college-corporation":
      "Notice of insolvency proceedings for a further education or sixth form college corporation",
    "order-of-court-restructuring-plan": "Restructuring plan",
    "order-of-court-restructuring-plan-and-change-share-capital":
      "Restructuring Plan and change in share capital",
    "liquidation-moratorium-commencement-of-moratorium":
      "Commencement of Moratorium",
    "liquidation-moratorium-extension-of-moratorium":
      "Moratorium has been ended or extended",
    "liquidation-moratorium-early-end-of-moratorium": "Early end of Moratorium",
    "liquidation-moratorium-end-of-moratorium-by-monitor":
      "End of Moratorium by a Monitor",
    "liquidation-moratorium-end-of-moratorium-by-court":
      "End of Moratorium by a Court",
    "liquidation-moratorium-end-of-moratorium-following-disposal-of-application-for-extension-by-court-or-following-cva-proposal-taking-effect-or-being-withdrawn":
      "End of Moratorium following disposal of application for extension by the court or following CVA proposal taking effect or being withdrawn",
    "liquidation-moratorium-court-order-permitting-disposal-of-goods":
      "Court order permitting disposal of property or goods",
    "liquidation-moratorium-replacement-or-additonal-monitor-following-court-order":
      "Replacement or additional monitor (following court order)",
    "liquidation-moratorium-monitor-ceasing-to-act-following-court-order":
      "Monitor ceasing to act following court",
    "registration-overseas-entity": "Registration of an overseas entity",
    "removal-overseas-entity": "Removal of an overseas entity",
    "annual-update-with-made-up-date": "Annual update made on {made_up_date}",
    "annual-update": "{original_description}"
  }
};

export default function translateFilings2(field, value) {
  return filingsTranslationTable2[field][value];
}
