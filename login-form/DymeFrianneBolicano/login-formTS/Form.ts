import { MyHttpClient } from "./HTTPClient";

export class MylogForm extends MyHttpClient {
    postURL:string;
    userName:HTMLElement;    
    userNamediv:HTMLElement;
    password:HTMLElement;
    passworddiv:HTMLElement;
    btnSubmit:HTMLElement;
    checkbox:HTMLElement;
    clear:HTMLElement;
    ans:HTMLElement;
    total:number;

    constructor(options:{
        postURL:string,
    }) {
    super();
    console.log('logForm was loaded...');
      
    this.postURL = options.postURL;
    this.total=NaN;
    
  
    this.userName = (<HTMLInputElement>document.getElementById("UserName"));
    this.userNamediv = (<HTMLInputElement>document.getElementById("UserName-div"));
  
    this.password = (<HTMLInputElement>document.getElementById("password"));
    this.passworddiv = (<HTMLInputElement>document.getElementById("password-div"));
    
    this.btnSubmit = (<HTMLInputElement>document.getElementById('test-submit'));
  
    this.checkbox = (<HTMLInputElement>document.getElementById('checkbox'));
    this.clear = (<HTMLInputElement>document.getElementById('reload'));
  
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
      var y = (<HTMLInputElement>document.getElementById("robot"));
      if (y.style.display === "block") {
        y.style.display = "none";
        (<HTMLInputElement>document.getElementById("test-submit")).className = "btn btn-primary btn btn-success disabled";
        //return NaN;
      } 
      else {
        y.style.display = "block"; //show
        (<HTMLInputElement>document.getElementById("test-submit")).className = "btn btn-primary btn btn-success";
        this.myRandom();

      }
    }
        
  }