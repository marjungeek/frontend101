import {LoginClass} from "./loginClass.js";


const loginclass = new LoginClass({
    baseurl:
    "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",
});


(async function login() {

    let username = loginForm.username.value;
    let password = loginForm.password.value;

    

    loginclass.btnSubmit.addEventListener('click', async function(event) {


    let response  = await loginclass.postRequest(baseurl, username, password);
    console.log(response);
    if(response.result === 200) {
        console.log("successfull");
        //location.href = "successful.html"; malilipat yung apge pag nag success ful gawal mamaya ng ibang page na success ful para pag nag success
    } else if  (response.result === 400) {
        console.log("status error");
    } else {
        console.log("error exception");

    }

 });
})();




