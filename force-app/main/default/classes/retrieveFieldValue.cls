public with sharing class retrieveFieldValue {
  //Need to figure out how to pass field API into return string
  @AuraEnabled(cacheable=true)
  public static String retrieveFieldValue(id recordId, String fieldAPI) {
    String objectName = recordId.getSObjectType().getDescribe().getName();
    String searchStr =
      'select ' +
      fieldAPI +
      ' from ' +
      objectName +
      ' where id = :recordID';
    list<Account> recordSearch = Database.query(searchStr);
    //How can we refernece the fieldAPI in the parameter instead of hardcoding this API name?
    String compNumber = recordSearch[0].Companies_House_Number__c;
    return compNumber;
  }
}