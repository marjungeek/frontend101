import { HttpClient } from './HttpClient.js';
export default class LoginForm extends HttpClient{
    constructor(){
        super();
        console.log("LoginForm Loaded.");
       
        this.username = document.getElementById('UsernameID');
        this.password = document.getElementById('PasswordID');
        this.LoginSubmit = document.getElementById('LoginBTN');

        //button modal for success hehe :D
        this.CloseButton = document.getElementById('CloseBTN');


    }

    async getUserPass(username,password){

        //validation of missing fields
        if(username=='' && password==''){
            document.getElementById('missing').style.display='block'
            document.getElementById('invalid').style.display='none'
            // alert("Missing inputs!");

        //validation of user and pass if the credentials are correct or not.(below)  
        // validation if ghuser and secret, alerts status code 200
        }else{
            const result = await this.postRequest('post', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
            console.log(result);
            var stat = result.statusCode;
            console.log(stat);
            if(stat == 200){
                // alert("success");
                document.getElementById('modalpopup').style.display='block'


            //hides other modals
                // hides the Form
                document.getElementById('ContainerForm').style.display='none'
                //hides the invalid credentials ONLY if entered wrong first
                document.getElementById('invalid').style.display='none'
                //hides the Missing inputs ONLY if entered wrong first
                document.getElementById('missing').style.display='none'


            }else{
                document.getElementById('invalid').style.display='block'

                //hides only if missing fields are shown.
                document.getElementById('missing').style.display='none'
                return false;
            }
        }    
    }
}



//1. input fields ghuser secret
//2. button executes getuserpass reading the input fields typed
//3. validation

//additional: post request comes from httpclient