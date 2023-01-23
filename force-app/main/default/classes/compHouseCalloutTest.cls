@IsTest
public class compHouseCalloutTest {
  @IsTest
  static public void compHouseCallout200() {
    // Set HTTP callout mock
    Test.startTest();
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(200));
    String CompanyInfo = compHouseCallout.getCompanyInfo('12345678');
    List<String> category = new List<String>{ 'financials' };
    String filingHistory = compHouseCallout.getFilingHistory(
      '12345678',
      category,
      25,
      0
    );
    String OfficerInfo = compHouseCallout.getPersonsWithSignificantControlList(
      '12345678'
    );
    String companyOfficerList = compHouseCallout.getCompanyOfficersList(
      '12345678',
      25,
      0
    );
    String officerAppointments = compHouseCallout.getOfficerAppointments(
      '12345678982828'
    );
    String getPersonsWithSignificantControlList = compHouseCallout.getPersonsWithSignificantControlList(
      '12345678'
    );
    String getCompanyUKEstablishments = compHouseCallout.getCompanyUKEstablishments(
      '12345678'
    );
    String getCompanyChargesList = compHouseCallout.getCompanyChargesList(
      '12345678'
    );
    String getCompanyInsolvency = compHouseCallout.getCompanyInsolvency(
      '12345678'
    );
    Test.stopTest();
  }

  public class compHouseCalloutException extends Exception {
  }

  @IsTest
  static public void getCompanyInfo404() {
    Test.startTest();
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(404));
    String CompanyInfo = compHouseCallout.getCompanyInfo('12345678');

    Test.stopTest();
  }
    
  @IsTest
  static public void getFilingHistory404() {
    Test.startTest();
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(404));
    List<String> category = new List<String>{ 'financials' };
    String filingHistory = compHouseCallout.getFilingHistory(
      '12345678',
      category,
      25,
      0
    );
    Test.stopTest();
  }
    /*
    String pscList = compHouseCallout.getPersonsWithSignificantControlList(
      '12345678'
    );
    String companyCharges = compHouseCallout.getCompanyChargesList(
      '12345678'
    );
    String companyInsolvency = compHouseCallout.getCompanyInsolvency(
      '12345678'
    );*/
}