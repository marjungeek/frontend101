import loginform from "./loginform.js"

console.log('login loaded');
const loginForm = new loginform({
    loginApi: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
    success:function(){
        console.log('success');
    },
    error:function(){
        console.log('success');
    }
});
loginForm.listener();

