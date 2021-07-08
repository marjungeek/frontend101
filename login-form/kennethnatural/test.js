async function getUser(){
    const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login');
    console.log(result);
}
function getAPI(method, endpoint){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, endpoint, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
}