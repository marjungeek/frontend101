var TsHttpClient = (function () {
    function TsHttpClient() {
        console.log('TS HTTP Client Loaded!');
    }
    TsHttpClient.prototype.httpRequest = function (options) {
        return new Promise(function (resolve, reject) {
            var method = options.method;
            var endpoint = options.endpoint;
            var headers = options.headers;
            var data = options.requestBody;
            var responseType = options.responseType;
            var xhr = new XMLHttpRequest();
            xhr.open(method, endpoint, true);
            for (var _i = 0, _a = Object.keys(headers); _i < _a.length; _i++) {
                var key = _a[_i];
                xhr.setRequestHeader(key, headers[key]);
            }
            console.log(headers);
            xhr.responseType = responseType;
            xhr.onload = function () {
                var status = xhr.status;
                if (status === 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(status);
                }
            };
            xhr.send(data);
        });
    };
    return TsHttpClient;
}());
export default TsHttpClient;
