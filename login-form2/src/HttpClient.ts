import { HttpRequestOptions } from "./Interface";

export default class HttpClient{
    constructor(){
        console.log('HttpClient is Loaded!!!');
    }

    httpRequest(options: HttpRequestOptions){
        return new Promise(function(resolve: Function, reject: Function){
            const method = options.method;
            const endpoint = options.endpoint;
            const headers = options.headers;
            const data = options.requestBody;
            const responseType = options.responseType;

            var xhr = new XMLHttpRequest();

            xhr.open(method, endpoint, true);

            for(var key of Object.keys(headers)){
                xhr.setRequestHeader(key, headers[key]);
            }

            xhr.responseType = responseType;

            xhr.onload = function(){
                var status = xhr.status;

                if(status === 200){
                    resolve(xhr.response);
                } else{
                    reject(status);
                }
            };

            xhr.send(data);
        });
    }
}