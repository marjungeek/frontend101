interface dataS{
    method: string;
    endpoint: string;
    cred?: string;
}
class API{
    async GetAPI(obj:dataS){
        return new Promise(function(resolve:Function,reject:Function){
            let req = new XMLHttpRequest();
            req.open(obj.method,obj.endpoint,true);
            if(obj.method == 'post'){
                req.setRequestHeader('Content-Type','application/json')
            }
            req.responseType = 'json';
            req.onload = function() {
                let status = req.status;
                if(status == 200){
                    resolve(req.response);
                    console.log(resolve);
                }else{
                    console.log(reject)
                }
            };
            req.send(obj.cred);
        });
    }
    async postReq(pooSt:dataS){
        console.log(pooSt);
        return await this.GetAPI(pooSt);
    }
}

class TypeTry1 extends API{   
    constructor(){
        super();
    } 
    login(): void {
        let username = document.getElementById('username')! as HTMLInputElement;
        let password = document.getElementById('password')! as HTMLInputElement;
        this.credentials(username.value,password.value);
    }
    async credentials(username: string, password: string){
        let dataa: dataS = {method:'post',
            endpoint:'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
            cred: JSON.stringify({ username, password })
        };
        
        let res = await this.postReq(dataa);
        console.log(res);
    }
}
let Obj = new TypeTry1();