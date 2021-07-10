export class httpclient{
    constructor(){
        this.apiTeams ='';
        this.apiCountry = 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries';//Step 5:
        this.apiCity ='';
    }

    //The "#" symbol means it is private
    async #httpRequest(method, endpoint, data = undefined){//Step 5.1:
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, endpoint, true);
            if (method === 'post') {
              xhr.setRequestHeader('Content-Type', 'application/json');
              data = JSON.stringify(data);
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

    async getRequest(endpoint){//Step 5.1:
        return await this.#httpRequest('get', endpoint);
    }
}