import { HttpClient } from "./HttpClient.js";

export default class ClassForm extends HttpClient {
    constructor(options){
        console.log("ClassForm was loaded");
        super();

        this.messageUrl = options.messageUrl;
    }

    async getMessage(){
        return await this.getRequest(this.messageUrl);
    }
}