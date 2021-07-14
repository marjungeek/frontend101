const username = document.getElementById('inUsername')! as HTMLInputElement;
const password = document.getElementById('inPassword')! as HTMLInputElement;

const btnLogin = document.getElementById('btnLogin')! as HTMLElement;

// interface anything {

// }

// let x:any = (name, 21, true, female)

/**
 * sendLogin
 * - this function does whatever, autheticates username and password
 * @param username 
 * @param password 
 * @returns 
 */
function sendLogin1(username: string, password: string): string | boolean {
  return true;
}

// some comments
let response1: string | boolean = sendLogin1(username.value, password.value);

// other comment
console.log(response);

// let x:any[];

// x = [ "name" , 21 , true, {}, [] ];
// x = 'string';


// to compile run in your terminal: tsc --removeComments main.ts