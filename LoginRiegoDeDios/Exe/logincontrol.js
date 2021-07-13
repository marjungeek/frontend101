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
        console.log(username);
        console.log(password);
    if(username=='' && password==''){
        alert("Provide the Required Username and Password!");
        console.log("Empty");
    }else{

const result = await this.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",{ username, password });
        
    const stat = result.statusCode;

    if(stat == 200){
        console.log('Username:', username , 'Password:' , password , stat);
        alert("Log In Succesfully!");
        document.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }else{
        alert("Wrong Credentials!");
        console.log('Username:', username , 'Password:' , password, stat);
}
}    

}    
    }
