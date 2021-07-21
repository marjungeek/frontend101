import { httpclient } from "./HttpClient";

export default class logincontrol extends httpclient {
    username: HTMLInputElement;
    password: HTMLInputElement;

    loginbtn: HTMLButtonElement;
    showpass: HTMLInputElement;


    constructor(){
    super();
    this.username = document.getElementById('uname')! as HTMLInputElement;
    this.password = document.getElementById('pass')! as HTMLInputElement;
    this.loginbtn = document.getElementById('loginbtn')! as HTMLButtonElement;
    this.showpass = document.getElementById('showpass')! as HTMLInputElement;
    
    }

    async loginFunc(){
        let username = this.username.value;
        let password = this.password.value;
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

listener() {
    var _this = this; 

    this.loginbtn.addEventListener('click', async function(event){
        event.preventDefault();
            return await _this.loginFunc(); 
          
    }); 
    
    this.showpass.addEventListener('change', function() {
        if (password === "password") {
            password = "text";
            console.log("Password is shown..");
          } else {
            password = "password";
            console.log("Password is hidden..");
          }
      });
}   

}
    }
