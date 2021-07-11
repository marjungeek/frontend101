export class HttpClient{
    constructor(){
        console.log("HttpClient Loaded.");
    }
//ajax call
 
 async getAPIs(method,endpoint,data=undefined){
        return new Promise(function (resolve, reject) {
          
            var xhr = new XMLHttpRequest();
            xhr.open(method,endpoint, true);
            if(method == 'post'){
                xhr.setRequestHeader('Content-Type','application/json')
                data = JSON.stringify(data);
                // console.log(data);
            }
            xhr.responseType = 'json';
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

    //psot request method for const result at ./Loginform
    async postRequest(method, endpoint, data){
        return await this.getAPIs(method, endpoint, data);
    

    }

}