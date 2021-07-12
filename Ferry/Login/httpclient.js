
export class HttpClient{
    constructor(){
        console.log('HttpClient Successfully Loaded...')
    }
    getAPI(method,endpoint,data=undefined){
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method,endpoint, true);
            if(method == 'post'){
                xhr.setRequestHeader('Content-Type','application/json')
                data = JSON.stringify(data);
            }
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                    console.log(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send(data);
        });
        
    }
    async postRequest(endpoint, data) {
        return await this.getAPI("post", endpoint, data);
      }
}