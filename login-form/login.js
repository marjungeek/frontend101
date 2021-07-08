import  loginClass from "./loginClass.js";


(async function login() {

    let username = loginForm.username.value;
    let password = loginForm.password.value;

    

    loginClass.btnSubmit.addEventListener('click', async function(event) {


    let response  = await loginClass.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login", username, password);
    console.log(response);
    if(response.result === 200) {
        console.log("successfull");

    } else if  (response.result === 400) {
        console.log("status error");
    } else {
        console.log("error exception");

    }

 });
})();




