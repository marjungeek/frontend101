import {login} from "./login";

console.log("main");

const user = document.getElementById('uname')! as HTMLInputElement;
const pass = document.getElementById('pwd')! as HTMLInputElement;
const btnLogin = document.querySelector('login')


const login: string({
    loginUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

btnLogin.addEventListener("click", function() {
    .preventDefault();
})

// btnLogin.addEventListener((event:any) => {
//     event.preventDefault();
// })

// const user = event.target.value;

login.password.addEventListener((event:any) => {

})
// (async function(){
//     loginClass.btnLogin.addEventListener('click',async function(event) {
//     event.preventDefault();

//     let username = loginClass.user.value;
//     let password = loginClass.pass.value;

//     let response = await loginClass.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username , password });
    
//     console.log(response);

//     if (response.statusCode === 200) {
//         alert("Login Success");
//         window.location.pathname = 'frontend101/login-form/paulalopez/extra.html';
//     }
//     else if (username == "" && password == "") {
//         alert("Please enter username and password!")
//     }
//     else{
//         alert("Login Failed")
//     }

//     });
// })();