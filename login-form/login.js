import loginClass from "./loginClass.js";


 const loginclass = new loginClass();


(async function login() {

    console.log(loginclass.username, + 'ussererrr name ');

     
    loginclass.btnsubmit.addEventListener('click', async function(event) {
    event.preventDefault();
 
    let username = loginclass.username.value;
    console.log(loginclass.username, + 'ussererrr name ');
    let password = loginclass.password.value;
    console.log(loginclass.password, + 'passswordsasdasdas ');

    let response  = await loginclass.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login", {username, password});
    console.log(response);

    let message;
    if(response.statusCode === 200) {
        console.log(response.body);
        message = response.body
        alert(message);

    } else if  (response.statusCode === 401) {
        console.log(response.body);
        message = response.body;
        alert(message);
    } else {
        console.log("error exception");
        message  = "error exception";
        alert(message)
    }


 });
})();





