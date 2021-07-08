import logForm from "./LoginForm.js";

window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');

    const obj1 = new logForm({
        postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
    });
    
      // self-invoking function
      (async function() {  
    
          obj1.userName.addEventListener('blur', function(event) {
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
    
          obj1.password.addEventListener('blur', function(event) {
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
      
        obj1.btnSubmit.addEventListener('click', async function(event) {
          event.preventDefault();
      
          let username = obj1.userName.value;
          let password = obj1.password.value;
          //console.log('URL',obj1.postURL.value);
            console.log('UserName: ',username);
            console.log('password: ',password);
            //console.log(obj1.postURL.value);
          let response = await obj1.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
          
          console.log(response);
          //console.log(response.statusCode);
          if(response.statusCode == 200){
              obj1.userNamediv.setAttribute('class','input-group has-success');
              obj1.passworddiv.setAttribute('class','input-group has-success');
              alert("Seccess!");
          }
             
           else {
            alert("Wrong Credentials!");
            obj1.userNamediv.setAttribute('class','input-group has-error');
            obj1.passworddiv.setAttribute('class','input-group has-error');
          }
    
        });
      })();


    

});