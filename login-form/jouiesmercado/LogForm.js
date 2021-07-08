import { HttpClient } from "./HttpClient.js";

export default class LogForm extends HttpClient {
    constructor (text) {
        console.log('LogForm was loaded...');
        super();

        //class property - sort of like configuration
        this.logURL = text.logURL;

        this.txtUName = document.getElementById('uname');
        this.txtPword = document.getElementById('password');

        this.btnSubmit = document.getElementById('submit');
    }

    // async getUsername() {
      //  return await this.getRequest(this.logURL);
   // }

}