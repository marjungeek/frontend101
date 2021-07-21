import { MyHttpClient } from "./HTTP.js";
export class MylogForm extends MyHttpClient {
    constructor(options) {
        super();
        this.myRandom = () => {
            var num1 = Math.floor(Math.random() * 10);
            var num2 = Math.floor(Math.random() * 10);
            this.total = num1 + num2;
            document.getElementById("Q").innerHTML = "" + num1 + "+" + num2 + "?";
            //return total;
        };
        this.myCheck = () => {
            //var y = 
            if (this.robo.style.display === "block") {
                this.robo.style.display = "none";
                document.getElementById("test-submit").className = "btn btn-primary btn btn-success disabled";
                //return NaN;
            }
            else {
                this.robo.style.display = "block"; //show
                document.getElementById("test-submit").className = "btn btn-primary btn btn-success";
                this.myRandom();
            }
        };
        console.log('logForm was loaded...');
        this.postURL = options.postURL;
        this.total = NaN;
        this.userName = document.getElementById("UserName");
        //this.userNamediv = (<HTMLInputElement>document.getElementById("UserName-div"));
        this.password = document.getElementById("password");
        //this.passworddiv = (<HTMLInputElement>document.getElementById("password-div"));
        this.btnSubmit = document.getElementById('test-submit');
        this.modalForm1 = document.getElementById("modal-body-1");
        this.checkbox = document.getElementById('checkbox');
        this.clear = document.getElementById('reload');
        this.robo = document.getElementById("robot");
        this.ans = document.getElementById("Ans");
    }
}
