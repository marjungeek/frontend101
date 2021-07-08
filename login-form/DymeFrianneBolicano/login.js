window.addEventListener('load', (event) => {
  console.log('The page has fully loaded');

// username: ghuser
// password: secret
class HttpClient {
  constructor() {
    console.log('HttpClient was laoded...');
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
      //this.body = document.getElementById("body");

       this.userName = document.getElementById("UserName");
       this.userNamediv = document.getElementById("UserName-div");

       this.password = document.getElementById("password");
       this.passworddiv = document.getElementById("password-div");

      this.btnSubmit = document.getElementById('test-submit');
      this.checkbox = document.getElementById('checkbox');
      this.clear = document.getElementById('reload');
      }

      myRandom(){
        var num1=Math.floor(Math.random() * 10);
        var num2=Math.floor(Math.random() * 10);
        total=num1+num2;
        document.getElementById("Q").innerHTML = ""+num1+"+"+num2+"?";

      }
      myCheck() {
          var y = document.getElementById("robot");
          if (y.style.display === "block") {
            y.style.display = "none";
            document.getElementById("test-submit").className = "btn btn-success disabled";
          } else {
            y.style.display = "block"; //show
            document.getElementById("test-submit").className = "btn btn-success";
            this.myRandom();
          }
      }
  }

  
const obj1 = new logForm({
    postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});
var total;
  // self-invoking function
(async function() {
    

  obj1.userName.addEventListener('blur', function(event) {
    event.preventDefault();
        
    const user = event.target.value;

        if (user !== '') {
            console.log('valid name');
            obj1.userNamediv.setAttribute('class','input-group has-success');
        } else {
            console.log('invalid name');
            obj1.userNamediv.setAttribute('class','input-group has-error');
        }
      });

      obj1.password.addEventListener('blur', function(event) {
        event.preventDefault();
        
        const passwd = event.target.value;

        if (passwd !== '') {
          console.log('valid password');
            obj1.passworddiv.setAttribute('class','input-group has-success');
        } else {
            console.log('invalid password');
            obj1.passworddiv.setAttribute('class','input-group has-error');

        }
      });
      
    obj1.btnSubmit.addEventListener('click', async function(event) {
      event.preventDefault();
      
      var ans=document.getElementById("Ans").value;

      console.log(`${ans} ${total}`)
      if(total==ans){
        let username = obj1.userName.value;
        let password = obj1.password.value;
      //console.log('URL',obj1.postURL.value);
        console.log('UserName: ',username);
        console.log('password: ',password);
        //console.log(obj1.postURL.value);
        let response = await obj1.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
      
        console.log(response);
        //console.log(response.statusCode);
        if(response.statusCode == 200){
          obj1.userNamediv.setAttribute('class','input-group has-success');
          obj1.passworddiv.setAttribute('class','input-group has-success');
          lert("Success!");
        }
        else {
          alert("Wrong Credentials!");
          obj1.userNamediv.setAttribute('class','input-group has-error');
          obj1.passworddiv.setAttribute('class','input-group has-error');
        }
      }
      else{
        alert('Wrong Capacha!');
        obj1.myRandom();
      }

    });

    obj1.checkbox.addEventListener('click', function(event) {
      //event.preventDefault();
      console.log('Check box triggered');
      var box = event.target.value;
      obj1.myCheck();

      //console.log('Data: ',box);
    });
    obj1.clear.addEventListener('click', function() {
      //event.preventDefault();
      console.log('reloading...');
      location.reload();

      //console.log('Data: ',box);
    });

  })();

});



