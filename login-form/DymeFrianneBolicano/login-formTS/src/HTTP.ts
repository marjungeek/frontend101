import { DT } from "./Interface";

export class MyHttpClient {
    
    constructor() {
      console.log('HttpClient was laoded...');
      
    }
    private async httpRequest(method:string, endpoint:string, data?:any) {
      return new Promise<any>( (resolve:Function, reject:Function) =>{
        var xhr = new XMLHttpRequest();      
        xhr.open(method, endpoint, true);
        if (method === 'post') {
          xhr.setRequestHeader('Content-Type', 'application/json');  
          data = JSON.stringify(data);
          // console.log('data: ',data)
          // console.log(endpoint);
        }
    
        xhr.responseType = 'json';
        xhr.onload = async ()=> {
          var status = xhr.status;
          if (status == 200) {
            //return await xhr.response;
            resolve(xhr.response);
          } 
          else {
            reject(status);
            //return await xhr.response;
          }
        };
        xhr.send(data);
      });
      //return req;
  
    }
    
    async getRequest(endpoint:string) {
      return await this.httpRequest('get', endpoint);
    }
    
    async postRequest(endpoint:string, data:DT) {
      return await this.httpRequest('post', endpoint, data);
    }
  }