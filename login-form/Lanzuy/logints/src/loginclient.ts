import { HttpRequestOptions } from "./interface";

export default class loginclient {
  constructor() {
    console.log('loginclient loaded');

  }

  async httpRequest(options: HttpRequestOptions) {
    return new Promise(function (resolve: Function, reject: Function) {
      const method = options.method;
      const endpoint = options.endpoint;
      const headers = options.headers;
      let data = options.requestBody;
      const rensponseType = options.responseType
      var xhr = new XMLHttpRequest();
      xhr.open(method, endpoint, true);
      for (var key of Object.keys(headers)) {
        xhr.setRequestHeader(key, headers[key]);
      }

      xhr.responseType = rensponseType;
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

}