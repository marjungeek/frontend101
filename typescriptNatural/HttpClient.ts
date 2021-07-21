import { HttpRequestOptions } from "./interface";

export class HttpClient {
    constructor() {
      
    }


    async httpRequest(options: HttpRequestOptions) {
      return new Promise(function(resolve: Function, reject: Function) {
        const method = options.method;
        const endpoint = options.endpoint;
        var data = options.requestBody;
        const headers = options.headers;
        const responseType = options.responseType;

        var xhr = new XMLHttpRequest();      
        xhr.open(method, endpoint, true);

        for  (var key of Object.keys(headers)){
          xhr.setRequestHeader(key, headers[key]);
        }
  
        xhr.responseType = responseType;
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send(data);
      });
    }
  
    // async getRequest(endpoint) {
    //   return await this.httpRequest('get', endpoint);
    // }
  
    // async postRequest(endpoint, data) {
    //   return await this.httpRequest('post', endpoint, data);
    // }
  }