export class loginHttpRequest {

    constructor(){
        console.log('LogInApiRequest was loaded... ');
    }

    async #ApiRequest(method, endpoint, data = undefined) { //data = undefined - default na response/value from data pag walang nakuha
        return new Promise(function (resolve, reject) {
          var xhr = new XMLHttpRequest();       
          xhr.open(method, endpoint, true);
          if (method === 'post') {
            xhr.setRequestHeader('Content-Type', 'application/json');  
            data = JSON.stringify(data);//convert object/value to JSON string
          }
    
          xhr.responseType = 'json'; //specifying the type of data contained in the response
          xhr.onload = function () {
              var status = xhr.status;
              if (status == 200) { // ung nkikita na log in success or invalid credential
                  resolve(xhr.response);
              } else {
                  reject(status);
              }
          };
          xhr.send(data);
        });
      }
    
      async getRequest(endpoint) {
        return await this.#ApiRequest('get', endpoint);
      }
    
      async postRequest(endpoint, data) { // sends data to our #ApiRequest function
        return await this.#ApiRequest('post', endpoint, data);
      }

}