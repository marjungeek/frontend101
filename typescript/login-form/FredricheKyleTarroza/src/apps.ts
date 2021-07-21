class login{
user:any;
pass:any;
submit:any;
constructor(){

    // let user:HTMLElement = document.getElementById("UsernameID");
    // let UsernameID:HTMLInputElement = document.getElementById("UsernameID");
this.user = document.querySelector('UsernameID')as HTMLInputElement;
 this.pass = document.querySelector('PasswordID')as HTMLInputElement;
 this.submit = document.querySelector('LoginBTN')as HTMLButtonElement;
    

}//end of constructor

getUserPass(UserEvent:any, UserPass:any){
    if(UserEvent=='ghuser' && UserPass=='secret'){
console.log('yes')
    }

}

}// end of login class
let LogCont = new login();

LogCont.submit.addEventListener('click', function(){
    let UserEvent = LogCont.user.value;
    let UserPass = LogCont.pass.value;
    LogCont.getUserPass(UserEvent,UserPass);
});


// console.log(input.value);














// user.innerText = "Hello world!";



