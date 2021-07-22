import { HttpClient } from "./HttpClient";
import { LoginOpt } from "./interface";

console.log('login.ts LOADED!');

export default class login extends HttpClient{
    
    user: HTMLInputElement;
    pass: HTMLInputElement;

    subButton: HTMLButtonElement;

    url:string;


    constructor(options:LoginOpt){
        super();

        this.url = options.url;

        this.user = document.getElementById('user')! as HTMLInputElement;
        this.pass = document. getElementById('pass')! as HTMLInputElement;

        this.subButton = document.getElementById('subButton')! as HTMLButtonElement;

    
    }

    listener(){


        this.subButton.addEventListener('click', function(event){
            event.preventDefault();

            alert("button clicked");



        });
        
    }

   

}