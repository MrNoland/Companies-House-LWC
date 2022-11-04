public class calloutTest {
    
    @AuraEnabled(cacheable=true)
    public static String getCompanyInfo(String CompNumber){

        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:CH2/company/' + CompNumber);
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        return res.getBody();
    }
}