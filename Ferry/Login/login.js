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
        console.log('Username:',username);
        console.log('Password: ',password);
        if(username=='' || password==''){
            alert("Please Input Username, Password!");
        }else{
            let result = await this.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",{ username, password });

            var status = result.statusCode;
            if(status==200){
                alert('Login Successful!');
                location.href = 'https://www.ibm.com/ph-en';
            }else{
                alert('Invalid Credentials!')
                return false;
            }
            

        }    
    }
}