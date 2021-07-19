class MyHttpClient {
    
  constructor() {
    console.log('HttpClient was laoded...');
    
  }
  private async httpRequest(method:string, endpoint:string, data?:any) {
    //var myProm: any;
    return new Promise<any>( (resolve:any, reject:any) =>{
      var xhr = new XMLHttpRequest();      
      xhr.open(method, endpoint, true);
      if (method === 'post') {
        xhr.setRequestHeader('Content-Type', 'application/json');  
        data = JSON.stringify(data);
        // console.log('data: ',data)
        // console.log(endpoint);
      }
  
      xhr.responseType = 'json';
      xhr.onload = async ()=> {
        var status = xhr.status;
        if (status == 200) {
          //return await xhr.response;
          resolve(xhr.response);
        } 
        else {
          reject(status);
          //return await xhr.response;
        }
      };
      xhr.send(data);
    });
    //return req;

  }
  
  async getRequest(endpoint:string) {
    return await this.httpRequest('get', endpoint);
  }
  
  async postRequest(endpoint:string, data:DT) {
    return await this.httpRequest('post', endpoint, data);
  }
}

class MylogForm extends MyHttpClient {
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

const myObj1 = new MylogForm({
    postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

interface DT {
  username:string,password:string
}

(()=> {
    
    myObj1.userName.addEventListener('blur', (event:any)=> {
      event.preventDefault();
            
        const user = event.target.value;
    
        if (user !== '') {
          console.log('valid name');
          myObj1.userName.setAttribute('class','form-control is-valid');
        } else {
            console.log('invalid name');
            myObj1.userName.setAttribute('class','form-control is-invalid');
            }
    });
    
    myObj1.password.addEventListener('blur', (event):void =>{
      event.preventDefault();
            
      const passwd = (<HTMLInputElement>event.target).value;
    
      if (passwd !== '') {
        console.log('valid password');
        myObj1.password.setAttribute('class','form-control is-valid');
      } else {
          console.log('invalid password');
          myObj1.password.setAttribute('class','form-control is-invalid');
        }
    });
      
    myObj1.btnSubmit.addEventListener('click', async (event) => {
      event.preventDefault();
      console.log("SUbmit Clicked!");
     var ans=parseInt((<HTMLInputElement>myObj1.ans).value);
      
      
      console.log(`ans: ${ans} total:${myObj1.total}`);
      if(myObj1.total==ans){

        let username = (<HTMLInputElement>myObj1.userName).value;
        let password = (<HTMLInputElement>myObj1.password).value;
       
        let data:DT = {
            username:username,
            password:password
        }
        console.log('UserName: ',username);
        console.log('password: ',password);

        var response:any = await myObj1.postRequest(myObj1.postURL, data);
        
        //console.log(response);

        if(response.statusCode==200){
            console.log(response);
            myObj1.userName.setAttribute('class','form-control is-valid');
            myObj1.password.setAttribute('class','form-control is-valid');
            alert("Success!");
        }else{
            console.log(response);
            myObj1.userName.setAttribute('class','form-control is-invalid');
            myObj1.password.setAttribute('class','form-control is-invalid');
            alert("Fail!, invalid Credentials");
        }
        //console.log(response.statusCode);
      }
      else{
        alert('Wrong Capacha!');
        myObj1.myRandom();
      }
        return response;
    });

    myObj1.checkbox.addEventListener('click', ()=> {
      console.log('Check box triggered');
      myObj1.myCheck();
    });

    // myObj1.clear.addEventListener('click', ()=> {
    //   console.log('reloading...');
    //   location.reload();
    // });

})();