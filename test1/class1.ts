export default class class1 {
    username : string;
    password : string;
    constructor (username : string, password : string){
        this.username = username;
        this.password = password;
    }
    display() : void {
        console.log ('name: ' + this.username + ', password: ' + this.password)
    }
}