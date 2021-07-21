export class httpclient{
    constructor(){
    }
    async getAPIs(method,endpoint,data=undefined){
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method,endpoint, true);
            if(method == 'post'){
                xhr.setRequestHeader('Content-Type','application/json')
                data = JSON.stringify(data);
                console.log(data);
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
    async postRequest(endpoint,data){
        console.log("sfdsfds");
        return await this.getAPIs('post',endpoint,data);
    }
}