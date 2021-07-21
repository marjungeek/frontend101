export class HttpClient {
    constructor(){
        console.log('HttpClient was loaded...');
    }

    async http(): Promise <string> {
        const method: string = 'post';
        let data: any;

    return new Promise(function (resolve: any, reject: any){
        const xhr : XMLHttpRequest = new XMLHttpRequest();
        xhr.open('post', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', true);
        if (method === 'post'){
            xhr.setRequestHeader('Content-Type', 'application/json');
            data = JSON.stringify({username: 'ghuser', password: 'secret'});
        }
        xhr.responseType = 'json';
        xhr.onload = function(){
            const status: number = xhr.status;
            if (status == 200){
                resolve(xhr.response);
            }else{
                reject(status);
            }
        };
        xhr.send(data);
    }};
}

        async postRequest(): Promise <string> {
            let result: string = await this.http();
            return result;
        }
        }   