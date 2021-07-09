import {HttpClient} from "./HttpClient.js";

export default class Regis extends HttpClient{
    constructor(login){
        super();   
        this.loginApi = login.url;
        this.subBtn = document.getElementById('subButton');
        this.user = document.getElementById('user');
        this.pass = document.getElementById('pass');
        
    }
    
}