import { HttpClient } from "./HttpClient.js";

export default class LogForm extends HttpClient {
    btnSubmit: any;
    txtUName: any;
    txtPword: any;
    constructor (text) {
        console.log('LogForm was loaded...');
        super();


        const username = document.getElementById('uname')! as HTMLInputElement;
        const password = document.getElementById('pword')! as HTMLInputElement;

        const btnLogin = document.getElementById('btnsubmit')! as HTMLLIElement;

        function sendLogin(username: string, password: string): string {
        return;
}

        let response: string = sendLogin(username.value, password.value);

        console.log(response);
        //class property - sort of like configuration
        //this.logURL = text.logURL;

        // this.txtUName = document.getElementById('uname');
        // this.txtPword = document.getElementById('password');

        // this.btnSubmit = document.getElementById('submit');
    }

    // async getUsername() {
      //  return await this.getRequest(this.logURL);
   // }

}