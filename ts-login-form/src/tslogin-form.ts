export class TsLogin{
    constructor(){
        console.log("ts login form loaded");

        const username = document.getElementById("username")! as HTMLInputElement;
        const password = document.getElementById("password")! as HTMLInputElement;
        const btnLogin = document.getElementById("loginButton")! as HTMLInputElement;
    }
}