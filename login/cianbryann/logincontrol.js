import { httpclient } from './httpclient.js';
export default class logincontrol extends httpclient{
    constructor(){
        console.log("logincontrol");
        super();
        this.submit = document.getElementById('logbtn');
        this.username = document.getElementById('username');
        this.password = document.getElementById('password');
    }
    async getCredentials(username,password){
        let httpObject = new httpclient();
        console.log(username);
        console.log(password);
        if(username=='' && password==''){
            alert("Fill up inputs");
        }else{
            const result = await httpObject.getAPIs('post', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
            if(result.statusCode == 200){
                alert(result.body);
            }else{
                alert(result.body);
            }
        }    
    }
}