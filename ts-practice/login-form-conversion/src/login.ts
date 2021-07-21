import { loginProperties } from "./interface";
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