import LoginForm from "./LoginForm.js";

console.log("Application was loaded...");

const loginForm = new LoginForm({
    baseURL:
    "https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",
});
  

(async function() {  

  
    loginForm.btnSubmit.addEventListener('click', async function(event) {
      event.preventDefault();
  
      let username = loginForm.userName.value;
      let password = loginForm.password.value;
       
      let response = await loginForm.postRequest("https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login",{ username, password }
      );
      console.log(response)
      if (response.statusCode == 200) {
          location.href = "http://13.250.185.82/";
      }
      else{
        alert("Wrong Username or Password!");
      }
      
  
    });

    loginForm.btnTwit.addEventListener("click", async function (event) {
      event.preventDefault();
      location.href = "https://twitter.com/login?lang=en";
    });

    loginForm.btnFb.addEventListener("click", async function (event) {
      event.preventDefault();
      location.href = "https://www.facebook.com/";
     });




  })();


