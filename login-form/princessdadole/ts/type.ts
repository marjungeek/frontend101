const username = document.getElementById('user')! as HTMLInputElement;
const password = document.getElementById('password')! as HTMLInputElement;

const btnLogin = document.getElementById('submit')! as HTMLButtonElement;

function doLogin(username: string, password: string ): string | boolean{
    return true;
}

let response: string | boolean = doLogin(username.value,password.value);

console.log(response);