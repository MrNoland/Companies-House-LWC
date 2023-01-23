@isTest
public with sharing class retrieveFieldValueTest {
  @IsTest
  static public void obtainCompanyNumberTest() {
    String compNumber = retrieveFieldValue.retrieveFieldValue(
      '001Dn00000Atzw2IAB',
      'Companies_House_Number__c'
    );
  }
}