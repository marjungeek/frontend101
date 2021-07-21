export interface logininterface{
    method: string;
    endpoint: string;
    data?: string;

}

export interface LoginApiResponse {
    statusCode: number;
    message: string;    
  }


export class HttpClientTS{
    constructor(){      
    }
    async getAPIs(FullData: logininterface){
        return new Promise(function (resolve, reject) {
          
            var xhr = new XMLHttpRequest();
            xhr.open(FullData.method,FullData.endpoint, true);
            if(FullData.method == 'post'){
                xhr.setRequestHeader('Content-Type','application/json')
                FullData.data = JSON.stringify(FullData.data);
                
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
            xhr.send(FullData.data);
        });
    } 
 
    //post request method for const result at ./Loginform
    async postRequest(FullData: logininterface){
        return await this.getAPIs(FullData);
        
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
    
    
    
    