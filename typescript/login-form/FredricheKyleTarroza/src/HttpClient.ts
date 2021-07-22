export interface logininterface{
    method: string;
    endpoint: string;
    data?: any;

}

// export interface LoginApiResponse {
//     statusCode: number;
//     message?: string;    
//   }

export interface User{
    username:string,
    password:string

}  

  export interface postURL{
    postURL:string
  }


export class HttpClientTS{
    constructor(){      
    }
    async getAPIs(method:string, endpoint:string, data?:any){
        return new Promise(function (resolve, reject) {
          
            var xhr = new XMLHttpRequest();
            xhr.open(method,endpoint, true);
            if(method == 'post'){
                xhr.setRequestHeader('Content-Type','application/json')
                data = JSON.stringify(data);
                
            }
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            }; 
            xhr.send(data);
        });
    } 
 
    //post request method for const result at ./Loginform
    async postRequest(endpoint:string, data?:any){
        console.log(data);
        return await this.getAPIs('post',endpoint, data);
        
        // return await this.getAPIs();
     

    }





}//end of HttpClient Class scope




// class login{
//     user:any;
//     pass:any;
//     submit:any;
//     constructor(){
    
//         // let user:HTMLElement = document.getElementById("UsernameID");
//         // let UsernameID:HTMLInputElement = document.getElementById("UsernameID");
//     this.user = document.querySelector('UsernameID')as HTMLInputElement;
//      this.pass = document.querySelector('PasswordID')as HTMLInputElement;
//      this.submit = document.querySelector('LoginBTN')as HTMLButtonElement;
        
    
//     }//end of constructor
    
//     getUserPass(UserEvent:any, UserPass:any){
//         if(UserEvent=='ghuser' && UserPass=='secret'){
//     console.log('yes')
//         }
    
//     }
    
//     }// end of login class
//     let LogCont = new login();
    
//     LogCont.submit.addEventListener('click', function(){
//         let UserEvent = LogCont.user.value;
//         let UserPass = LogCont.pass.value;
//         LogCont.getUserPass(UserEvent,UserPass);
//     });
    
    
//     // console.log(input.value);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     // user.innerText = "Hello world!";
    
    
    
    