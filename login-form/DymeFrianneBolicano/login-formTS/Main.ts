class HttpClient {
    
    constructor() {
      console.log('HttpClient was laoded...');
    }
    
    httpRequest(method:string, endpoint:string, data?:any) {
        console.log('httpReq!');
        console.log(data);
          
        var xhr = new XMLHttpRequest();

            //console.log('addEvnetlistener HTTP!')
            
            xhr.open(method, endpoint, true);
            if (method === 'post') {
              xhr.setRequestHeader('Content-Type', 'application/json');  
              data = JSON.stringify(data);
            }
            xhr.responseType = 'json';

            xhr.onload = ()=> {
            var status = xhr.status;
                if (status == 200) {
                    if(xhr.response.statusCode==200){
                        console.log(xhr.response.statusCode);
                        obj1.userName.setAttribute('class','form-control is-valid');
                        obj1.password.setAttribute('class','form-control is-valid');
                        alert("Success!");
                    }else{
                        console.log(xhr.response);
                        obj1.userName.setAttribute('class','form-control is-invalid');
                        obj1.password.setAttribute('class','form-control is-invalid');
                        alert("Fail!, invalid Credentials");
                    }
                    
                    //return xhr.response;
                } 
                else {
                    alert("Fail!");
                //return status;
                }
            };
            xhr.send(data);
    }
    
    getRequest(endpoint:string) {
      this.httpRequest('get', endpoint);
    }
    
    postRequest(endpoint:string,data:DT ){
        console.log('postReq!');
      this.httpRequest('post', endpoint, data);
    }
}


class logForm extends HttpClient {
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



console.log('The page has fully loaded');
//var total;
const obj1 = new logForm({
    postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

interface DT {
  username:string,password:string
}
    
  // self-invoking function
(()=> {
    
    obj1.userName.addEventListener('blur', (event)=> {
      event.preventDefault();
            
        const user = (<HTMLInputElement>event.target).value;
    
        if (user !== '') {
          console.log('valid name');
          obj1.userName.setAttribute('class','form-control is-valid');
        } else {
            console.log('invalid name');
            obj1.userName.setAttribute('class','form-control is-invalid');
            }
    });
    
    obj1.password.addEventListener('blur', (event) =>{
      event.preventDefault();
            
      const passwd = (<HTMLInputElement>event.target).value;
    
      if (passwd !== '') {
        console.log('valid password');
        obj1.password.setAttribute('class','form-control is-valid');
      } else {
          console.log('invalid password');
          obj1.password.setAttribute('class','form-control is-invalid');
        }
    });
      
    obj1.btnSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      console.log("SUbmit Clicked!");
    //   var btnStatus:boolean= obj1.btnSubmit.getAttribute("class").includes("disabled")
    //   console.log(btnStatus);
    //   if(btnStatus){
    //     console.log("Btn is disabled!")
    //     return;
    //   }
    //   console.log("Btn is enabled!")
     var ans=parseInt((<HTMLInputElement>obj1.ans).value);
      
      
      console.log(`ans: ${ans} total:${obj1.total}`);
      if(obj1.total==ans){

        let username = (<HTMLInputElement>obj1.userName).value;
        let password = (<HTMLInputElement>obj1.password).value;
       
        let data:DT = {
            username:username,
            password:password
        }
        console.log('UserName: ',username);
        console.log('password: ',password);
        obj1.postRequest(obj1.postURL, data);


        //let username = obj1.userName.value;
        //let password = obj1.password.value;
        //console.log('URL',obj1.postURL.value);
        
        //console.log(obj1.postURL.value);
        
        //let response = await obj1.postRequest(obj1.postURL, { username, password });
            
        //console.log(response);
        //console.log(response.statusCode);
      }
      else{
        alert('Wrong Capacha!');
        obj1.myRandom();
      }

        

        

        // if(response.statusCode == 200){
        //   obj1.userNamediv.setAttribute('class','input-group has-success');
        //   obj1.passworddiv.setAttribute('class','input-group has-success');
        //   alert("Success!");
        // }else {
        //   alert("Wrong Credentials!");
        //   obj1.userNamediv.setAttribute('class','input-group has-error');
        //   obj1.passworddiv.setAttribute('class','input-group has-error');
        // }
        
    });

    obj1.checkbox.addEventListener('click', ()=> {
      console.log('Check box triggered');
      obj1.myCheck();
    });

    // obj1.clear.addEventListener('click', ()=> {
    //   console.log('reloading...');
    //   location.reload();
    // });

})();