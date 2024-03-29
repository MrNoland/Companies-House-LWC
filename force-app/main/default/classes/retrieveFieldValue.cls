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
    list<sObject> recordSearch = Database.query(searchStr);
    String compNumber = String.valueOf(recordSearch[0].get(fieldAPI));
    return compNumber;
  }
}
