public class compHouseCallout {
  // Application domain exception
  public class compHouseCalloutException extends Exception {
  }

  @AuraEnabled(cacheable=true)
  public static String searchAll(
    String query,
    integer itemsPerPage,
    integer startIndex
  ) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.searchAll_Request req = new ExternalService.CompaniesHouse.searchAll_Request();
    req.q = query;
    req.itemsx5fperx5fpage = itemsPerPage;
    req.startx5findex = startIndex;
    try {
      ExternalService.CompaniesHouse.searchAll_Response res = service.searchAll(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.searchAll_ResponseException exc) {
      if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String searchCompany(
    String query,
    integer itemsPerPage,
    integer startIndex
  ) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.searchCompany_Request req = new ExternalService.CompaniesHouse.searchCompany_Request();
    req.q = query;
    req.itemsx5fperx5fpage = itemsPerPage;
    req.startx5findex = startIndex;
    try {
      ExternalService.CompaniesHouse.searchCompany_Response res = service.searchCompany(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.searchCompany_ResponseException exc) {
      if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String searchOfficers(
    String query,
    integer itemsPerPage,
    integer startIndex
  ) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.searchOfficers_Request req = new ExternalService.CompaniesHouse.searchOfficers_Request();
    req.q = query;
    req.itemsx5fperx5fpage = itemsPerPage;
    req.startx5findex = startIndex;
    try {
      ExternalService.CompaniesHouse.searchOfficers_Response res = service.searchOfficers(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.searchOfficers_ResponseException exc) {
      if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String searchDisqualifiedOfficers(
    String query,
    integer itemsPerPage,
    integer startIndex
  ) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.searchDisqualifiedOfficers_Request req = new ExternalService.CompaniesHouse.searchDisqualifiedOfficers_Request();
    req.q = query;
    req.itemsx5fperx5fpage = itemsPerPage;
    req.startx5findex = startIndex;
    try {
      ExternalService.CompaniesHouse.searchDisqualifiedOfficers_Response res = service.searchDisqualifiedOfficers(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.searchDisqualifiedOfficers_ResponseException exc) {
      if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getCompanyInfo(String compNumber) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.getCompanyByNumber_Request req = new ExternalService.CompaniesHouse.getCompanyByNumber_Request();
    req.companyx5fnumber = compNumber;
    try {
      ExternalService.CompaniesHouse.getCompanyByNumber_Response res = service.getCompanyByNumber(
        req
      );
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.getCompanyByNumber_ResponseException exc) {
      if (exc.ResponseCode == 404) {
        throw new compHouseCalloutException('404: Company not found');
      } else if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getFilingHistory(
    String compNumber,
    List<String> categoryFilter,
    integer itemsPerPage,
    integer startIndex
  ) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.getFilingHistoryList_Request req = new ExternalService.CompaniesHouse.getFilingHistoryList_Request();
    req.companyx5fnumber = compNumber;
    req.category = categoryFilter;
    req.itemsx5fperx5fpage = itemsPerPage;
    req.startx5findex = startIndex;
    try {
      ExternalService.CompaniesHouse.getFilingHistoryList_Response res = service.getFilingHistoryList(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.getFilingHistoryList_ResponseException exc) {
      if (exc.ResponseCode == 404) {
        throw new compHouseCalloutException('404: Filing history not found');
      } else if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getCompanyOfficersList(
    String compNumber,
    integer itemsPerPage,
    integer startIndex
  ) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.getCompanyOfficersList_Request req = new ExternalService.CompaniesHouse.getCompanyOfficersList_Request();
    req.companyx5fnumber = compNumber;
    req.itemsx5fperx5fpage = itemsPerPage;
    req.startx5findex = startIndex;
    try {
      ExternalService.CompaniesHouse.getCompanyOfficersList_Response res = service.getCompanyOfficersList(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.getCompanyOfficersList_ResponseException exc) {
      if (exc.ResponseCode == 400) {
        throw new compHouseCalloutException('400: Bad request - see error log');
      } else if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getOfficerAppointments(String officerId) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.getOfficerAppointments_Request req = new ExternalService.CompaniesHouse.getOfficerAppointments_Request();
    req.officerx5fid = officerId;
    try {
      ExternalService.CompaniesHouse.getOfficerAppointments_Response res = service.getOfficerAppointments(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.getOfficerAppointments_ResponseException exc) {
      if (exc.ResponseCode == 400) {
        throw new compHouseCalloutException('400: Bad request - see error log');
      } else if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getPersonsWithSignificantControlList(String compNumber) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.getPersonsWithSignificantControlList_Request req = new ExternalService.CompaniesHouse.getPersonsWithSignificantControlList_Request();
    req.companyx5fnumber = compNumber;
    try {
      ExternalService.CompaniesHouse.getPersonsWithSignificantControlList_Response res = service.getPersonsWithSignificantControlList(
        req
      );
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.getPersonsWithSignificantControlList_ResponseException exc) {
      if (exc.ResponseCode == 404) {
        throw new compHouseCalloutException('404: PSC not found');
      } else if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getCompanyUKEstablishments(String compNumber) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.getCompanyUKEstablishments_Request req = new ExternalService.CompaniesHouse.getCompanyUKEstablishments_Request();
    req.companyx5fnumber = compNumber;
    try {
      ExternalService.CompaniesHouse.getCompanyUKEstablishments_Response res = service.getCompanyUKEstablishments(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.getCompanyUKEstablishments_ResponseException exc) {
      if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getCompanyChargesList(String compNumber) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.getCompanyChargesList_Request req = new ExternalService.CompaniesHouse.getCompanyChargesList_Request();
    req.companyx5fnumber = compNumber;
    try {
      ExternalService.CompaniesHouse.getCompanyChargesList_Response res = service.getCompanyChargesList(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.getCompanyChargesList_ResponseException exc) {
      if (exc.ResponseCode == 404) {
        throw new compHouseCalloutException('404: Charges not found');
      } else if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }

  @AuraEnabled(cacheable=true)
  public static String getCompanyInsolvency(String compNumber) {
    ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
    ExternalService.CompaniesHouse.getCompanyInsolvency_Request req = new ExternalService.CompaniesHouse.getCompanyInsolvency_Request();
    req.companyx5fnumber = compNumber;
    try {
      ExternalService.CompaniesHouse.getCompanyInsolvency_Response res = service.getCompanyInsolvency(
        req
      );
      //System.Debug(JSON.serialize(res.Code200));
      return JSON.serialize(res.Code200);
    } catch (ExternalService.CompaniesHouse.getCompanyInsolvency_ResponseException exc) {
      if (exc.ResponseCode == 404) {
        throw new compHouseCalloutException('404: Insolvency not found');
      } else if (exc.ResponseCode == 401) {
        throw new compHouseCalloutException('401: Unauthorized API Key');
      } else {
        throw new compHouseCalloutException(
          'Unknown error; ' + exc.ResponseCode + ': ' + exc.DefaultResponse
        );
      }
    }
  }
}
