export class APICLASS{
    constructor(){
        console.log("HHHfjHH");
    }
    getAPIs(method,endpoint){
        return new Promise(function (resolve, reject) {
            var xmlo = new XMLHttpRequest();
            xmlo.open(method,endpoint, true);
            xmlo.responseType = 'json';
            xmlo.onload = function () {
                var status = xmlo.status;
                if (status == 200) {
                    resolve(xmlo.response);
                } else {
                    reject(status);
                }
            };
            xmlo.send();
        });
    }
}