import { httpclient } from './httpclient.js';
export default class logincontrol extends httpclient{
    constructor(){
        console.log("logincontrol loaded");
        super();
        this.submit = document.getElementById('loginbtn');
        this.username = document.getElementById('uname');
        this.password = document.getElementById('pass');
        this.showpass = document.getElementById('showpass')
    }
 async loginFunc(username,password){
    ///let lezgo = new httpclient();
        console.log(username);
        console.log(password);
    if(username=='' && password==''){
        alert("Provide the Required Username and Password!");
    }else{

const result = await this.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",{ username, password });

        console.log(result);
    var stat = result.statusCode;
        console.log(stat);
    if(stat == 200){
        alert("Log In Succesfully!");
    }else{
        alert("Wrong Credentials!");
}
}    

}    
    }
