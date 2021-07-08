export class HttpClient {
    constructor(){
        console.log('HttpClient was loaded... ');
    }

    //resuable function
    async #getAPI(method, endpoint){
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, endpoint, true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
         };
            xhr.send();
        });
    }

    async getRequest(endpoint) {
        return await this.#getAPI('get', 'https://api.first.org/data/v1/teams');
    }

    

}


