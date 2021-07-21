var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class MyHttpClient {
    constructor() {
        console.log('HttpClient was laoded...');
    }
    httpRequest(method, endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var xhr = new XMLHttpRequest();
                xhr.open(method, endpoint, true);
                if (method === 'post') {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    data = JSON.stringify(data);
                    // console.log('data: ',data)
                    // console.log(endpoint);
                }
                xhr.responseType = 'json';
                xhr.onload = () => __awaiter(this, void 0, void 0, function* () {
                    var status = xhr.status;
                    if (status == 200) {
                        //return await xhr.response;
                        resolve(xhr.response);
                    }
                    else {
                        reject(status);
                        //return await xhr.response;
                    }
                });
                xhr.send(data);
            });
            //return req;
        });
    }
    getRequest(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpRequest('get', endpoint);
        });
    }
    postRequest(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpRequest('post', endpoint, data);
        });
    }
}
