import LogForm from "./LogForm.js";

console.log('Application was loaded...');

const logForm = new LogForm({
    logURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

(async function(){
    logForm.btnSubmit.addEventListener('click', async function(event) {
        event.preventDefault();

        let username = logForm.txtUName.value;
        let password = logForm.txtPword.value;


    let response = await logForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', {username, password});

    console.log(response);



    if (username == 'ghuser' && password == 'secret'){
        alert("Login success");
    }else if(username == '' || password == '') {
        alert('Username or Password must be filled out');
    }else {
        alert('Invalid Username or Password')
    }

});
})();