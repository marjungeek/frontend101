import logForm from "./LoginForm.js";

window.addEventListener('load', () => {
  console.log('The page has fully loaded');
  //var total;
  const obj1 = new logForm({
    postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
  });
    
  // self-invoking function
  (async ()=> {  
    
    obj1.userName.addEventListener('blur', (event)=> {
      event.preventDefault();
            
        const user = event.target.value;
    
        if (user !== '') {
          console.log('valid name');
          obj1.userNamediv.setAttribute('class','input-group has-success');
        } else {
            console.log('invalid name');
            obj1.userNamediv.setAttribute('class','input-group has-error');
            }
    });
    
    obj1.password.addEventListener('blur', (event) =>{
      event.preventDefault();
            
      const passwd = event.target.value;
    
      if (passwd !== '') {
        console.log('valid password');
        obj1.passworddiv.setAttribute('class','input-group has-success');
      } else {
          console.log('invalid password');
          obj1.passworddiv.setAttribute('class','input-group has-error');
        }
    });
      
    obj1.btnSubmit.addEventListener('click', async (event)=> {
      event.preventDefault();
      console.log("SUbmit Clicked!");
      var btnStatus=obj1.btnSubmit.getAttribute("class").includes("disabled")
      console.log(btnStatus);
      if(btnStatus){
        console.log("Btn is disabled!")
        return;
      }
      console.log("Btn is enabled!")
      //var ans=document.getElementById("Ans").value;
      
      
      console.log(`ans: ${obj1.ans.value} total:${obj1.total}`);
      if(obj1.total==obj1.ans.value){
        let username = obj1.userName.value;
        let password = obj1.password.value;
        //console.log('URL',obj1.postURL.value);
        console.log('UserName: ',username);
        console.log('password: ',password);
        //console.log(obj1.postURL.value);
        
        let response = await obj1.postRequest(obj1.postURL, { username, password });
            
        console.log(response);
        //console.log(response.statusCode);
        if(response.statusCode == 200){
          obj1.userNamediv.setAttribute('class','input-group has-success');
          obj1.passworddiv.setAttribute('class','input-group has-success');
          alert("Success!");
        }
        else {
          alert("Wrong Credentials!");
          obj1.userNamediv.setAttribute('class','input-group has-error');
          obj1.passworddiv.setAttribute('class','input-group has-error');
        }
      }
      else{
        alert('Wrong Capacha!');
        obj1.myRandom();
      }
      
    });

    obj1.checkbox.addEventListener('click', ()=> {
      console.log('Check box triggered');
      obj1.myCheck();
    });

    obj1.clear.addEventListener('click', ()=> {
      console.log('reloading...');
      location.reload();

    });

  })();




});