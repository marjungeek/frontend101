window.addEventListener('load', (event) => {
    console.log('The page is loaded');

    class HttpClient {
        constructor() {
          console.log('HttpClient was loaded...');
        }

        async #httpRequest(method, endpoint, data = undefined) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();      
            xhr.open(method, endpoint, true);
            if (method === 'post') {
              xhr.setRequestHeader('Content-Type', 'application/json');  
              data = JSON.stringify(data);
              console.log('data: ',data)
              console.log(endpoint);
            }
      
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send(data);
          });
        }
      
        async getRequest(endpoint) {
          return await this.#httpRequest('get', endpoint);
        }
      
        async postRequest(endpoint, data) {
          return await this.#httpRequest('post', endpoint, data);
        }
    }
    
    class logForm extends HttpClient {
        constructor(options) {
            console.log('RegForm was loaded...');
            super();
            this.postURL = options.postURL;
            this.username = document.getElementById("username");
            this.userName = document.getElementById("userName");
            this.password = document.getElementById("password");
            this.passWord = document.getElementById("passWord");
            this.btnSubmit = document.getElementById('test-submit');
        }
    }   

    const object1 = new logForm({
        postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
    });
    
    (async function(){
        object1.username.addEventListener('blur', function(event){
            event.preventDefault();

            const user = event.target.value;

            if (user !== ''){
                console.log('valid');
                object1.userName.setAttribute('class','input-group success');
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

function passwordbtn(){
    var password = document.getElementById("password");
    if (password.type === "password"){
        password.type = "text";
    } else{
        password.type = "password"
    }
}

function cancel() {
    document.getElementById("loginAccount").reset();
    location.reload();
}