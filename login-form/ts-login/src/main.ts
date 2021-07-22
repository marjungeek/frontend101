import Login from './Login'

console.log('main.ts LOADED!');


const loginForm = new Login({url:'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'});


loginForm.listener();

 