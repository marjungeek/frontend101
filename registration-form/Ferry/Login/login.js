import { HttpClient } from './httpclient.js';

export default class Login extends HttpClient {
    constructor(){
        super()
                this.userName = document.getElementById('userNameControl');
                this.passWord = document.getElementById('passwordControl');
                this.submit = document.getElementById('loginControl');
    }
    async getInput(username,password){
        let http = new HttpClient();
        console.log(username);
        console.log(password);
        if(username=='' && password==''){
            alert("Please complete Inputs");
        }else{
            const result = await http.getAPIs('post', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',{username,password});
            console.log(result);  

            var status = result.statusCode;
            console.log(status);
            if(status==200){
                alert('Login Successful!');
            }else{
                alert('Invalid Login!')
                return false;
            }
        }    
    }
}