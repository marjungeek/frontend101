import LogForm from "./LogForm.js";

console.log('Application was loaded...');

const logForm = new LogForm({
    logURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});


/*(async function() {
    logForm.txtUName.addEventListener('input', function(event) {
        event.preventDefault();

        const text = event.target.value;

        if (username == 'ghuser'){
            console.log('valid user');
        }else {
            console.log('invalid user');
        }
    });

    logForm.btnSubmit.addEventListener('click', async function(event) {
        event.preventDefault();

        let username = logForm.txtUName.value;
        let password = logForm.txtPword.value;

        let response = await logForm.postRequest('http://localhost:8080/login.html', {username, password});

        console.log(response);
    })
})*/
(async function(){
    logForm.btnSubmit.addEventListener('click', async function(event) {
        event.preventDefault();

        let username = logForm.txtUName.value;
        let password = logForm.txtPword.value;


    let response = await logForm.postRequest('http://localhost:8080/login.html', {username, password});

    console.log(response);

    if ( username || password == 'ghuser' || 'secret'){
        alert("Login success")
    }else {
        alert("error")

        
    }
})
});