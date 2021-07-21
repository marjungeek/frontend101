import { MyHttpClient } from "./HTTP";
import { logOption } from "./Interface";

export class MylogForm extends MyHttpClient {
    postURL:string;
    userName:HTMLElement;    
    password:HTMLElement;
    btnSubmit:HTMLElement;
    checkbox:HTMLElement;
    clear:HTMLElement;
    ans:HTMLElement;
    robo:HTMLElement;
    modalForm1:HTMLElement;
    total:number;
  
    constructor(options:logOption) {
    super();
    console.log('logForm was loaded...');
      
    this.postURL = options.postURL;
    this.total=NaN;
    
  
    this.userName = (<HTMLInputElement>document.getElementById("UserName"));
    //this.userNamediv = (<HTMLInputElement>document.getElementById("UserName-div"));
  
    this.password = (<HTMLInputElement>document.getElementById("password"));
    //this.passworddiv = (<HTMLInputElement>document.getElementById("password-div"));
    
    this.btnSubmit = (<HTMLInputElement>document.getElementById('test-submit'));
    this.modalForm1 =(<HTMLImageElement>document.getElementById("modal-body-1"));
  
    this.checkbox = (<HTMLInputElement>document.getElementById('checkbox'));
    this.clear = (<HTMLInputElement>document.getElementById('reload'));
    this.robo = (<HTMLInputElement>document.getElementById("robot"));
  
    this.ans=(<HTMLInputElement>document.getElementById("Ans"));
    
    }
  
    
    myRandom=()=>{
      var num1=Math.floor(Math.random() * 10);
      var num2=Math.floor(Math.random() * 10);
      this.total=num1+num2;
      (<HTMLInputElement>document.getElementById("Q")).innerHTML = ""+num1+"+"+num2+"?";
      //return total;
    
    }
    myCheck=()=> {
      //var y = 
      if (this.robo.style.display === "block") {
        this.robo.style.display = "none";
        (<HTMLInputElement>document.getElementById("test-submit")).className = "btn btn-primary btn btn-success disabled";
        //return NaN;
      } 
      else {
        this.robo.style.display = "block"; //show
        (<HTMLInputElement>document.getElementById("test-submit")).className = "btn btn-primary btn btn-success";
        this.myRandom();
  
      }
    }
        
  }