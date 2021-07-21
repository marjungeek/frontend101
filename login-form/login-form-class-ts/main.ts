import LoginForm from "./LoginForm";

console.log("main was loaded.");

const loginForm = new LoginForm({
    loginAPI: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
    
});

(async function() { 

    loginForm.inBtnLogin.addEventListener('click', async function(event) {
      event.preventDefault();
  
      let username = loginForm.inUsername.value ;
      let password = loginForm.inPassword.value;
      let response = await loginForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
  
      console.log(response);
    

    });
  })();
 