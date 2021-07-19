export class HttpClient{
    constructor(){
        console.log("HttpClient was loaded.");
    }

    async httpRequest(method,endpoint,data=undefined){
        return(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method,endpoint,true);
            if(method==='post'){
                xhr.setRequestHeader('Content-type','application/json');
                data = JSON.stringify(data);
            }
        xhr.responseType = 'json';
        xhr.onload = function(){
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
        return await this.httpRequest('post',endpoint,data);
    }
    
}