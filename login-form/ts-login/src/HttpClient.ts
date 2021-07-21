import { HttpRequests } from "./interface";

export class HttpClient{

    constructor(){
        console.log('HttpClient.ts LOADED!');
    }

    httpRequest(options: HttpRequests) {
        return new Promise(function(resolve: Function, reject: Function) {
          
          // set properties
          const method = options.method;
          const endpoint = options.endpoint;
          const headers = options.headers;
          const data = options.requestBody;
          const responseType = options.responseType;
    
          var xhr = new XMLHttpRequest();
    
          xhr.open(method, endpoint, true);
    
          // loop through headers, and set as the Request Header
          for (var key of Object.keys(headers)) {
            xhr.setRequestHeader(key, headers[key]);
          }
    
          xhr.responseType = responseType;
    
          xhr.onload = function() {
            var status = xhr.status;
    
            if (status === 200) {
              resolve(xhr.response);
            } else {
              reject(status);
            }
          };
    
          xhr.send(data);      
        });
      }

}