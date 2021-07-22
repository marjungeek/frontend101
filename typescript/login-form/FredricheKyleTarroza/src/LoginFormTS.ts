import { HttpClientTS, logininterface, postURL, User } from './HttpClient.js';
export default class LoginFormTS extends HttpClientTS{
    public username: HTMLInputElement; 
    public password: HTMLInputElement;
  
    public $btnLogin?: HTMLButtonElement;
    // public $btnToggle: HTMLSpanElement;

    constructor(){
        super();
        console.log("LoginForm Loaded.");
        
        
        this.username = document.getElementById('UsernameID')! as HTMLInputElement;
        this.password = document.getElementById('PasswordID')! as HTMLInputElement;
        this.$btnLogin = document.getElementById('LoginBTN')! as HTMLButtonElement;
        // this.$btnLogin = document.getElementById('LoginBTN')! as HTMLButtonElement;

        // //button modal for success hehe :D
        // this.CloseButton = document.getElementById('CloseBTN');
    }


    // elements(): void{
    //     let $username = document.getElementById('UsernameID')! as HTMLInputElement;
    //     let $password = document.getElementById('PasswordID')! as HTMLInputElement;
    //     let $btnLogin = document.getElementById('LoginBTN')! as HTMLButtonElement;
    //     this.getUserPass($username.value, $password.value);
        

    // }

    async getUserPass(username: string, password: string){
      

        //validation of missing fields
        if(username=='' && password==''){
            // document.getElementById('missing').style.display='block'
            // document.getElementById('invalid').style.display='none'
            alert("Missing inputs!");
 
        //validation of user and pass if the credentials are correct or not.(below)  
        // validation if ghuser and secret, alerts status code 200
        }else{ 
           

//--------------------------------------------------------------------

// const myObj1 = new LoginForm(){
//     postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
// });
//   var response:any = await myObj1.postRequest(myObj1.postURL, data);
//   if(response.statusCode==200){
//       console.log(response);
//       alert("Success!");



//-----------------------------------------------------------
// let dataa: logininterface = {method:'post', endpoint:'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',data: JSON.stringify({ $username, $password })
// };       
var response:any = await this.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
console.log(response.statusCode)
            // const result = await this.postRequest( 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',{ $username, $password });


            // console.log(result);
            // var stat = result.statusCode;
            // var stat = result.statusCode;
            // console.log(stat);
            if(response.statusCode == 200){


                alert("success"); 
            //     document.getElementById('modalpopup').style.display='block'


            // //hides other modals
            //     // hides the Form
            //     document.getElementById('ContainerForm').style.display='none'
            //     //hides the invalid credentials ONLY if entered wrong first
            //     document.getElementById('invalid').style.display='none'
            //     //hides the Missing inputs ONLY if entered wrong first
            //     document.getElementById('missing').style.display='none'


            }else{
                alert("invalid");
                // document.getElementById('invalid').style.display='block'

                // //hides only if missing fields are shown.
                // document.getElementById('missing').style.display='none'
                return false;
            }
        }    
    } //end of getUserPass()

 


} //end of LoginFormTS block scope



//1. input fields ghuser secret
//2. button executes getuserpass reading the input fields typed
//3. validation

//additional: post request comes from httpclient