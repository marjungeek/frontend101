import { httpReqProperties } from "./interface";

export default class httpClient {
    constructor() {
        console.log('HttpClient initialized');
    }
    httpRequest(property: httpReqProperties) {
        return new Promise(function(resolve, reject) {
            const method = property.method;
            const endpoint = property.endpoint;
            const headers = property.headers;
            const data = property.requestBody;
            const responseType = property.responseType;

            let xhr = new XMLHttpRequest();

            xhr.open(method, endpoint, true);

            for (let key of Object.keys(headers)) {
                xhr.setRequestHeader(key, headers[key]);
            }

            xhr.responseType = responseType;

            xhr.onload = () => {
                let status = xhr.status;
                if (status === 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(status);
                }
            };
            xhr.send(data);
            
        });
    }
}

// export class httpClient {
//     constructor(){
//         console.log("httpClient");
//     }

//     private async httpRequest(method: string, endpoint: string, data?: any) {
//         const req = new Promise((resolve:any, reject:any) => {
//             var xhr = new XMLHttpRequest();
//             xhr.open(method, endpoint, true);
//             if (method === 'POST') {
//                 xhr.setRequestHeader('Content-Type', 'application/json');
//                 data = JSON.stringify(data);
//             }

//             xhr.responseType = 'json';
//             xhr.onload = () => {
//                 let status = xhr.status;
//                 if (status === 200) {
//                     resolve(xhr.response);
//                 }
//                 else {
//                     reject(status);
//                 }
//             };

//             xhr.send(data);
//         });
//     }
// }

//     const postRequest = async (endpoint: string, data: any) => {
//         return await this.httpRequest('POST',endpoint, data);
//     }
