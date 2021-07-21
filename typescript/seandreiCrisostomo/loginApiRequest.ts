import { HttpRequestOptions } from "./interfaces";

export class LogInApiRequest{

    constructor(){
        console.log('LogInApiRequest was loaded... ');
    }

    ApiRequest(options: HttpRequestOptions){

        return new Promise (function (resolve: Function, reject: Function){
            //properties
            const method = options.method;
            const endpoint = options.endpoint;
            const headers = options.headers;
            const data = options.requestBody;
            const responseType = options.responseType;

            var xhr = new XMLHttpRequest();
            xhr.open(method, endpoint, true);
            for(var key of Object.keys(headers)) {
                xhr.setRequestHeader(key, headers[key]);
            }
            xhr.responseType = responseType;
            xhr.onload = function () {
                var status: number = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };

            xhr.send(data);

        });
    }

}