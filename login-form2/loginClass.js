import { HttpClient } from "./HttpClient.js";

export default class ClassForm extends HttpClient {
    constructor(options){
        console.log("ClassForm was loaded");
        super();

        this.LoginAPI = options.LoginAPI;
        this.btnLogIn = document.getElementById("submit");
        this.txtUsername = document.getElementById("username");
        this.txtPassword = document.getElementById("password");
    }

    async getMessage(){
        return await this.getRequest(this.LoginAPI);
    }
}