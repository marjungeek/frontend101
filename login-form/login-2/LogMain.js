import LogClass from './LogClass.js';

window.addEventListener('load', (event) => {
    console.log("Loaded Login....");

    const logClass = new LogClass({
        loginURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
    });

    (async function(){
     
        logClass.btnSubmit.addEventListener('click', async function(event){
            event.preventDefault();

            let username = logClass.username.value;
            let password = logClass.password.value;

            let response = await logClass.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login", {username, password});
            console.log(response)

            if (username == "ghuser" && password == "secret"){
                alert("You are Logged In")
            } else {
                alert("User not registered")
            }   
        });
    })();
})

function passwordbtn(){
    var password = document.getElementById("passwdbtn");
    if (password.type === "password"){
        password.type = "text";
    } else{
        password.type = "password"
    }
}