import Login from './Login.js';
console.log('main.ts LOADED!');
var loginForm = new Login({ url: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login' });
loginForm.listener();
