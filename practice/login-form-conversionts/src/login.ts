import { loginProperties, loginResponse } from "./interface";
import httpClient from "./httpClient";

export default class login extends httpClient {
    $username: HTMLInputElement;
    $password: HTMLInputElement;
    $btnLogin: HTMLButtonElement;
    $btnShowPwd: HTMLInputElement;
    loginURL: string;
    success: () => void;
    error: () => void;

    constructor(property: loginProperties) {
        super();

        this.$username = document.getElementById('uname')! as HTMLInputElement;
        this.$password = document.getElementById('pwd')! as HTMLInputElement;
        this.$btnLogin = document.getElementById('login')! as HTMLButtonElement;
        this.$btnShowPwd = document.getElementById('show')! as HTMLInputElement;

        this.loginURL = property.loginURL;
        this.success = property.success;
        this.error = property.error;
    }

    async httpRequest() {
        console.log("The Request");
    }

    async sendLogin(): Promise<loginResponse|any>{
        const username = this.$username.value;
        const password = this.$password.value;

        return await super.httpRequest({
            method: 'post',
            endpoint: this.loginURL,
            headers: { 'content-type': 'application/json'},
            requestBody: JSON.stringify({ username , password}),
            responseType: 'json'
        });
    }

    listener() {
        const object = this;

        this.$btnLogin.addEventListener('click', async function(event) {
            event.preventDefault();

            if(object.$username.value !== '' && object.$password.value !== '') {
                let response = await object.sendLogin();
                object.validation(response);
            }
        });
        // showpwd
    }

    private validation(response: loginResponse) {
        if(response.statusCode === 200) {
            this.success();
        }
        else {
            this.error();
        }
    }
}

// import { httpClient } from "./httpClient";

// export class login extends httpClient {
//     constructor(x: string){
//         super();
//         this.url = x.url;
//         this.user = document.getElementById('uname');
//         this.pass = document.getElementById('pwd');
//         this.btnLogin = document.getElementById('login');
//     }
// }