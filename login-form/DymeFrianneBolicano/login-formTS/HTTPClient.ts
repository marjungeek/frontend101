import { DT } from "./MyInterface";

export class MyHttpClient {
    
    constructor() {
      console.log('HttpClient was laoded...');
      
    }
    
    
    private async httpRequest(method:string, endpoint:string, data?:any):Promise<any> {
  
      const req= new Promise<any>( (resolve:any, reject:any):any =>{
        var xhr = new XMLHttpRequest();      
        xhr.open(method, endpoint, true);
        if (method === 'post') {
          xhr.setRequestHeader('Content-Type', 'application/json');  
          data = JSON.stringify(data);
          // console.log('data: ',data)
          // console.log(endpoint);
        }
    
        xhr.responseType = 'json';
        xhr.onload = ()=> {
          var status = xhr.status;
          if (status == 200) {
            resolve(xhr.response);
          } 
          else {
            reject(status);
          }
        };
        xhr.send(data);
      });
      return req;
  
    }
    
    async getRequest(endpoint:string) {
      return await this.httpRequest('get', endpoint);
    }
    
    async postRequest(endpoint:string, data:DT) {
      return await this.httpRequest('post', endpoint, data);
    }
  }
  
  