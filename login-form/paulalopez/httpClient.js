export class httpClient {
    constructor() {
        console.log('Nagload na ang "httpClient.."');
    }

    async #httpRequest(method, endpoint, data = undefined) {
        return new Promise(function(resolve, reject) {
            var req = new Request();
            req.open(method, endpoint, true);
            if (method === 'post') {
                req.setRequestHeader('Content-type', 'application/json');
                data = JSON.stringify(data);
            }

            req.responseType = 'json';
            req.onload = function() {
                var status = req.status;
                if (status == 200) {
                    resolve(req.response);
                }
                else {
                    reject(status);
                }
            };
            req.send(data);
        });
    }

    async getRequest(endpoint) {
        return await this.#httpRequest('get', endpoint);
      }
      
    async postRequest(endpoint, data) {
        return await this.#httpRequest('post', endpoint, data);
    }
}