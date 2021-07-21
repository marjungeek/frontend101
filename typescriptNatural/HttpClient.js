"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
class HttpClient {
    constructor() {
    }
    httpRequest(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                const method = options.method;
                const endpoint = options.endpoint;
                var data = options.requestBody;
                const headers = options.headers;
                const responseType = options.responseType;
                var xhr = new XMLHttpRequest();
                xhr.open(method, endpoint, true);
                for (var key of Object.keys(headers)) {
                    xhr.setRequestHeader(key, headers[key]);
                }
                xhr.responseType = responseType;
                xhr.onload = function () {
                    var status = xhr.status;
                    if (status == 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(status);
                    }
                };
                xhr.send(data);
            });
        });
    }
}
exports.HttpClient = HttpClient;
