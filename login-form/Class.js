import { HttpClient } from "./HttpClient.js";

export default class ClassForm extends HttpClient {
    constructor(options){
        console.log("ClassForm was loaded");
        super();

        this.LoginAPI = options.LoginAPI;
        this.btnLogin = document.getElementById("submit");
    }

    async getMessage(){
        return await this.getRequest(this.LoginAPI);
    }
}