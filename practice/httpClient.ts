export class httpClient {
    constructor() {
      console.log('HttpClient was loaded...');
    }
  
    async httpRequest() : Promise <string> {
      let data: any ;
      const method:string = 'post';
       endpoint:string;
      
      
      return new Promise(function (resolve: any, reject: any) {
        const  xhr : XMLHttpRequest= new XMLHttpRequest();      
        xhr.open(method, endpoint, true);
        if (method === 'post') {
          xhr.setRequestHeader('Content-Type', 'application/json');  
          data = JSON.stringify(data);
        }
        
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status:number = xhr.status;
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
  
    async postRequest(endpoint:string, data:any) {
      return await this.httpRequest('post', endpoint, data);
    }
  }