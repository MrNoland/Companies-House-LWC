public with sharing class retrieveFieldValue {
  @AuraEnabled(cacheable=true)
  public static String retrieveFieldValue(id recordId, String fieldAPI) {
    String objectName = recordId.getSObjectType().getDescribe().getName();
    String searchStr =
      'select ' +
      fieldAPI +
      ' from ' +
      objectName +
      ' where id = :recordID';

    //need to figure out how to make this agnostic of the Account object
    list<Account> recordSearch = Database.query(searchStr);
    String compNumber = String.valueOf(recordSearch[0].get(fieldAPI));
    System.debug(compNumber);
    return compNumber;
  }
}
