import { httpclient } from './httpclient.js';
export default class logincontrol extends httpclient{
    constructor(){
        console.log("logincontrol");
        super();
        this.submit = document.getElementById('logbtn');
        this.username = document.getElementById('username');
        this.password = document.getElementById('password');
    }
    async getCountry(username,password){
        let ffff = new httpclient();
        console.log(username);
        console.log(password);
        if(username=='' && password==''){
            alert("Fill up inputs");
        }else{
            const result = await ffff.getAPIs('post', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
            console.log(result);
            var stat = result.statusCode;
            console.log(stat);
            if(stat == 200){
                alert("GALING");
            }else{
                alert("BOBO");
            }
        }    
    }
}