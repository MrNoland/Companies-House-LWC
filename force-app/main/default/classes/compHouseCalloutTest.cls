@isTest
public class compHouseCalloutTest {
  @isTest
  static void test_compHouseCallout_success() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(200));
    compHouseCallout.getCompanyInfo('1234');
    List<String> category = new List<String>{ 'financials' };
    compHouseCallout.getFilingHistory('12345678', category, 25, 0);
    compHouseCallout.getOfficerAppointments('1234567890987654');
    compHouseCallout.getCompanyOfficersList('12345678', 25, 0);
    compHouseCallout.getPersonsWithSignificantControlList('12345678');
    compHouseCallout.getCompanyChargesList('12345678');
    compHouseCallout.getCompanyUKEstablishments('12345678');
    compHouseCallout.getCompanyInsolvency('12345678');
  }

  @isTest
  static void test_getCompanyInfo_404() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(404));
    try {
      compHouseCallout.getCompanyInfo('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '404: Company not found');
    }
  }

  @isTest
  static void test_getFilingHistory_404() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(404));
    try {
      List<String> category = new List<String>{ 'financials' };
      compHouseCallout.getFilingHistory('12345678', category, 25, 0);
    } catch (Exception e) {
      System.assert(e.getMessage() == '404: Filing history not found');
    }
  }

  @isTest
  static void test_getPersonsWithSignificantControlList_404() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(404));
    try {
      compHouseCallout.getPersonsWithSignificantControlList('12345678');
    } catch (Exception e) {
      //System.assert(e.getMessage() == '404: Company not found');
    }
  }

  @isTest
  static void test_getCompanyChargesList_404() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(404));
    try {
      compHouseCallout.getCompanyChargesList('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '404: Charges not found');
    }
  }

  @isTest
  static void test_getCompanyInsolvency_404() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(404));
    try {
      compHouseCallout.getCompanyInsolvency('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '404: Insolvency not found');
    }
  }

  @isTest
  static void test_getCompanyInfo_401() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(401));
    try {
      compHouseCallout.getCompanyInfo('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '401: Unauthorized API Key');
    }
  }

  @isTest
  static void test_getFilingHistory_401() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(401));
    try {
      List<String> category = new List<String>{ 'financials' };
      compHouseCallout.getFilingHistory('12345678', category, 25, 0);
    } catch (Exception e) {
      //System.assert(e.getMessage() == '401: Unauthorized API Key');
    }
  }

  @isTest
  static void test_getCompanyOfficersList_401() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(401));
    try {
      compHouseCallout.getCompanyOfficersList('12345678', 25, 0);
    } catch (Exception e) {
      System.assert(e.getMessage() == '401: Unauthorized API Key');
    }
  }

  @isTest
  static void test_getOfficerAppointments_401() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(401));
    try {
      compHouseCallout.getOfficerAppointments('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '401: Unauthorized API Key');
    }
  }

  @isTest
  static void test_getPersonsWithSignificantControlList_401() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(401));
    try {
      compHouseCallout.getPersonsWithSignificantControlList('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '401: Unauthorized API Key');
    }
  }

  @isTest
  static void test_getCompanyUKEstablishments_401() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(401));
    try {
      compHouseCallout.getCompanyUKEstablishments('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '401: Unauthorized API Key');
    }
  }

  @isTest
  static void test_getCompanyChargesList_401() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(401));
    try {
      compHouseCallout.getCompanyChargesList('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '401: Unauthorized API Key');
    }
  }

  @isTest
  static void test_getCompanyInsolvency_401() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(401));
    try {
      compHouseCallout.getCompanyInsolvency('12345678');
    } catch (Exception e) {
      System.assert(e.getMessage() == '401: Unauthorized API Key');
    }
  }

  @isTest
  static void test_getCompanyOfficersList_400() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(400));
    try {
      compHouseCallout.getCompanyOfficersList('12345678', 25, 0);
    } catch (Exception e) {
      //System.assert(e.getMessage() == '400: Bad request - see error log');
    }
  }

  @isTest
  static void test_getOfficerAppointments_400() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(400));
    try {
      compHouseCallout.getOfficerAppointments('12345678');
    } catch (Exception e) {
      //System.assert(e.getMessage() == '400: Bad request - see error log');
    }
  }

  @isTest
  static void test_getCompanyInfo_500() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(500));
    try {
      compHouseCallout.getCompanyInfo('12345678');
    } catch (Exception e) {
    }
  }

  @isTest
  static void test_getFilingHistory_500() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(500));
    try {
      List<String> category = new List<String>{ 'financials' };
      compHouseCallout.getFilingHistory('12345678', category, 25, 0);
    } catch (Exception e) {
    }
  }

  @isTest
  static void test_getOfficerAppointments_500() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(500));
    try {
      compHouseCallout.getOfficerAppointments('1234567890987654');
    } catch (Exception e) {
    }
  }

  @isTest
  static void test_getCompanyOfficersList_500() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(500));
    try {
      compHouseCallout.getCompanyOfficersList('12345678', 25, 0);
    } catch (Exception e) {
    }
  }

  @isTest
  static void test_getPersonsWithSignificantControlList_500() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(500));
    try {
      compHouseCallout.getPersonsWithSignificantControlList('12345678');
    } catch (Exception e) {
    }
  }

  @isTest
  static void test_getCompanyChargesList_500() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(500));
    try {
      compHouseCallout.getCompanyChargesList('12345678');
    } catch (Exception e) {
    }
  }

  @isTest
  static void test_getCompanyUKEstablishments_500() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(500));
    try {
      compHouseCallout.getCompanyUKEstablishments('12345678');
    } catch (Exception e) {
    }
  }

  @isTest
  static void test_getCompanyInsolvency_500() {
    Test.setMock(HttpCalloutMock.class, new compHouseCalloutMock(500));
    try {
      compHouseCallout.getCompanyInsolvency('12345678');
    } catch (Exception e) {
    }
  }
}
