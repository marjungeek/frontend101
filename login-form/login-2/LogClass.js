import {LogClient} from './LogClient.js';
export default class LogClass extends LogClient{
    constructor(){
        console.log('Loaded Login...');
        super();
        this.username = document.getElementById('username');
        this.password = document.getElementById('password');
        this.loginbtn = document.getElementById('login');
    }
}
