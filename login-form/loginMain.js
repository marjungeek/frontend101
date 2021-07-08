import LoginForm from "./LoginForm.js";

console.log('Application was loaded..');

const loginForm = new LoginForm({
 loginURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

(async function(){
    loginForm.txtEmail.addEventListener('blur', function(event){
        event.preventDefault();

        const email = event.target.value;

        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            console.log('valid email');
            regForm.txtEmail.classList.remove('error');
          } else {
            regForm.txtEmail.classList.add('error');
          }
    })
})

    loginForm.btnSubmit.addEventListener('click', async function(event){
        event.preventDefault();
        
        let user = loginForm.txtUsername.value;
        let pass = loginForm.txtPassword.value;
            console.log('UserName:',user);
            console.log('password:',pass);

        let response = await loginForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
            console.log(response);
    })
