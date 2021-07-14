var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HttpClient = /** @class */ (function () {
    function HttpClient() {
        console.log('HttpClient was laoded...');
    }
    HttpClient.prototype.httpRequest = function (method, endpoint, data) {
        console.log('httpReq!');
        console.log(data);
        var xhr = new XMLHttpRequest();
        //console.log('addEvnetlistener HTTP!')
        xhr.open(method, endpoint, true);
        if (method === 'post') {
            xhr.setRequestHeader('Content-Type', 'application/json');
            data = JSON.stringify(data);
        }
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                if (xhr.response.statusCode == 200) {
                    console.log(xhr.response.statusCode);
                    obj1.userName.setAttribute('class', 'form-control is-valid');
                    obj1.password.setAttribute('class', 'form-control is-valid');
                    alert("Success!");
                }
                else {
                    console.log(xhr.response);
                    obj1.userName.setAttribute('class', 'form-control is-invalid');
                    obj1.password.setAttribute('class', 'form-control is-invalid');
                    alert("Fail!, invalid Credentials");
                }
                //return xhr.response;
            }
            else {
                alert("Fail!");
                //return status;
            }
        };
        xhr.send(data);
    };
    HttpClient.prototype.getRequest = function (endpoint) {
        this.httpRequest('get', endpoint);
    };
    HttpClient.prototype.postRequest = function (endpoint, data) {
        console.log('postReq!');
        this.httpRequest('post', endpoint, data);
    };
    return HttpClient;
}());
var logForm = /** @class */ (function (_super) {
    __extends(logForm, _super);
    function logForm(options) {
        var _this = _super.call(this) || this;
        _this.myRandom = function () {
            var num1 = Math.floor(Math.random() * 10);
            var num2 = Math.floor(Math.random() * 10);
            _this.total = num1 + num2;
            document.getElementById("Q").innerHTML = "" + num1 + "+" + num2 + "?";
            //return total;
        };
        _this.myCheck = function () {
            var y = document.getElementById("robot");
            if (y.style.display === "block") {
                y.style.display = "none";
                document.getElementById("test-submit").className = "btn btn-primary btn btn-success disabled";
                //return NaN;
            }
            else {
                y.style.display = "block"; //show
                document.getElementById("test-submit").className = "btn btn-primary btn btn-success";
                _this.myRandom();
            }
        };
        console.log('logForm was loaded...');
        _this.postURL = options.postURL;
        _this.total = NaN;
        _this.userName = document.getElementById("UserName");
        _this.userNamediv = document.getElementById("UserName-div");
        _this.password = document.getElementById("password");
        _this.passworddiv = document.getElementById("password-div");
        _this.btnSubmit = document.getElementById('test-submit');
        _this.checkbox = document.getElementById('checkbox');
        _this.clear = document.getElementById('reload');
        _this.ans = document.getElementById("Ans");
        return _this;
    }
    return logForm;
}(HttpClient));
console.log('The page has fully loaded');
//var total;
var obj1 = new logForm({
    postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});
// self-invoking function
(function () {
    obj1.userName.addEventListener('blur', function (event) {
        event.preventDefault();
        var user = event.target.value;
        if (user !== '') {
            console.log('valid name');
            obj1.userName.setAttribute('class', 'form-control is-valid');
        }
        else {
            console.log('invalid name');
            obj1.userName.setAttribute('class', 'form-control is-invalid');
        }
    });
    obj1.password.addEventListener('blur', function (event) {
        event.preventDefault();
        var passwd = event.target.value;
        if (passwd !== '') {
            console.log('valid password');
            obj1.password.setAttribute('class', 'form-control is-valid');
        }
        else {
            console.log('invalid password');
            obj1.password.setAttribute('class', 'form-control is-invalid');
        }
    });
    obj1.btnSubmit.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("SUbmit Clicked!");
        //   var btnStatus:boolean= obj1.btnSubmit.getAttribute("class").includes("disabled")
        //   console.log(btnStatus);
        //   if(btnStatus){
        //     console.log("Btn is disabled!")
        //     return;
        //   }
        //   console.log("Btn is enabled!")
        var ans = parseInt(obj1.ans.value);
        console.log("ans: " + ans + " total:" + obj1.total);
        if (obj1.total == ans) {
            var username = obj1.userName.value;
            var password = obj1.password.value;
            var data = {
                username: username,
                password: password
            };
            console.log('UserName: ', username);
            console.log('password: ', password);
            obj1.postRequest(obj1.postURL, data);
            //let username = obj1.userName.value;
            //let password = obj1.password.value;
            //console.log('URL',obj1.postURL.value);
            //console.log(obj1.postURL.value);
            //let response = await obj1.postRequest(obj1.postURL, { username, password });
            //console.log(response);
            //console.log(response.statusCode);
        }
        else {
            alert('Wrong Capacha!');
            obj1.myRandom();
        }
        // if(response.statusCode == 200){
        //   obj1.userNamediv.setAttribute('class','input-group has-success');
        //   obj1.passworddiv.setAttribute('class','input-group has-success');
        //   alert("Success!");
        // }else {
        //   alert("Wrong Credentials!");
        //   obj1.userNamediv.setAttribute('class','input-group has-error');
        //   obj1.passworddiv.setAttribute('class','input-group has-error');
        // }
    });
    obj1.checkbox.addEventListener('click', function () {
        console.log('Check box triggered');
        obj1.myCheck();
    });
    // obj1.clear.addEventListener('click', ()=> {
    //   console.log('reloading...');
    //   location.reload();
    // });
})();
