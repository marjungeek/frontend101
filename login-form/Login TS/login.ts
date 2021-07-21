import loginClass from "./loginClass.js";


 const loginclass = new loginClass({
    url: 'http://localhost:7071/api/login',
    success: function() {
      alert('success');
    },
    error: function() {
      alert('error');
    }
 });


 async function login() {

    loginclass.$btnsubmit.addEventListener('click', async function(event) {
    event.preventDefault();
    let username = loginclass.$username.innerHTML;
    let password = loginclass.$password.innerHTML;
    

    let response  = await loginclass.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login", {username, password});
    

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
