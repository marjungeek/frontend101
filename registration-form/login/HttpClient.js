export default class HttpClient {
  constructor() {
    console.log('HttpClient...');
  }

  httpRequest(options) {
    return new Promise(function(resolve, reject) {
      // set optional property
      const method = ('method' in options) ? options.method : 'get';
      const endpoint = ('endpoint' in options) ? options.endpoint : null;
      const headers = ('headers' in options) ? options.headers : {}; // { 'Content-Type': 'application/json', 'Whatever-Key': 'somevalue} 
      const data = ('requestBody' in options) ? options.requestBody : undefined; // { username: 'ghuser': password: 'secret'}
      const responseType = ('responseType' in options) ? options.responseType : 'json';

      var xhr = new XMLHttpRequest();

      xhr.open(method, endpoint, true);

      // loop through headers, and set as the Request Header
      for (var key of Object.keys(headers)) {
        xhr.setRequestHeader(key, headers[key]);
      }

      xhr.responseType = responseType;

      xhr.onload = function() {
        var status = xhr.status;

        if (status === 200) {
          resolve(xhr.response);
        } else {
          reject(status);
        }
      };

      xhr.send(data);
    });
  }
}