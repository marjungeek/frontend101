
import LogForm from "./LogForm.js";
console.log('Application was loaded');


const logForm = new LogForm({
  userUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
});

(async function() {


  logForm.btnSubmit.addEventListener('click', async function(event) {
    event.preventDefault();

    let username = logForm.userName.value;
    let password = logForm.password.value;

    let response = await logForm.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });

    console.log(response);
    alert("Logged in Successfully!")
  });
})();
