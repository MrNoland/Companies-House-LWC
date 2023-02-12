@IsTest
global class compHouseCalloutMock implements HttpCalloutMock {
  Integer responseCode;

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
    } else if (this.responseCode == 400) {
      response.setStatusCode(400);
      response.setStatus('400: Bad request - see error log');
    } else if (this.responseCode == 404) {
      response.setStatusCode(404);
      response.setStatus('404: Company not found');
    } else if (this.responseCode == 401) {
      response.setStatusCode(401);
      response.setStatus('401: Unauthorized API Key');
    } else {
      response.setStatusCode(this.responseCode);
      response.setStatus('Unknown error:');
    }
    return response;
  }
}
