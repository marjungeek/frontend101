//imports HttpClient for endpoints of the API
import { HttpClient } from './HttpClient.js';
export default class LoginForm extends HttpClient{
    constructor(){
        console.log("test httpclient!!");
        super();
        //read and gets the input fields value
        this.LoginSubmit = document.getElementById('LoginBTN');
        this.username = document.getElementById('UsernameID');
        this.password = document.getElementById('PasswordID');
    }

    // gets the user and pass from the input fields and proceeds to the validation shown below.
    async getUserPass(username,password){
        let HttpAPI = new HttpClient();
        console.log(username);
        console.log(password);

        //validation of missing fields
        if(username=='' && password==''){
            alert("Missing inputs!");

        //validation of user and pass if the credentials are correct or not.(below)  

        //note: it accepts the ghuser and secret and displays success.
        //note: as of now it displays anything from the input to the console despite of random inputs but returns an error alert.
        }else{
            const result = await HttpAPI.getAPIs('post', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
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