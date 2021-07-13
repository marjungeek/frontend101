export class HttpClient {
  constructor() {
    console.log('HttpClient was laoded...');
  }
  
  async #httpRequest(method, endpoint, data = undefined) {

    const req= new Promise( (resolve, reject) =>{
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
  
  async getRequest(endpoint) {
    return await this.#httpRequest('get', endpoint);
  }
  
  async postRequest(endpoint, data) {
    return await this.#httpRequest('post', endpoint, data);
  }
}


