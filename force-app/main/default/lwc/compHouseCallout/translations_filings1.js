//Source: https://github.com/companieshouse/api-enumerations/blob/master/filing_history_descriptions.yml

const filingsTranslationTable1 = {
  //Had to create filing_category manually
  filing_category: {
    accounts: "Accounts",
    address: "Address",
    auditors: "Auditors", //this one is really old (pre-2005)
    "annual-return": "Annual Return",
    capital: "Capital",
    "change-of-name": "Change of Name",
    "change-of-constitution": "Change of Constitution",
    dissolution: "Dissolution",
    gazette: "Gazette",
    incorporation: "Incorporation",
    insolvency: "Insolvency",
    liquidation: "Liquidation",
    miscellaneous: "Miscellaneous",
    mortgage: "Mortgage",
    officers: "Officers",
    resolution: "Resolution",
    "confirmation-statement": "Confirmation Statement",
    "persons-with-significant-control": "Persons with Significant Control",
    other: "Other"
  },

  description: {
    legacy: "description", //added this one manually for old values
    "liquidation-receiver-administrative-receivers-report":
      "Administrative Receiver's report",
    "liquidation-receiver-administrative-receivers-report-scotland":
      "Administrative Receiver's report",
    "liquidation-compulsory-notice-winding-up":
      "Notice of order of court to wind up.",
    "liquidation-voluntary-statement-of-affairs-with-form-attached":
      "Statement of affairs with form {form_attached}",
    "liquidation-voluntary-statement-of-affairs": "Statement of affairs",
    "liquidation-compulsory-appointment-liquidator":
      "Appointment of a liquidator",
    "liquidation-voluntary-resignation-liquidator":
      "Resignation of a liquidator",
    "liquidation-voluntary-leave-to-resign-liquidator":
      "Court order granting voluntary liquidator leave to resign",
    "liquidation-voluntary-removal-liquidator":
      "Certificate of removal of voluntary liquidator",
    "liquidation-voluntary-removal-of-liquidator-by-court":
      "Removal of liquidator by court order",
    "liquidation-voluntary-removal-of-liquidator-by-company-meeting":
      "Removal of liquidator by company meeting",
    "liquidation-voluntary-release-of-liquidator-by-secretary-of-state":
      "Removal of liquidator by secretary of state",
    "liquidation-voluntary-cease-to-act-as-liquidator":
      "Notice of ceasing to act as a voluntary liquidator",
    "liquidation-compulsory-return-final-meeting":
      "Notice of final account prior to dissolution",
    "liquidation-compulsory-return-final-meeting-court-scotland":
      "Final account prior to dissolution in a winding-up by the court",
    "liquidation-voluntary-death-liquidator": "Death of a liquidator",
    "liquidation-voluntary-vacation-liquidator":
      "Notice of vacation of office of voluntary liquidator",
    "liquidation-voluntary-constitution-liquidation-committee":
      "Notice of Constitution of Liquidation Committee",
    "liquidation-voluntary-creditors-paid-in-full":
      "Certificate that Creditors have been paid in full",
    "liquidation-voluntary-statement-of-receipts-and-payments-with-brought-down-date":
      "Liquidators' statement of receipts and payments to {brought_down_date}",
    "liquidation-voluntary-statement-of-receipts-and-payments":
      "Liquidators' statement of receipts and payments",
    "liquidation-voluntary-deferral-of-dissolution":
      "Notice of deferral of dissolution",
    "liquidation-voluntary-deferral-of-dissolution-scotland":
      "Order deferring the date of dissolution in MVL / CVL",
    "liquidation-voluntary-notice-of-limited-disclosure":
      "Notice of limited disclosure",
    "liquidation-voluntary-appeal":
      "Order of court on appeal against Secretary of State's decision",
    "liquidation-voluntary-declaration-of-solvency": "Declaration of solvency",
    "liquidation-voluntary-members-return-of-final-meeting":
      "Return of final meeting in a members' voluntary winding up",
    "liquidation-voluntary-members-return-of-final-meeting-scotland":
      "Final account prior to dissolution in MVL (final account attached)",
    "liquidation-voluntary-creditors-return-of-final-meeting":
      "Return of final meeting in a creditors' voluntary winding up",
    "liquidation-voluntary-creditors-return-of-final-meeting-scotland":
      "Final account prior to dissolution in CVL",
    "liquidation-voluntary-court-order-staying-or-sisting-winding-up-in-MVL-or-CVL-scotland":
      "Order staying/sisting proceedings in a winding-up in MVL or CVL",
    "liquidation-compulsory-early-completion": "Early completion of winding up",
    "liquidation-compulsory-early-completion-social-landlords":
      "Early completion of winding up",
    "liquidation-compulsory-defer-dissolution": "Dissolution deferment",
    "liquidation-compulsory-notice-secretary-of-state-for-direction":
      "Notice to Secretary of State for direction",
    "liquidation-compulsory-notice-secretary-of-state-for-direction-social-landlords":
      "Notice to Secretary of State for direction",
    "liquidation-compulsory-completion-social-landlords":
      "Completion of winding up",
    "liquidation-compulsory-return-of-final-meeting-scotland":
      "Notice of final meeting of creditors",
    "liquidation-compulsory-appointment-provisional-liquidator-scotland":
      "Appointment of a provisional liquidator",
    "liquidation-compulsory-notice-winding-up-scotland":
      "Court order notice of winding up",
    "liquidation-compulsory-notice-winding-up-order":
      "Court order notice of winding up",
    "liquidation-compulsory-notice-winding-up-order-court-scotland":
      "Court order in a winding-up (& Court Order attachment)",
    "liquidation-compulsory-completion": "Completion of winding up",
    "liquidation-voluntary-defer-dissolution":
      "Deferment of dissolution (voluntary)",
    "liquidation-compulsory-winding-up-order-with-case-start-date":
      "Order of court to wind up on {case_start_date}",
    "liquidation-compulsory-winding-up-order": "Order of court to wind up",
    "liquidation-compulsory-order-limiting-disclosure-of-statement-of-affairs-in-winding-up":
      "Notice of court order limiting disclosure of a statement of affairs in winding-up",
    "liquidation-compulsory-winding-up-progress-report":
      "Progress report in a winding up by the court",
    "liquidation-compulsory-removal-of-liquidator-by-creditors":
      "Removal of liquidator by creditors",
    "liquidation-compulsory-release-of-liquidator-or-official-receiver-by-secretary-of-state":
      "Release of liquidator or official receiver by the Secretary of State",
    "liquidation-compulsory-removal-of-liquidator-by-secretary-of-state":
      "Removal of liquidator by the Secretary of State",
    "liquidation-compulsory-death-of-liquidator":
      "Notice of liquidator's death",
    "liquidation-compulsory-loss-of-qualification-as-insolvency-practitioner":
      "Notice of loss of qualification as insolvency practitioner",
    "liquidation-compulsory-removal-of-liquidator-by-court":
      "Notice of removal of liquidator by court",
    "liquidation-compulsory-early-dissolution-court-scotland":
      "Court order for early dissolution in a winding-up by the court",
    "liquidation-compulsory-defer-dissolution-court-scotland":
      "Court order to defer dissolution in a winding-up by the court",
    "liquidation-compulsory-staying-or-sisting-proceedings-scotland":
      "Court order staying or sisting proceedings in a winding-up by the court",
    "liquidation-in-administration-appointment-of-administrator":
      "Appointment of an administrator",
    "liquidation-in-administration-appointment-of-a-replacement-or-additional-administrator":
      "Notice of appointment of a replacement or additional administrator",
    "liquidation-in-administration-appointment-of-a-replacement-or-additional-administrator-scotland":
      "Appointment of replacement or additional administrator",
    "liquidation-in-administration-order-limiting-disclosure-of-statement-of-affairs-or-proposals":
      "Notice of order limiting disclosure of statement of affairs or proposals",
    "liquidation-in-administration-order-limiting-disclosure-of-statement-of-affairs-or-proposals-scotland":
      "Order limiting disclosure of statement of affairs or proposals in administration",
    "liquidation-in-administration-rescission-or-amendment-of-order-limiting-disclosure-of-statement-of-affairs-or-proposals":
      "Notice of rescission or amendment of order limiting disclosure of statement of affairs or proposals in administration",
    "liquidation-in-administration-rescission-or-amendment-of-order-limiting-disclosure-of-statement-of-affairs-or-proposals-scotland":
      "Discharge or variation of order limiting disclosure of statement of affairs or proposals in administration",
    "liquidation-in-administration-statement-of-affairs-with-form-attached":
      "Statement of affairs with form {form_attached}",
    "liquidation-in-administration-statement-of-affairs-with-form-attached-scotland":
      "Statement of affairs {form_attached}",
    "liquidation-in-administration-statement-of-affairs":
      "Statement of affairs",
    "liquidation-in-administration-statement-of-affairs-scotland":
      "Statement of affairs",
    "liquidation-in-administration-proposals":
      "Statement of administrator's proposal",
    "liquidation-in-administration-extension-of-time":
      "Notice of extension of time period of the administration",
    "liquidation-in-administration-extension-of-time-deliver-scotland":
      "Notice of Extension of time to deliver administrator’s proposals",
    "liquidation-in-administration-extension-of-time-approval-scotland":
      "Notice of Extension of time to seek approval of administrator's proposals",
    "liquidation-in-administration-revised-proposals":
      "Statement of administrator's revised proposal",
    "liquidation-in-administration-result-creditors-meeting":
      "Result of meeting of creditors",
    "liquidation-in-administration-revision-administrators-proposals-scotland":
      "Revision of administrator’s proposals",
    "liquidation-in-administration-result-creditors-decision-scotland":
      "Creditors’ decision on administrator’s proposals",
    "liquidation-in-administration-progress-report-with-brought-down-date":
      "Administrator's progress report to {brought_down_date}",
    "liquidation-in-administration-progress-report":
      "Administrator's progress report",
    "liquidation-in-administration-amended-certificate-of-constitution-creditors-committee":
      "Amended certificate of constitution of creditors' committee",
    "liquidation-in-administration-change-in-committee-membership":
      "Administrator's notice of a change in committee membership",
    "liquidation-in-administration-notice-of-order-deal-with-charged-property":
      "Notice of order to deal with charged property",
    "liquidation-in-administration-notice-of-order-deal-with-charged-property-scotland":
      "Order to deal with charged property",
    "liquidation-in-administration-automatic-end-of-case":
      "Notice of automatic end of Administration",
    "liquidation-in-administration-automatic-end-of-case-scotland":
      "Automatic end of Administration",
    "liquidation-in-administration-extension-of-period":
      "Notice of extension of period of Administration",
    "liquidation-in-administration-end-of-administration":
      "Notice of end of Administration",
    "liquidation-in-administration-court-order-ending-administration":
      "Notice of a court order ending Administration",
    "liquidation-in-administration-move-to-creditors-voluntary-liquidation":
      "Notice of move from Administration case to Creditors Voluntary Liquidation",
    "liquidation-in-administration-move-to-dissolution-with-case-end-date":
      "Notice of move from Administration to Dissolution on {case_end_date}",
    "liquidation-in-administration-move-to-dissolution":
      "Notice of move from Administration to Dissolution",
    "liquidation-in-administration-change-date-of-dissolution":
      "Notice to Registrar in respect of date of dissolution",
    "liquidation-in-administration-change-date-of-dissolution-scotland":
      "Notice of court order in respect of date of dissolution",
    "liquidation-in-administration-resignation-of-administrator":
      "Notice of resignation of an administrator",
    "liquidation-in-administration-vacation-of-office":
      "Notice of vacation of office by administrator",
    "liquidation-in-administration-removal-of-administrator-from-office":
      "Notice of order removing administrator from office",
    "liquidation-in-administration-removal-of-administrator-from-office-scotland":
      "Order removing administrator from office",
    "liquidation-in-administration-administrator-ceasing-to-be-qualified-to-act":
      "Notice of administrator ceasing to be qualified to act",
    "liquidation-in-administration-administrator-ceasing-to-be-qualified-to-act-scotland":
      "Notice of vacation of office when administrator ceases to be qualified to act",
    "liquidation-in-administration-administrator-deceased":
      "Notice of administrator's death",
    "liquidation-in-administration-administrator-deceased-scotland":
      "Notice of deceased administrator",
    "liquidation-in-administration-appointment-of-replacement-additional-administrator":
      "Notice of appointment of replacement/additional administrator",
    "liquidation-in-administration-appointment-of-replacement-additional-adminstrator":
      "Notice of appointment of replacement/additional administrator",
    "liquidation-in-administration-appointment-of-administrator-scotland":
      "Appointment of an administrator",
    "liquidation-in-administration-notice-of-statement-of-affairs-scotland-with-form-attached":
      "Statement of affairs with form {form_attached}",
    "liquidation-in-administration-notice-of-statement-of-affairs-scotland":
      "Statement of affairs",
    "liquidation-in-administration-proposals-scotland":
      "Statement of administrator's proposal",
    "liquidation-in-administration-notice-administrators-proposals-scotland":
      "Notice of Administrator's proposal",
    "liquidation-in-administration-revised-proposals-scotland":
      "Statement of administrator's revised proposal",
    "liquidation-in-administration-creditor-decision-revised-proposals-scotland":
      "Result of creditors’ decision on revised administrator’s proposals",
    "liquidation-in-administration-deemed-proposal-scotland":
      "Statement of administrator's deemed proposal",
    "liquidation-in-administration-result-of-creditors-meeting-scotland":
      "Notice of result of meeting of creditors",
    "liquidation-in-administration-progress-report-scotland-with-brought-down-date":
      "Administrator's progress report to {brought_down_date}",
    "liquidation-in-administration-progress-report-scotland":
      "Administrator's progress report",
    "liquidation-in-administration-order-to-deal-with-secured-property-scotland":
      "Notice of order to deal with secured property",
    "liquidation-in-administration-automatic-end-scotland":
      "Notice of automatic end of Administration",
    "liquidation-in-administration-extension-of-period-scotland":
      "Notice of extension of period of Administration",
    "liquidation-in-administration-end-of-administration-scotland":
      "Notice of end of Administration",
    "liquidation-in-administration-end-of-administration-scotland-2":
      "End of Administration",
    "liquidation-in-administration-court-order-ending-administration-scotland":
      "Notice of court order ending Administration",
    "liquidation-in-administration-court-order-ending-administration-scotland-2":
      "Notice of a court order ending Administration",
    "liquidation-in-administration-move-to-creditors-voluntary-liquidation-scotland":
      "Notice of move from Administration to Creditors Voluntary Liquidation",
    "liquidation-in-administration-move-to-creditors-voluntary-liquidation-scotland-2":
      "Move from Administration case to Creditor's Voluntary Liquidation",
    "liquidation-in-administration-move-to-dissolution-scotland":
      "Notice of move from Administration to Dissolution",
    "liquidation-in-administration-move-to-dissolution-scotland-2":
      "Move from Administration to Dissolution",
    "liquidation-in-administration-date-of-dissolution-scotland":
      "Notice to Registrar in respect of date of dissolution",
    "liquidation-in-administration-resignation-of-administrator-scotland":
      "Notice of resignation of administrator",
    "liquidation-in-administration-resignation-of-administrator-scotland-2":
      "Resignation of an administrator",
    "liquidation-in-administration-vacation-of-office-scotland":
      "Notice of vacation of office by administrator",
    "liquidation-in-administration-appointment-of-replacement-additional-administrator-scotland":
      "Notice of appointment of replacement/additional administrator",
    "liquidation-in-administration-court-order-under-section-176A":
      "Notice to Registrar of companies in respect of order under section 176A",
    "liquidation-receiver-appointment-of-receiver-scotland":
      "Notice of the appointment of receiver by a holder of a floating charge",
    "liquidation-receiver-appointment-of-receiver-scotland-2":
      "Appointment of Administrative Receiver, Receiver or Manager",
    "liquidation-voluntary-arrangement-meeting-approving-creditors-voluntary-arrangement-scotland":
      "Notice of report of meeting approving voluntary arrangement",
    "liquidation-voluntary-arrangement-revocation-or-suspension-of-voluntary-arrangement-scotland":
      "Notice of order of revocation or suspension of voluntary arrangement",
    "liquidation-voluntary-arrangement-revocation-or-suspension-of-voluntary-arrangement-scotland-2":
      "Revocation or suspension of CVA",
    "liquidation-voluntary-supervisors-abstracts-of-receipts-payments-scotland-with-brought-down-date":
      "Notice of voluntary arrangement supervisor's abstract of receipts and payments to {brought_down_date}",
    "liquidation-voluntary-supervisors-abstracts-of-receipts-payments-scotland":
      "Notice of voluntary arrangement supervisor's abstract of receipts and payments",
    "liquidation-voluntary-arrangement-notice-completion-scotland":
      "Notice of completion of voluntary arrangement",
    "liquidation-receiver-appointment-of-receiver-by-court-scotland":
      "Notice of the appoinment of a receiver by the court",
    "liquidation-administration-order-to-deal-secured-property-scotland":
      "Notice of order to deal with secured property",
    "liquidation-administration-variation-of-administration-order-scotland":
      "Notice of variation of an Administration Order",
    "liquidation-administration-notice-of-administration-order-scotland":
      "Notice of Administration Order",
    "liquidation-administration-dismissal-of-petition-scotland":
      "Notice of dismissal of petition for Administration Order",
    "liquidation-administration-discharge-of-administration-order-scotland":
      "Notice of discharge of Administration Order",
    "liquidation-administration-statement-of-administrators-proposals-scotland":
      "Statement of administrator's proposal",
    "liquidation-administration-notice-deemed-approval-of-proposals-northern-ireland":
      "Notice of deemed approval of proposals",
    "liquidation-administration-administrators-abstracts-of-receipts-and-payments-scotland-with-brought-down-date":
      "Administrator's abstract of receipts and payments to {brought_down_date}",
    "liquidation-administration-administrators-abstracts-of-receipts-and-payments-scotland":
      "Administrator's abstract of receipts and payments",
    "liquidation-receiver-ceasing-to-act-scotland":
      "Notice of ceasing to act as receiver or manager",
    "liquidation-receiver-dispose-of-secured-property-scotland":
      "Notice of authorisation to dispose of secured property",
    "liquidation-receiver-receivers-report-scotland":
      "Notice of receiver's report",
    "liquidation-receiver-receivers-abstracts-of-receipts-and-payments-scotland":
      "Receiver/Manager's abstract of receipts and payments",
    "liquidation-receiver-death-of-receiver-scotland": "Death of receiver",
    "liquidation-receiver-death-of-receiver-scotland-2":
      "Deceased Administrative Receiver",
    "liquidation-voluntary-removal-of-receiver-scotland":
      "Certificate of removal of liquidator",
    "liquidation-voluntary-removal-of-liquidator-scotland":
      "Notice of removal of liquidator",
    "liquidation-voluntary-release-of-liquidator-scotland":
      "Certificate of release of liquidator by accountant of court",
    "liquidation-voluntary-certificate-release-of-liquidator-scotland":
      "Certificate of release of liquidator",
    "liquidation-voluntary-court-order-of-resignation-of-liquidator-scotland":
      "Court order of resignation of liquidator ",
    "liquidation-voluntary-resignation-of-liquidator-scotland":
      "Notice of resignation of liquidator",
    "liquidation-voluntary-death-of-liquidator-scotland":
      "Notice of death of liquidator",
    "liquidation-voluntary-vacation-of-liquidator-scotland":
      "Notice of vacation of liquidator",
    "liquidation-compulsory-winding-up-order-scotland":
      "Notice of winding up order",
    "liquidation-voluntary-certificate-of-continuance-scotland":
      "Liquidator's certificate of continuance",
    "liquidation-voluntary-continuance-scotland":
      "Constitution of continuance liquidation creditors committee",
    "liquidation-voluntary-creditors-paid-in-full-scotland":
      "Liquidator's certificate that creditors have been paid in full",
    "liquidation-voluntary-certificate-creditors-paid-in-full-scotland":
      "Certificate that creditors have been paid in full",
    "liquidation-voluntary-declaration-of-solvency-scotland":
      "Declaration of solvency",
    "liquidation-voluntary-return-of-final-meeting-scotland":
      "Return of final meeting of voluntary winding up",
    "liquidation-compulsory-court-order-sisting-scotland":
      "Notice of court order sisting proceedings in a winding up",
    "liquidation-voluntary-notice-under-section-204-scotland":
      "Notice under Section 204(6) or 205(6)",
    "liquidation-voluntary-creditors-voluntary-winding-up-scotland":
      "Confirmation of creditors' voluntary winding up",
    "liquidation-voluntary-liquidators-statement-of-receipts-payments-scotland":
      "Statement of receipts and payments",
    "liquidation-voluntary-appointment-of-liquidator":
      "Appointment of a voluntary liquidator",
    "liquidation-voluntary-arrangement-meeting-approving-companies-voluntary-arrangement":
      "Notice to Registrar of companies voluntary arrangement taking effect",
    "liquidation-voluntary-arrangement-meeting-approving-companies-voluntary-arrangement-scotland":
      "Voluntary arrangement taking effect",
    "liquidation-voluntary-arrangement-revocation-or-suspension":
      "Order of revocation or suspension of voluntary arrangement",
    "liquidation-cva-supervisors-abstract-of-receipts-payments-with-brought-down-date":
      "Voluntary arrangement supervisor's abstract of receipts and payments to {brought_down_date}",
    "liquidation-cva-supervisors-abstracts-of-receipts-payments":
      "Voluntary arrangement supervisor's abstract of receipts and payments",
    "liquidation-voluntary-arrangement-supervisors-progress-report-scotland":
      "Supervisor’s progress report in CVA",
    "liquidation-voluntary-arrangement-completion-with-date":
      "Notice of completion of voluntary arrangement on {case_end_date}",
    "liquidation-voluntary-arrangement-completion":
      "Notice of completion of voluntary arrangement",
    "liquidation-voluntary-arrangement-completion-scotland":
      "Termination or full implementation of CVA",
    "liquidation-administration-notice-of-administration-order":
      "Notice of Administration Order",
    "liquidation-administration-order": "Administration Order",
    "liquidation-administration-administrators-abstracts-of-receipts-and-payments-with-brought-down-date":
      "Administrator's abstract of receipts and payments to {brought_down_date}",
    "liquidation-administration-administrators-abstracts-of-receipts-and-payments":
      "Administrator's abstract of receipts and payments",
    "liquidation-administration-order-to-deal-charged-property":
      "Notice of order to deal with charged property",
    "liquidation-administration-discharge-of-administration-order":
      "Notice of discharge of Administration Order",
    "liquidation-administration-variation-of-administration-order":
      "Notice of variation of an Administration Order",
    "liquidation-administration-proposals":
      "Statement of administrator's proposal",
    "liquidation-administration-meeting-of-creditors":
      "Notice of result of meeting of creditors",
    "liquidation-receiver-statement-of-affairs":
      "Statement of Affairs in administrative receivership following report to creditors",
    "liquidation-receiver-amended-certificate-of-constitution":
      "Amended certificate of constitution of creditors' committee",
    "liquidation-receiver-report-change-of-committee":
      "Administrator's report of a change in committee membership",
    "liquidation-receiver-abstract-of-receipts-and-payments-with-brought-down-date":
      "Receiver's abstract of receipts and payments to {brought_down_date}",
    "liquidation-receiver-abstract-of-receipts-and-payments":
      "Receiver's abstract of receipts and payments",
    "liquidation-receiver-death-of-receiver":
      "Notice of adminstrative receivers' death",
    "liquidation-receiver-order-to-dispose-of-charged-property":
      "Notice of order to dispose of charged property",
    "liquidation-receiver-order-to-dispose-of-charged-property-scotland":
      "Authorisation to dispose of secured property",
    "liquidation-administration-approval-of-proposals-scotland":
      "Notice of deemed approval of proposals",
    "liquidation-voluntary-determination": "Determination",
    "liquidation-administration-notice-of-petition-scotland":
      "Notice of Petition for Administration Order",
    "liquidation-insolvency-judgement-overseas": "Insolvency judgement",
    "liquidation-voluntary-arrangement-commencement-of-moratorium":
      "Commencement of moratorium",
    "liquidation-voluntary-arrangement-extension-of-moratorium":
      "Extension or further extension of moratorium",
    "liquidation-voluntary-arrangement-ending-of-moratorium":
      "End of moratorium",
    "liquidation-voluntary-arrangement-withdrawal-of-consent":
      "Withdrawal of nominee's consent to act",
    "liquidation-voluntary-arrangement-replacement-nominee":
      "Appointment of replacement nominee",
    "liquidation-voluntary-arrangement-commencement-of-moratorium-scotland":
      "Commencement of moratorium",
    "liquidation-voluntary-arrangement-extension-of-moratorium-scotland":
      "Extension or further extension of moratorium",
    "liquidation-voluntary-arrangement-ending-of-moratorium-scotland":
      "End of moratorium",
    "liquidation-voluntary-arrangement-withdrawal-of-consent-scotland":
      "Withdrawal of nominee's consent to act",
    "liquidation-voluntary-arrangement-replacement-nominee-scotland":
      "Appointment of replacement nominee",
    "liquidation-voluntary-arrangement-decision-to-extend-moratorium":
      "Decision to extend moratorium",
    "liquidation-voluntary-arrangement-continuation-of-moratorium-scotland":
      "Continuation of moratorium",
    "liquidation-voluntary-arrangement-court-order-to-extend-moratorium":
      "Court order to extend moratorium",
    "liquidation-voluntary-arrangement-court-order-to-extend-moratorium-scotland":
      "Court order to extend moratorium",
    "liquidation-voluntary-arrangement-or-moratorium-court-order":
      "Court order in respect of a voluntary arrangement or moratorium",
    "liquidation-voluntary-arrangement-or-moratorium-court-order-scotland":
      "Court order in respect of a voluntary arrangement",
    "liquidation-voluntary-arrangement-disposal-of-charged-property-moratorium-scotland":
      "Disposal of charged property during a moratorium",
    "liquidation-administration-statement-of-affairs-scotland":
      "Statement of affairs",
    "liquidation-administration-statement-of-concurrence-scotland":
      "Statement of concurrence",
    "liquidation-miscellaneous": "Insolvency filing",
    "liquidation-court-order-miscellaneous": "Insolvency court order",
    "liquidation-resolution-miscellaneous": "Insolvency resolution",
    "liquidation-regulations-onset-of-insolvency-overseas":
      "EC Regs onset of insolvency",
    "liquidation-voluntary-notice-order-under-section-176a":
      "Notice to Registrar of companies in respect of order under section 176A",
    "liquidation-court-order-to-stay-winding-up":
      "Order of court to stay winding up",
    "liquidation-court-order-to-unstay-winding-up":
      "Order of court to unstay winding up",
    "liquidation-court-order-recall-provisional-liquidator":
      "Order of court recall of provisional liquidator",
    "liquidation-court-order-limiting-disclosure":
      "Order of court limiting disclosure",
    "liquidation-appointment-of-provisional-liquidator":
      "Appointment of provisional liquidator",
    "liquidation-appointment-of-provisional-liquidator-court-scotland":
      "Appointment of provisional liquidator in a winding-up by the court (& Court Order attachment)",
    "liquidation-court-order-early-dissolution":
      "Order of court for early dissolution",
    "liquidation-court-order-to-rescind-winding-up":
      "Order of court to rescind winding up",
    "liquidation-voluntary-extraordinary-resolution-to-wind-up-with-case-start-date":
      "Extraordinary resolution to wind up on {case_start_date}",
    "liquidation-voluntary-extraordinary-resolution-to-wind-up":
      "Extraordinary resolution to wind up",
    "liquidation-voluntary-special-resolution-to-wind-up":
      "Special resolution to wind up",
    "liquidation-voluntary-special-resolution-to-wind-up-case-start-date":
      "Special resolution to wind up on {case_start_date}",
    "liquidation-compulsory-release-official-receiver":
      "Court order to release official receiver",
    "liquidation-miscellaneous-northern-ireland": "Insolvency filing",
    "liquidation-administrators-abstracts-northern-ireland":
      "Administrator's abstract of receipts and payments",
    "liquidation-notice-order-of-charged-property-northern-ireland":
      "Notice of order to deal with charged property",
    "liquidation-discharge-of-administration-order-northern-ireland":
      "Notice of discharge of Administration Order",
    "liquidation-discharge-administration-order--northern-ireland":
      "Notice of discharge of Administration Order",
    "liquidation-variation-of-administration-order-northern-ireland":
      "Notice of variation of an Administration Order",
    "liquidation-statement-of-proposals-northern-ireland":
      "Statement of administrator's proposal",
    "liquidation-result-of-creditors-meeting-northern-ireland":
      "Notice of result of meeting of creditors",
    "liquidation-voluntary-notice-to-gazette-appointment-of-liquidator":
      "Notice to the Gazette of an appointment of a liquidator",
    "liquidation-appointment-of-liquidator-overseas":
      "Appointment of a liquidator of an overseas company",
    "liquidation-insolvency-proceedings-overseas":
      "Insolvency proceedings against an overseas company",
    "liquidation-insolvency-proceedings-limited-liability-partnership":
      "Insolvency proceedings",
    "liquidation-winding-up-overseas": "Winding up of an overseas company",
    "liquidation-cessation-of-insolvency-proceedings-overseas":
      "Cessation of an overseas company subject to insolvency proceedings",
    "liquidation-insolvency-misellaneous-northern-ireland": "Insolvency filing",
    "liquidation-court-order-insolvency-northern-ireland":
      "Insolvency court order",
    "liquidation-voluntary-notice-revised-account": "Notice of revised account",
    "liquidation-compulsory-statement-of-affairs": "Statement of affairs",
    "liquidation-termination-of-provisional-liquidator":
      "Notice of termination of appointment of provisional liquidator",
    "liquidation-termination-of-provisional-liquidator-court-scotland":
      "Termination of appointment of provisional liquidator in a winding-up by the court",
    "liquidation-voluntary-resignation-as-liquidator":
      "Notice of resignation of liquidator",
    "liquidation-voluntary-removal-of-liquidator": "Removal of liquidator",
    "liquidation-administration-notice-deemed-approval-of-proposals":
      "Notice of deemed approval of proposals",
    "liquidation-in-administration-notice-deemed-approval-of-proposals-scotland":
      "Approval of administrator’s proposals",
    "liquidation-early-completion-of-winding-up-northern-ireland":
      "Early completion of winding up",
    "liquidation-defer-dissolution-dissolution":
      "Deferment of compulsory dissolution",
    "liquidation-appointment-of-liquidator": "Appointment of a liquidator",
    "liquidation-appointment-of-liquidator-limited-liability-partnership":
      "Appointment of a liquidator",
    "liquidation-receiver-appointment-of-receiver":
      "Appointment of receiver or manager",
    "liquidation-receiver-cease-to-act-receiver":
      "Notice of ceasing to act as receiver or manager",
    "liquidation-receiver-cease-to-act-receiver-scotland":
      "Cease to act as Administrative Receiver, Receiver or Manager",
    "liquidation-receiver-appointment-of-receiver-limited-liability-partnership":
      "Appointment of receiver or manager",
    "liquidation-receiver-cease-to-act-receiver-limited-liability-partnership":
      "Notice of ceasing to act as receiver or manager",
    "liquidation-administration-court-order-limited-disclosure":
      "Order of court for limited disclosure of proposals",
    "liquidation-statement-of-concurrence": "Statement of concurrence",
    "liquidation-certificate-creditors-paid-in-full":
      "Certificate that Creditors have been paid in full",
    "liquidation-all-constitution-of-committee":
      "Notice of Constitution of Committee",
    "liquidation-disclaimer-notice":
      "Notice to Registrar of Companies of Notice of disclaimer",
    "liquidation-administration-result-of-meeting-scotland":
      "Notice of result of meeting of creditors",
    "liquidation-administration-insufficient-property-scotland":
      "Notice of insufficient property for distribution to unsecured creditors other than by virtue of S176A(2)(A)",
    "liquidation-termination-of-winding-up-societas-europaea":
      "Notice of initiation or termination of winding up , liquidation, insolvency, cessation of payment procedures and decision to continue operating",
    "liquidation-appointment-receiver-northern-ireland":
      "Appointment of receiver",
    "liquidation-special-resolution-to-wind-up-northern-ireland":
      "Special resolution to wind up",
    "liquidation-appointment-of-receiver-northern-ireland":
      "Appointment of receiver",
    "liquidation-appointmentt-of-administrator-northern-ireland":
      "Appointment of an administrator",
    "liquidation-statement-of-affairs-northern-ireland": "Statement of affairs",
    "liquidation-administrators-proposals-northern-ireland":
      "Statement of administrator's proposal",
    "liquidation-extension-of-time-northern-ireland":
      "Notice of extension of time period",
    "liquidation-revised-proposals-northern-ireland":
      "Statement of administrator's revised proposal",
    "liquidation-progress-report-northern-ireland-with-brought-down-date":
      "Administrator's progress report to {brought_down_date}",
    "liquidation-progress-report-northern-ireland":
      "Administrator's progress report",
    "liquidation-amended-certificate-creditors-committee-northern-ireland":
      "Amended certificate of constitution of creditors' committee",
    "liquidation-change-in-committee-membership-northern-ireland":
      "Notice of administrator's notice of a change in committee membership",
    "liquidation-order-to-deal-with-charged-property-northern-ireland":
      "Notice of order to deal with charged property",
    "liquidation-automatic-end-northern-ireland":
      "Notice of automatic end of Administration",
    "liquidation-automatic-end-scotland":
      "Notice of automatic end of Administration",
    "liquidation-extension-of-period-northern-ireland":
      "Notice of extension of period of Administration",
    "liquidation-end-of-administration-northern-ireland":
      "Notice of end of Administration",
    "liquidation-court-order-ending-administration-northern-ireland":
      "Notice of court order ending Administration",
    "liquidation-move-to-creditors-voluntary-liquidation-northern-ireland":
      "Notice of move from Administration to Creditors Voluntary Liquidation",
    "liquidation-move-to-dissolution-northern-ireland":
      "Notice to move from Administration to Dissolution",
    "liquidation-date-of-dissolution-northern-ireland":
      "Notice to Registrar in respect of date of dissolution",
    "liquidation-resignation-of-administrator-northern-ireland":
      "Notice of resignation of administrator",
    "liquidation-vacation-of-office-northern-ireland":
      "Notice of vacation of office by administrator",
    "liquidation-appt-of-replacement-additional-adminstrator-northern-ireland":
      "Appointment of replacement/additional administrator",
    "liquidation-meeting-approving-companies-voluntary-arrangement-northern-ireland":
      "Notice to Registrar of voluntary arrangement taking effect",
    "liquidation-revocation-or-suspension-of-voluntary-arrangement-northern-ireland":
      "Order of revocation or suspension of voluntary arrangement",
    "liquidation-supervisors-abstracts-of-receipts-payments-northern-ireland":
      "Voluntary arrangement's supervisor's abstract of receipts and payments",
    "liquidation-completion-of-voluntary-arrangement-northern-ireland":
      "Notice of completion of voluntary arrangement",
    "liquidation-commencement-of-moratorium-northern-ireland":
      "Commencement of moratorium",
    "liquidation-extension-northern-ireland":
      "Extension or further extension of moratorium",
    "liquidation-ending-of-moratorium-northern-ireland": "End of moratorium",
    "liquidation-withdrawal-of-consent-northern-ireland":
      "Notice to Registrar by nominee of withdrawel of consent to act",
    "liquidation-replacement-nominee-northern-ireland":
      "Notice to Registrar of a replacement nominee",
    "liquidation-court-order-under-section-176a-northern-ireland":
      "Notice to registrar of companies in respect of order under section 176A",
    "liquidation-statement-of-affairs-administrative-receiver-northern-ireland":
      "Statement of Affairs in Administrative Receivership",
    "liquidation-certificate-of-constitution-creditors-northern-ireland":
      "Amended certificate of constitution of creditors' committee",
    "liquidation-administrative-receivers-abstracts-northern-ireland-with-brought-down-date":
      "Administrative Receiver's/Receiver Manager's abstract of receipts and payments to {brought_down_date}",
    "liquidation-administrative-receivers-abstracts-northern-ireland":
      "Administrative Receiver's/Receiver Manager's abstract of receipts and payments",
    "liquidation-receiver-death-of-receiver-northern-ireland":
      "Death of administrative receiver",
    "liquidation-notice-of-order-to-dispose-of-charged-property-northern-ireland":
      "Notice of order to dispose of charged property",
    "liquidation-administrative-receivers-report-northern-ireland":
      "Administrative Receiver's report",
    "liquidation-completion-of-winding-up-northern-ireland":
      "Completion of winding up",
    "liquidation-appointment-of-provisional-liquidator-northern-ireland":
      "Appointment of provisional liquidator in winding up",
    "liquidation-leave-to-resign-as-liquidator-northern-ireland":
      "Order of court granting voluntary liquidator leave to resign",
    "liquidation-removal-of-liquidator-northern-ireland":
      "Certificate of removal of voluntaryliquidator",
    "liquidation-certificate-creditors-paid-in-full-northern-ireland":
      "Certificate that Creditors have been paid in full",
    "liquidation-appeal-against-department-northern-ireland":
      "Order of Court on Appeal Against Department of Enterprise Trade and Economic Development",
    "liquidation-court-order-winding-up-northern-ireland":
      "Order of court to wind up",
    "liquidation-appointment-of-liquidator-northern-ireland":
      "Appointment of liquidator compulsory",
    "liquidation-resignation-as-liquidator-northern-ireland":
      "Notice of resignation of liquidator compulsory",
    "liquidation-cease-to-act-as-liquidator-northern-ireland":
      "Notice of ceasing to act as a voluntary liquidator",
    "liquidation-notice-of-final-meeting-of-creditors-northern-ireland":
      "Notice of final meeting of creditors",
    "liquidation-death-of-liquidator-northern-ireland": "Death of liquidator",
    "liquidation-vacation-of-liquidator-northern-ireland":
      "Notice of vacation of office by voluntary liquidator",
    "liquidation-constitution-of-liquidation-committee-northern-ireland":
      "Notice of Constitution of Committee",
    "liquidation-liquidation-statement-of-receipts-and-payments-northern-ireland-with-brought-down-date":
      "Statement of receipts and payments to {brought_down_date}",
    "liquidation-liquidation-statement-of-receipts-and-payments-northern-ireland":
      "Statement of receipts and payments",
    "liquidation-declaration-of-solvency-northern-ireland":
      "Declaration of solvency",
    "liquidation-return-of-final-meeting-members-voluntary-winding-up-northern-ireland":
      "Return of final meeting in a members' voluntary winding up",
    "liquidation-return-of-final-meeting-creditors-voluntary-winding-up-northern-ireland":
      "Return of final meeting in a creditors' voluntary winding up",
    "liquidation-all-statement-of-concurrence": "Statement of concurrence",
    "liquidation-in-adminstration-deemed-proposal-scotland":
      "Statement of adminstrator's deemed proposal",
    "liquidation-establishment-of-creditors-or-liquidation-committee":
      "Establishment of creditors or liquidation committee",
    "liquidation-establishment-of-creditors-or-liquidation-committee-scotland":
      "Establishment of creditors' committee (Administration)",
    "liquidation-change-of-membership-of-creditors-or-liquidation-committee":
      "Change of membership of creditors or liquidation committee",
    "liquidation-change-of-membership-of-creditors-or-liquidation-committee-scotland":
      "Change of membership of creditors' committee (Administration)",
    "liquidation-continuation-of-creditors-committee":
      "Continuation of creditors committee",
    "liquidation-cessation-of-committee": "Cessation of liquidation committee",
    "liquidation-proceedings-member-state-with-consent-to-dissolution":
      "Statement of insolvency proceedings in another member state with consent to dissolution of the company",
    "liquidation-proceedings-member-state-with-consent-to-dissolution-scotland":
      "Statement of insolvency proceedings in another member state with consent to dissolution of the company",
    "liquidation-proceedings-member-state-with-consent-to-dissolution-northern-ireland":
      "Statement of insolvency proceedings in another member state with consent to dissolution of the company",
    "liquidation-proceedings-member-state-without-consent-to-dissolution":
      "Statement of insolvency proceedings in another member state without consent to dissolution of the company",
    "liquidation-proceedings-member-state-without-consent-to-dissolution-scotland":
      "Statement of insolvency proceedings in another member state without consent to dissolution of the company",
    "liquidation-proceedings-member-state-without-consent-to-dissolution-northern-ireland":
      "Statement of insolvency proceedings in another member state without consent to dissolution of the company",
    "mortgage-create-with-deed-with-charles-court-order-extend-with-charge-number-charge-creation-date":
      "Registration of a charge with Charles court order to extend. Charge code {charge_number}, created on {charge_creation_date}",
    "mortgage-create-with-deed-with-charge-number-charge-creation-date":
      "Registration of charge {charge_number}, created on {charge_creation_date}",
    "mortgage-create-with-deed-with-charge-number":
      "Registration of charge {charge_number}",
    "mortgage-create-with-deed": "Registration of a charge",
    "mortgage-acquire-with-deed-with-charles-court-order-extend-with-charge-number-charge-acquisition-date":
      "Registration of an acquisition with Charles court order to extend. Charge code {charge_number}, acquired on {property_acquired_date}",
    "mortgage-acquire-with-deed-with-court-order-extend-with-charge-number-charge-acquisition-date":
      "Registration of an acquisition with court order to extend. Charge code {charge_number}, acquired on {property_acquired_date}",
    "mortgage-acquire-with-deed-with-charge-number-charge-acquisition-date":
      "Registration of acquisition {charge_number}, acquired on {property_acquired_date}",
    "mortgage-acquire-with-deed-with-charge-number":
      "Registration of acquisition {charge_number}",
    "mortgage-acquire-with-deed": "Registration of an acquisition",
    "mortgage-debenture-with-deed-with-charles-court-order-extend-with-charge-number-charge-creation-date":
      "Registration of a series of debentures with Charles court order to extend. Charge code {charge_number}, created on {charge_creation_date}",
    "mortgage-debenture-with-deed-with-court-order-extend-with-charge-number-charge-creation-date":
      "Registration of a series of debentures with court order to extend. Charge code {charge_number}, created on {charge_creation_date}",
    "mortgage-debenture-with-deed-with-charge-number-charge-creation-date":
      "Registration of a series of debentures {charge_number}, created on {charge_creation_date}",
    "mortgage-debenture-with-deed": "Registration of a series of debentures",
    "mortgage-satisfy-charge-full-with-date":
      "Satisfaction of charge {charge_number} in full on {mortgage_satisfaction_date}",
    "mortgage-satisfy-charge-full":
      "Satisfaction of charge {charge_number} in full",
    "mortgage-satisfy-charge-part-with-date":
      "Satisfaction of charge {charge_number} in part on {mortgage_satisfaction_date}",
    "mortgage-satisfy-charge-part":
      "Satisfaction of charge {charge_number} in part",
    "mortgage-satisfy-charge": "Satisfaction of a charge",
    "mortgage-charge-whole-release-with-charge-number-satisfaction-date":
      "All of the property or undertaking has been released from charge {charge number} on {mortgage_satisfaction_date}",
    "mortgage-charge-whole-release-with-charge-number":
      "All of the property or undertaking has been released from charge {charge_number}",
    "mortgage-charge-whole-cease-with-charge-number-satisfaction-date":
      "All of the property or undertaking no longer forms part of charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-whole-cease-with-charge-number":
      "All of the property or undertaking no longer forms part of charge {charge_number}",
    "mortgage-charge-whole-cease-and-release-with-charge-number-satisfaction-date":
      "All of the property or undertaking has been released and no longer forms part of charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-whole-cease-and-release-with-charge-number":
      "All of the property or undertaking has been released and no longer forms part of charge {charge_number}",
    "mortgage-charge-part-release-with-charge-number-satisfaction-date":
      "Part of the property or undertaking has been released from charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-part-release-with-charge-number":
      "Part of the property or undertaking has been released from charge  {charge_number}",
    "mortgage-charge-part-cease-with-charge-number-satisfaction-date":
      "Part of the property or undertaking no longer forms part of charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-part-cease-with-charge-number":
      "Part of the property or undertaking no longer forms part of charge {charge_number}",
    "mortgage-charge-part-cease-and-release-with-charge-number-satisfaction-date":
      "Part of the property or undertaking has been released and no longer forms part of charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-part-both-with-charge-number":
      "Part of the property or undertaking has been released and no longer forms part of charge {charge_number}",
    "mortgage-release-cease-charge":
      "Property or undertaking has been released or no longer forms part of the charge",
    "mortgage-trustee-acting-as":
      "Statement of company acting as a trustee on charge {charge_number}",
    "mortgage-alter-charge-with-charge-number-charge-creation-date":
      "Alteration to charge {charge_number}, created on {charge_creation_date}",
    "mortgage-alter-charge-with-charge-number":
      "Alteration to charge {charge_number}",
    "mortgage-alter-charge": "Alteration to a charge",
    "mortgage-create-without-deed-with-charles-court-order-extend-with-charge-number-charge-creation-date":
      "Registration of a charge with Charles court order to extend. Charge code {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-create-without-deed-with-court-order-extend-with-charge-number-charge-creation-date":
      "Registration of a charge with court order to extend. Charge code {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-create-without-deed-with-charge-number-charge-creation-date":
      "Registration of charge {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-create-without-deed": "Registration of a charge without deed",
    "mortgage-acquire-without-deed-with-charles-court-order-extend-with-charge-number-charge-acquisition-date":
      "Registration of an acquisition with Charles court order to extend {charge_number}, acquired on {property_acquired_date} without deed",
    "mortgage-acquire-without-deed-with-court-order-extend-with-charge-number-charge-acquisition-date":
      "Registration of an acquisition with court order to extend  {charge_number}, acquired on {property_acquired_date} without deed",
    "mortgage-acquire-without-deed-with-charge-number-charge-creation-date":
      "Registration of acquisition {charge_number}, acquired on {property_acquired_date} without deed",
    "mortgage-acquire-without-deed":
      "Registration of an acquisition without deed",
    "mortgage-debenture-without-deed-with-charles-court-order-extend-with-charge-number-charge-creation-date":
      "Registration of a series of debentures with Charles court order to extend. Charge code {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-debenture-without-deed-with-court-order-extend-with-charge-number-charge-creation-date":
      "Registration of a series of debentures with court order to extend. Charge code {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-debenture-without-deed-with-charge-number-charge-creation-date":
      "Registration of a series of debentures {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-debenture-without-deed":
      "Registration of a series of debentures without deed",
    "mortgage-create-with-deed-with-charles-court-order-extend-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a charge with Charles court order to extend. Charge code {charge_number}, created on {charge_creation_date}",
    "mortgage-create-with-deed-with-court-order-extend-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a charge with court order to extend. Charge code {charge_number}, created on {charge_creation_date}",
    "mortgage-create-with-deed-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of charge {charge_number}, created on {charge_creation_date}",
    "mortgage-create-with-deed-with-charge-number-limited-liability-partnership":
      "Registration of charge {charge_number}",
    "mortgage-create-with-deed-limited-liability-partnership":
      "Registration of a charge",
    "mortgage-acquire-with-deed-with-charles-court-order-extend-with-charge-number-charge-acquisition-date-limited-liability-partnership":
      "Registration of an acquisition with Charles court order to extend. Charge code {charge_number}, acquired on {property_acquired_date}",
    "mortgage-acquire-with-deed-with-court-order-extend-with-charge-number-charge-acquisition-date-limited-liability-partnership":
      "Registration of an acquisition with court order to extend. Charge code {charge_number}, acquired on {property_acquired_date}",
    "mortgage-acquire-with-deed-with-charge-number-charge-acquisition-date-limited-liability-partnership":
      "Registration of acquisition {charge_number}, acquired on {property_acquired_date}",
    "mortgage-acquire-with-deed-with-charge-number-limited-liability-partnership":
      "Registration of acquisition {charge_number}",
    "mortgage-acquire-with-deed-limited-liability-partnership":
      "Registration of an acquisition",
    "mortgage-debenture-with-deed-with-charles-court-order-extend-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a series of debentures with Charles court order to extend. Charge code {charge_number}, created on {charge_creation_date}",
    "mortgage-debenture-with-deed-with-court-order-extend-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a series of debentures with court order to extend. Charge code {charge_number}, created on {charge_creation_date}",
    "mortgage-debenture-with-deed-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a series of debentures {charge_number}, created on {charge_creation_date}",
    "mortgage-debenture-with-deed-with-charge-number-limited-liability-partnership":
      "Registration of a series of debentures {charge_number}",
    "mortgage-debenture-with-deed-limited-liability-partnership":
      "Registration of a series of debentures",
    "mortgage-satisfy-charge-full-with-mortgage-satisfaction-date-limited-liability-partnership":
      "Satisfaction of charge {charge_number} in full on {mortgage_satisfaction_date}",
    "mortgage-satisfy-charge-full-limited-liability-partnership":
      "Satisfaction of charge {charge_number} in full",
    "mortgage-satisfy-charge-part-with-mortgage-satisfaction-date-limited-liability-partnership":
      "Satisfaction of charge {charge_number} in part on {mortgage_satisfaction_date}",
    "mortgage-satisfy-charge-part-limited-liability-partnership":
      "Satisfaction of charge {charge_number} in part",
    "mortgage-satisfy-charge-limited-liability-partnership":
      "Satisfaction of a charge",
    "mortgage-charge-whole-release-with-charge-number-satisfaction-date-limited-liability-partnership":
      "All of the property or undertaking has been released from charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-whole-release-with-charge-number-limited-liability-partnership":
      "All of the property or undertaking has been released from charge {charge_number}",
    "mortgage-charge-whole-cease-with-charge-number-satisfaction-date-limited-liability-partnership":
      "All of the property or undertaking no longer forms part of charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-whole-cease-with-charge-number-limited-liability-partnership":
      "All of the property or undertaking no longer forms part of charge {charge_number}",
    "mortgage-charge-whole-cease-and-release-with-charge-number-satisfaction-date-limited-liability-partnership":
      "All of the property or undertaking has been released and no longer forms part of charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-whole-cease-and-release-with-charge-number-limited-liability-partnership":
      "All of the property or undertaking has been released and no longer forms part of charge {charge_number}",
    "mortgage-charge-part-release-with-charge-number-satisfaction-date-limited-liability-partnership":
      "Part of the property or undertaking has been released from charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-part-release-with-charge-number-limited-liability-partnership":
      "Part of the property or undertaking has been released from charge {charge_number}",
    "mortgage-charge-part-cease-with-charge-number-satisfaction-date-limited-liability-partnership":
      "Part of the property or undertaking no longer forms part of charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-part-cease-with-charge-number-limited-liability-partnership":
      "Part of the property or undertaking no longer forms part of charge {charge_number}",
    "mortgage-charge-part-cease-and-release-with-charge-number-satisfaction-date-limited-liability-partnership":
      "Part of the property or undertaking has been released and no longer forms part of charge {charge_number} on {mortgage_satisfaction_date}",
    "mortgage-charge-part-cease-and-release-with-charge-number-limited-liability-partnership":
      "Part of the property or undertaking has been released and no longer forms part of charge {charge_number}",
    "mortgage-release-cease-charge-limited-liability-partnership":
      "Property or undertaking has been released or no longer forms part of the charge",
    "mortgage-trustee-acting-as-trustee-with-charge-number-limited-liability-partnership":
      "Statement of company acting as a trustee on charge {charge_number}",
    "mortgage-trustee-acting-as-trustee-limited-liability-partnership":
      "Statement of company acting as a trustee",
    "mortgage-alter-post-to-charge-with-charge-number-limited-liability-partnership":
      "Alteration to charge {charge_number}, created on {charge_creation_date}",
    "mortgage-alter-post-to-charge-limited-liability-partnership":
      "Alteration to a charge , created on {charge_creation_date}",
    "mortgage-create-without-deed-with-charles-court-order-extend-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a charge with Charles court order to extend. Charge code {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-create-without-deed-with-court-order-extend-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a charge with court order to extend. Charge code {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-create-without-deed-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of charge {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-create-without-deed-with-charge-number-limited-liability-partnership":
      "Registration of charge {charge_number} without deed",
    "mortgage-create-without-deed-limited-liability-partnership":
      "Registration of a charge without deed",
    "mortgage-acquire-without-deed-with-charles-court-order-extend-with-charge-number-charge-acquisition-date-limited-liability-partnership":
      "Registration of an acquisition with Charles court order to extend. Charge code {charge_number}, acquired on {property_acquired_date} without deed",
    "mortgage-acquire-without-deed-with-court-order-extend-charge-number-charge-acquisition-date-limited-liability-partnership":
      "Registration of an acquisition with court order to extend. Charge code {charge_number}, acquired on {property_acquired_date} without deed",
    "mortgage-acquire-without-deed-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of acquisition {charge_number}, acquired on {property_acquired_date} without deed",
    "mortgage-acquire-without-deed-limited-liability-partnership":
      "Registration of an acquisition without deed",
    "mortgage-debenture-without-deed-with-charles-court-order-extend-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a series of debentures with Charles court order to extend. Charge code {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-debenture-without-deed-with-court-order-extend-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a series of debentures with court order to extend. Charge code {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-debenture-without-deed-with-charge-number-charge-creation-date-limited-liability-partnership":
      "Registration of a series of debentures {charge_number}, created on {charge_creation_date} without deed",
    "mortgage-debenture-without-deed-limited-liability-partnership":
      "Registration of a series of debentures without deed",
    "mortgage-alter-floating-charge-with-number-date":
      "Alterations to floating charge {charge_number}, created on {charge_creation_date}",
    "mortgage-alter-floating-charge-with-number":
      "Alterations to floating charge {charge_number}",
    "mortgage-alter-floating-charge": "Alterations to a floating charge",
    "mortgage-resolution": "Mortgage miscellaneous resolution for charge",
    "mortgage-court-order": "Court order mortgage miscellaneous for charge",
    "mortgage-miscellaneous": "Mortgage miscellaneous for charge",
    "mortgage-rectification-order":
      "Rectification order for charge {charge_number}",
    "mortgage-alteration-floating-charge-scotland-limited-liability-partnership":
      "Alteration to floating charge {charge_number}, created on {charge_creation_date}",
    "mortgage-deed": "Charge deed",
    "ordinary-resolution-adopt-memorandum":
      "Ordinary resolution of adoption of Memorandum of Association",
    "ordinary-resolution-alteration-memorandum":
      "Ordinary resolution of alteration of Memorandum of Association",
    "ordinary-resolution-memorandum":
      "Ordinary resolution of Memorandum of Association",
    "ordinary-resolution-exemption":
      "Ordinary resolution of exemption from the Appointing of Auditors",
    "ordinary-resolution-increase-capital":
      "Ordinary resolution of increasing authorised share capital",
    "ordinary-resolution-decrease-capital":
      "Ordinary resolution of decreasing authorised share capital",
    "ordinary-resolution-reduction-capital":
      "Ordinary resolution of reduction in issued share capital",
    "ordinary-resolution-acquisition":
      "Ordinary resolution of financial assistance for the acquisition of shares",
    "ordinary-resolution-purchase-shares":
      "Ordinary resolution of authority to purchase own shares out of capital",
    "ordinary-resolution-purchase-number-shares":
      "Ordinary resolution of authority to purchase a number of shares",
    "ordinary-resolution-securities":
      "Ordinary resolution of allotment of securities",
    "ordinary-resolution-removal-pre-emption":
      "Ordinary resolution of removal of pre-emption rights",
    "ordindary-resolution-varying-share-rights":
      "Ordinary resolution of varying share rights or name",
    "ordinary-resolution": "Ordinary resolution",
    "ordinary-resolution-capitalisation":
      "Ordinary resolution of capitalisation or a bonus issue of shares",
    "ordinary-resolution-change-of-name":
      "Ordinary resolution of change of name",
    "ordinary-resolution-redeem-shares":
      "Ordinary resolution of redemption of redeemable shares",
    "special-resolution-adopt-memorandum":
      "Special resolution of adoption of Memorandum of Association",
    "special-resolution-alteration-memorandum":
      "Special resolution of alteration of Memorandum of Association",
    "special-resolution-memorandum":
      "Special resolution of Memorandum of Association",
    "special-resolution-re-registration":
      "Special resolution of re-registration",
    "special-resolution-exemption":
      "Special resolution of exemption from the Appointing of Auditors",
    "special-resolution-increase-capital":
      "Special resolution of increasing authorised share capital",
    "special-resolution-decrease-capital":
      "Special resolution of decreasing authorised share capital",
    "special-resolution-reduction-capital":
      "Special resolution of reduction in issued share capital",
    "special-resolution-acquisition":
      "Special resolution of financial assistance for the acquisition of shares",
    "special-resolution-purchase-shares":
      "Special resolution of authority to purchase own shares out of capital",
    "special-resolution-purchase-number-shares":
      "Special resolution of authority to purchase a number of shares",
    "special-resolution-securities":
      "Special resolution of allotment of securities",
    "special-resolution-removal-pre-emption":
      "Special resolution of removal of pre-emption rights",
    "special-resolution-varying-share-rights":
      "Special resolution of varying share rights or name",
    "special-resolution": "Special resolution",
    "special-resolution-capitalisation":
      "Special resolution of capitalisation or a bonus issue of shares",
    "special-resolution-redeem-shares":
      "Special resolution of redemption of redeemable shares",
    "written-resolution-adopt-memorandum":
      "Written resolution of adoption of Memorandum of Association",
    "written-resolution-alteration-memorandum":
      "Written resolution of alteration of Memorandum of Association",
    "written-resolution-memorandum":
      "Written resolution of Memorandum of Association",
    "written-resolution-re-registration":
      "Written resolution of re-registration",
    "written-resolution-exemption":
      "Written resolution of exemption from the Appointing of Auditors",
    "written-resolution-increase-capital":
      "Written resolution of increasing authorised share capital",
    "written-resolution-decrease-capital":
      "Written resolution of decreasing authorised share capital",
    "written-resolution-reduction-capital":
      "Written resolution of reduction in issued share capital",
    "written-resolution-acquisition":
      "Written resolution of financial assistance for the acquisition of shares",
    "written-resolution-purchase-shares":
      "Written resolution of authority to purchase own shares out of capital",
    "written-resolution-purchase-number-shares":
      "Written resolution of authority to purchase a number of shares",
    "written-resolution-securities":
      "Written resolution of allotment of securities",
    "written-resolution-removal-pre-emption":
      "Written resolution of removal of pre-emption rights",
    "written-resolution-varying-share-rights":
      "Written resolution of varying share rights or name",
    "written-resolution": "Written resolution",
    "written-resolution-capitalisation":
      "Written resolution of capitalisation or a bonus issue of shares",
    "written-resolution-change-of-name": "Written resolution of change of name",
    "written-resolution-redeem-shares":
      "Written resolution of redemption of redeemable shares",
    "elective-resolution": "Elective resolution",
    "extraordinary-resolution-adopt-memorandum":
      "Extraordinary resolution of adoption of Memorandum of Association",
    "extraordinary-resolution-alteration-memorandum":
      "Extraordinary resolution of alteration of Memorandum of Association",
    "extraordinary-resolution-memorandum":
      "Extraordinary resolution of Memorandum of Association",
    "extraordinary-resolution-re-registration":
      "Extraordinary resolution of re-registration",
    "extraordinary-resolution-exemption":
      "Extraordinary resolution of exemption from the Appointing of Auditors",
    "extraordinary-resolution-increase-capital":
      "Extraordinary resolution of increasing authorised share capital",
    "extraordinary-resolution-decrease-capital":
      "Extraordinary resolution of decreasing authorised share capital",
    "extraordinary-resolution-reduction-capital":
      "Extraordinary resolution of reduction in issued share capital",
    "extraordinary-resolution-acquisition":
      "Extraordinary resolution of financial assistance for the acquisition of shares",
    "extraordinary-resolution-purchase-shares":
      "Extraordinary resolution of authority to purchase own shares out of capital",
    "extraordinary-resolution-purchase-number-shares":
      "Extraordinary resolution of authority to purchase a number of shares",
    "extraordinary-resolution-securities":
      "Extraordinary resolution of allotment of securities",
    "extraordinary-resolution-removal-pre-emption":
      "Extraordinary resolution of removal of pre-emption rights",
    "extraordinary-resolution-varying-share-rights":
      "Extraordinary resolution of varying share rights or name",
    "extraordinary-resolution": "Extraordinary resolution",
    "extraordinary-resolution-capitalisation":
      "Extraordinary resolution of capitalisation or a bonus issue of shares",
    "extraordinary-resolution-change-of-name":
      "Extraordinary resolution of change of name",
    "extraordinary-resolution-redeem-shares":
      "Extraordinary resolution of redemption of redeemable shares"
  }
};

export default function translateFilings1(field, value) {
  return filingsTranslationTable1[field][value];
}
