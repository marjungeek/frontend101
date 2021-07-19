var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MyHttpClient } from "./HTTP.js";
//import { DT } from "./Interface";
export class MyRegForm extends MyHttpClient {
    constructor(options) {
        super();
        this.myRandom = () => {
            var num1 = Math.floor(Math.random() * 10);
            var num2 = Math.floor(Math.random() * 10);
            this.total = num1 + num2;
            document.getElementById("Q2").innerHTML = "" + num1 + "+" + num2 + "?";
            //return total;
        };
        this.myCheck = () => {
            //var y = 
            if (this.robo.style.display === "block") {
                this.robo.style.display = "none";
                this.btnSubmit.className = "btn btn-primary btn btn-success disabled";
                this.inputans.className = "input-group invisible";
                //return NaN;
            }
            else {
                this.robo.style.display = "block"; //show
                this.btnSubmit.className = "btn btn-primary btn btn-success";
                this.inputans.className = "input-group visible";
                this.myRandom();
            }
        };
        console.log('regForm was loaded...');
        this.countryURL = options.countryURL;
        this.cityURL = options.cityURL;
        this.teamURL = options.teamURL;
        this.total = NaN;
        this.firstname = document.getElementById('firstname');
        this.lastname = document.getElementById('lastname');
        this.email = document.getElementById('email');
        this.CList = document.getElementById('CList');
        this.City = document.getElementById('City');
        this.teamList = document.getElementById('teamList');
        this.Gender = document.getElementById('Gender');
        this.password2 = document.getElementById('password2');
        this.repassword2 = document.getElementById('repassword2');
        this.inputans = document.getElementById('input-ans');
        this.btnSubmit = document.getElementById('test-submit2');
        this.modalForm2 = document.getElementById("modal-body-2");
        this.checkbox = document.getElementById('checkbox2');
        this.clear = document.getElementById('reload2');
        this.robo = document.getElementById("robot2");
        this.ans = document.getElementById("Ans2");
    }
    getCountries(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRequest(endpoint);
        });
    }
    getCities(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRequest(endpoint);
        });
    }
    getTeams(endpoint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getRequest(endpoint);
        });
    }
    loadCountries(data) {
        const options = this.constructDropDown(data, 'country');
        this.CList.innerHTML = options;
    }
    loadTeams(data) {
        const options = this.constructDropDown(data, 'team');
        this.teamList.innerHTML = options;
    }
    loadCity(countryCode, cities) {
        this.City.value = '';
        for (var i = 0; i < cities.length; i++) {
            if (countryCode == cities[i].CountryCode) {
                this.City.value = cities[i].Capital;
            }
        }
    }
    constructDropDown(data, type) {
        let options = '<option value="">Select</option>';
        //construct list of dropdown based from api response using loops
        for (var i = 0; i < data.length; i++) {
            let value;
            let id;
            if (type == 'team') {
                value = data[i].team;
                id = data[i].id;
            }
            else {
                value = data[i].Name;
                id = data[i].Code;
            }
            options += '<option value="' + id + '">' + value + '</option>';
        }
        return options;
    }
    addData() {
        localStorage.clear();
        //var ans=parseInt((<HTMLInputElement>this.ans).value)
        //if(this.total==ans){
        localStorage.setItem("First Name", this.firstname.value);
        localStorage.setItem("Last Name", this.lastname.value);
        localStorage.setItem("Email", this.email.value);
        localStorage.setItem("Country", this.CList.value);
        localStorage.setItem("City", this.City.value);
        localStorage.setItem("Team List", this.teamList.value);
        localStorage.setItem("Gender", this.Gender.value);
        localStorage.setItem("Password", this.password2.value);
        console.log("Correct! \nRegistered, Data stored to local Storage!");
        alert("Correct! \nRegistered, Data stored to local Storage!");
        //}else{
        //     alert(`Wrong capacha!\n${ans} not equal to ${this.total}` );
        //     this.myRandom();
        // }
    }
}
