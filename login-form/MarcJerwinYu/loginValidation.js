import RegForm from "./RegForm.js";

console.log('Application was loaded...');

const regForm = new RegForm({
    loginUrl : 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});


// self-invoking function
(async function() { 

    //load the data
    let login = await regForm.getloginUrl();
    regForm.loadLogin(login);

    regForm.btnSubmit.addEventListener('click', async function(event) {
    event.preventDefault();
    const user = document.getElementById("username").value;
    const passwords = document.getElementById("password").value;
    if (user == "ghuser" && passwords == "secret"){
        alert("Logged in successfully");
    } 

    //let usernames = regForm.txtUsername.value;
    //let passwords = regForm.txtPassword.value;

    //let response = await regForm.postRequest('http://localhost:5000/login.html', { username, password});

    //console.log(response);
  });
})();
