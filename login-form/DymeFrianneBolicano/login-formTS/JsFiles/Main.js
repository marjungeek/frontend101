"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MyHttpClient {
    constructor() {
        console.log('HttpClient was laoded...');
    }
    httpRequest(method, endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            //var myProm: any;
            return new Promise((resolve, reject) => {
                var xhr = new XMLHttpRequest();
                xhr.open(method, endpoint, true);
                if (method === 'post') {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    data = JSON.stringify(data);
                    // console.log('data: ',data)
                    // console.log(endpoint);
                }
                xhr.responseType = 'json';
                xhr.onload = () => __awaiter(this, void 0, void 0, function* () {
                    var status = xhr.status;
                    if (status == 200) {
                        //return await xhr.response;
                        resolve(xhr.response);
                    }
                    else {
                        reject(status);
                        //return await xhr.response;
                    }
                });
                xhr.send(data);
            });
            //return req;
        });
    }
    getRequest(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpRequest('get', endpoint);
        });
    }
    postRequest(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpRequest('post', endpoint, data);
        });
    }
}
class MylogForm extends MyHttpClient {
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
            var y = document.getElementById("robot");
            if (y.style.display === "block") {
                y.style.display = "none";
                document.getElementById("test-submit").className = "btn btn-primary btn btn-success disabled";
                //return NaN;
            }
            else {
                y.style.display = "block"; //show
                document.getElementById("test-submit").className = "btn btn-primary btn btn-success";
                this.myRandom();
            }
        };
        console.log('logForm was loaded...');
        this.postURL = options.postURL;
        this.total = NaN;
        this.userName = document.getElementById("UserName");
        this.userNamediv = document.getElementById("UserName-div");
        this.password = document.getElementById("password");
        this.passworddiv = document.getElementById("password-div");
        this.btnSubmit = document.getElementById('test-submit');
        this.checkbox = document.getElementById('checkbox');
        this.clear = document.getElementById('reload');
        this.ans = document.getElementById("Ans");
    }
}
const myObj1 = new MylogForm({
    postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});
(() => {
    myObj1.userName.addEventListener('blur', (event) => {
        event.preventDefault();
        const user = event.target.value;
        if (user !== '') {
            console.log('valid name');
            myObj1.userName.setAttribute('class', 'form-control is-valid');
        }
        else {
            console.log('invalid name');
            myObj1.userName.setAttribute('class', 'form-control is-invalid');
        }
    });
    myObj1.password.addEventListener('blur', (event) => {
        event.preventDefault();
        const passwd = event.target.value;
        if (passwd !== '') {
            console.log('valid password');
            myObj1.password.setAttribute('class', 'form-control is-valid');
        }
        else {
            console.log('invalid password');
            myObj1.password.setAttribute('class', 'form-control is-invalid');
        }
    });
    myObj1.btnSubmit.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        console.log("SUbmit Clicked!");
        var ans = parseInt(myObj1.ans.value);
        console.log(`ans: ${ans} total:${myObj1.total}`);
        if (myObj1.total == ans) {
            let username = myObj1.userName.value;
            let password = myObj1.password.value;
            let data = {
                username: username,
                password: password
            };
            console.log('UserName: ', username);
            console.log('password: ', password);
            var response = yield myObj1.postRequest(myObj1.postURL, data);
            //console.log(response);
            if (response.statusCode == 200) {
                console.log(response);
                myObj1.userName.setAttribute('class', 'form-control is-valid');
                myObj1.password.setAttribute('class', 'form-control is-valid');
                alert("Success!");
            }
            else {
                console.log(response);
                myObj1.userName.setAttribute('class', 'form-control is-invalid');
                myObj1.password.setAttribute('class', 'form-control is-invalid');
                alert("Fail!, invalid Credentials");
            }
            //console.log(response.statusCode);
        }
        else {
            alert('Wrong Capacha!');
            myObj1.myRandom();
        }
        return response;
    }));
    myObj1.checkbox.addEventListener('click', () => {
        console.log('Check box triggered');
        myObj1.myCheck();
    });
    // myObj1.clear.addEventListener('click', ()=> {
    //   console.log('reloading...');
    //   location.reload();
    // });
})();
