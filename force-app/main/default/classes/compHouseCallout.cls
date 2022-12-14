public class compHouseCallout {
    

    //Need to figure out how to pass field API into return string
    @AuraEnabled(cacheable=true)
    public static String obtainCompanyNumber(id recordId, String fieldAPI){

        String objectName = recordId.getSObjectType().getDescribe().getName();
        String searchStr = 'select ' + fieldAPI + ' from ' + objectName +' where id = :recordID';
        list<Account> recordSearch = Database.query(searchStr);
        //How can we refernece the fieldAPI in the parameter instead of hardcoding this API name?
        String compNumber = recordSearch[0].Companies_House_Number__c;
        return compNumber;
    }

    @AuraEnabled(cacheable=true)
    public static String getCompanyInfo(String compNumber){
        
        ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
        ExternalService.CompaniesHouse.getCompanyByNumber_Request req = new ExternalService.CompaniesHouse.getCompanyByNumber_Request();
        req.companyx5fnumber = compNumber;
        try{
            ExternalService.CompaniesHouse.getCompanyByNumber_Response res = service.getCompanyByNumber(req);
            return JSON.serialize(res.Code200);
        
        }catch(ExternalService.CompaniesHouse.getCompanyByNumber_ResponseException exc){
            System.debug(exc);
            return 'not good';
        }
    }

    @AuraEnabled(cacheable=true)
    public static String getFilingHistory(String compNumber, List<String> categoryFilter, integer itemsPerPage, integer startIndex){
        
        ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
        ExternalService.CompaniesHouse.getFilingHistoryList_Request req = new ExternalService.CompaniesHouse.getFilingHistoryList_Request();
        req.companyx5fnumber = compNumber;
        req.category = categoryFilter;
        req.itemsx5fperx5fpage = itemsPerPage;
        req.startx5findex = startIndex;
        try{
            ExternalService.CompaniesHouse.getFilingHistoryList_Response res = service.getFilingHistoryList(req);
            //System.Debug(JSON.serialize(res.Code200));
            return JSON.serialize(res.Code200);
        
        }catch(ExternalService.CompaniesHouse.getFilingHistoryList_ResponseException exc){
            System.debug(exc);
            return 'not good';
        }
    }

    @AuraEnabled(cacheable=true)
    public static String getCompanyOfficersList(String compNumber){
        
        ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
        ExternalService.CompaniesHouse.getCompanyOfficersList_Request req = new ExternalService.CompaniesHouse.getCompanyOfficersList_Request();
        req.companyx5fnumber = compNumber;
        try{
            ExternalService.CompaniesHouse.getCompanyOfficersList_Response res = service.getCompanyOfficersList(req);
            //System.Debug(JSON.serialize(res.Code200));
            return JSON.serialize(res.Code200);
        
        }catch(ExternalService.CompaniesHouse.getCompanyOfficersList_ResponseException exc){
            System.debug(exc);
            return 'not good';
        }
    }

    @AuraEnabled(cacheable=true)
    public static String getOfficerAppointments(String officerId){
        
        ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
        ExternalService.CompaniesHouse.getOfficerAppointments_Request req = new ExternalService.CompaniesHouse.getOfficerAppointments_Request();
        req.officerx5fid = officerId;
        try{
            ExternalService.CompaniesHouse.getOfficerAppointments_Response res = service.getOfficerAppointments(req);
            //System.Debug(JSON.serialize(res.Code200));
            return JSON.serialize(res.Code200);
        
        }catch(ExternalService.CompaniesHouse.getOfficerAppointments_ResponseException exc){
            System.debug(exc);
            return 'not good';
        }
    }

    @AuraEnabled(cacheable=true)
    public static String getPersonsWithSignificantControlList(String compNumber){
        
        ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
        ExternalService.CompaniesHouse.getPersonsWithSignificantControlList_Request req = new ExternalService.CompaniesHouse.getPersonsWithSignificantControlList_Request();
        req.companyx5fnumber = compNumber;
        try{
            ExternalService.CompaniesHouse.getPersonsWithSignificantControlList_Response res = service.getPersonsWithSignificantControlList(req);
            //System.Debug(JSON.serialize(res.Code200));
            return JSON.serialize(res.Code200);
        
        }catch(ExternalService.CompaniesHouse.getPersonsWithSignificantControlList_ResponseException exc){
            System.debug(exc);
            return 'not good';
        }
    }

    @AuraEnabled(cacheable=true)
    public static String getCompanyUKEstablishments(String compNumber){
        
        ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
        ExternalService.CompaniesHouse.getCompanyUKEstablishments_Request req = new ExternalService.CompaniesHouse.getCompanyUKEstablishments_Request();
        req.companyx5fnumber = compNumber;
        try{
            ExternalService.CompaniesHouse.getCompanyUKEstablishments_Response res = service.getCompanyUKEstablishments(req);
           //System.Debug(JSON.serialize(res.Code200));
            return JSON.serialize(res.Code200);
        
        }catch(ExternalService.CompaniesHouse.getCompanyUKEstablishments_ResponseException exc){
            System.debug(exc);
            return 'not good';
        }
    }

    @AuraEnabled(cacheable=true)
    public static String getCompanyChargesList(String compNumber){
        
        ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
        ExternalService.CompaniesHouse.getCompanyChargesList_Request req = new ExternalService.CompaniesHouse.getCompanyChargesList_Request();
        req.companyx5fnumber = compNumber;
        try{
            ExternalService.CompaniesHouse.getCompanyChargesList_Response res = service.getCompanyChargesList(req);
            //System.Debug(JSON.serialize(res.Code200));
            return JSON.serialize(res.Code200);
        
        }catch(ExternalService.CompaniesHouse.getCompanyChargesList_ResponseException exc){
            System.debug(exc);
            return 'not good';
        }
    }

    //Something is wrong with this Apex method
    @AuraEnabled(cacheable=true)
    public static String getCompanyInsolvencyItem(String compNumber){
        
        ExternalService.CompaniesHouse service = new ExternalService.CompaniesHouse();
        ExternalService.CompaniesHouse.getCompanyInsolvencyItem_Request req = new ExternalService.CompaniesHouse.getCompanyInsolvencyItem_Request();
        req.companyx5fnumber = compNumber;
        try{
            ExternalService.CompaniesHouse.getCompanyInsolvencyItem_Response res = service.getCompanyInsolvencyItem(req);
            //System.Debug(JSON.serialize(res.Code200));
            return JSON.serialize(res.Code200);
        
        }catch(ExternalService.CompaniesHouse.getCompanyInsolvencyItem_ResponseException exc){
            System.debug(exc);
            return 'not good';
        }
    }
        
}