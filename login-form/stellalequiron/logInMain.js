import logForm from "./logInForm.js";

window.addEventListener('load', (event) => {
    console.log('The page has fully loaded');

    const object1 = new logForm({
        postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
    });

    (async function(){
        object1.username.addEventListener('blur', function(event){
            event.preventDefault();

            const user = event.target.value;

            if (user !== ''){
                console.log('valid');
                object1.userName.setAttribute('class','input-group-success');
            } else{
                console.log('invalid');
                object1.userName.setAttribute('class','input-group error');
            }
        });

        object1.password.addEventListener('blur', function(event){
            event.preventDefault();

            const passwd = event.target.value;

            if (passwd !== ''){
                console.log('password is valid')
                object1.passWord.setAttribute('class', 'input-group success');
            } else{
                console.log('password not valid')
                object1.passWord.setAttribute('class','input-group error');
            }
        });

        object1.btnSubmit.addEventListener('click', async function(event){
            event.preventDefault();

            let username = object1.username.value;
            let password = object1.password.value;
            console.log('Username: ', 'username');
            console.log('Password: ', 'password');

            let response = await object1.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', {username, password});
        
            console.log(response);
            if(response.statusCode == 200){
                object1.userName.setAttribute('class', 'input-group success');
                object1.passWord.setAttribute('class', 'input-group success');
                alert("Success");
            } else{
                alert("Wrong Input");
                object1.userName.setAttribute('class', 'input-group error');
                object1.passWord.setAttribute('class', 'input-group error');
            }
        });
    })();
});
