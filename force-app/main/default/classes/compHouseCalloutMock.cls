@IsTest
global class compHouseCalloutMock implements HttpCalloutMock {
  Integer responseCode;

  public class compHouseCalloutException extends Exception {
  }
  
  public compHouseCalloutMock(Integer responseCode) {
    this.responseCode = responseCode;
  }

  global HTTPResponse respond(HTTPRequest req) {
    // Send response test data
    HttpResponse response = new HttpResponse();

    if (this.responseCode == 200) {
      response.setHeader('Content-Type', 'application/json');
      response.setBody('{"example":"test"}');
      response.setStatusCode(200);
    } else if (this.responseCode == 404) {
      System.debug('entered 404 path');
      response.setStatusCode(404);
      response.setStatus('404: Company not found');
      //throw new compHouseCalloutException('404: Company not found');
    }
      else if (this.responseCode == 401) {
      System.debug('entered 401 path');
      response.setStatusCode(401);
      response.setStatus('401: Unauthorized API Key');
      //throw new compHouseCalloutException('404: Company not found');
    }
      else{
          System.debug('entered path');
      response.setStatusCode(this.responseCode);
      response.setStatus('Unknown error;');
      //throw new compHouseCalloutException('404: Company not found');
      }
    System.debug(response);
    return response;
  }
}