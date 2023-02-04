@isTest
public with sharing class retrieveFieldValueTest {
    
    @testSetup
    static void makeData(){
    	Account acc = new Account(Name='Field Value Account', Companies_House_Number__c = 'F0C4579');
        insert acc;
    }
    
  @IsTest
  static public void obtainCompanyNumberTest() {

      Account acc = [SELECT Id FROM Account LIMIT 1];
    String compNumber = retrieveFieldValue.retrieveFieldValue(
      acc.Id,
      'Companies_House_Number__c'
    );
  }
}