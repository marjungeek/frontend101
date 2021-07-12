import { HttpClient } from './httpclient.js';

export default class Login extends HttpClient {
    constructor(){
        super()
                this.userName = document.getElementById('userNameControl');
                this.passWord = document.getElementById('passwordControl');
                this.submit = document.getElementById('loginControl');
                this.register = document.getElementById('signUpControl');
    }
    async getInput(username,password){
        console.log(username);
        console.log(password);
        if(username=='' && password==''){
            alert("Please complete Inputs");
        }else{
            let result = await this.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",{ username, password });
            console.log(result);  

            var status = result.statusCode;
            console.log(status);
            if(status==200){
                alert('Login Successful!');
                location.href = 'https://www.ibm.com/ph-en';
            }else{
                alert('Invalid Login!')
                return false;
            }
            

        }    
    }
}