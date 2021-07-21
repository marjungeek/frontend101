import loginform from "./loginform.js"

console.log('login loaded');
const loginForm = new loginform({
    var loginApi: string = 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});
loginForm.listener();

