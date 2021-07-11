import { HttpClient } from './HttpClient.js';
export default class LoginForm extends HttpClient{
    constructor(){
        super();
        console.log("LoginForm Loaded.");
        this.LoginSubmit = document.getElementById('LoginBTN');
        this.username = document.getElementById('UsernameID');
        this.password = document.getElementById('PasswordID');
    }

    async getUserPass(username,password){
        //validation of missing fields
        if(username=='' && password==''){
            alert("Missing inputs!");

        //validation of user and pass if the credentials are correct or not.(below)  
        // validation if ghuser and secret, returns status code 200
        }else{
            const result = await this.postRequest('post', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
            console.log(result);
            var stat = result.statusCode;
            console.log(stat);
            if(stat == 200){
                alert("success");
            }else{
                alert("Invalid Credentials");
                return false;
            }
        }    
    }
}