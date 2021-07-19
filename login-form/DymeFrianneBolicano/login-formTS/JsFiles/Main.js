var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MylogForm } from "./LogForm.js";
import { MyRegForm } from "./RegForm.js";
import { Validation } from "./Validation.js";
const myObj1 = new MylogForm({
    postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});
const myObj2 = new MyRegForm({
    countryURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries',
    cityURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites',
    teamURL: 'https://api.first.org/data/v1/teams'
});
const validation = new Validation();
// const validation = {
//   fname:false,
//   lname:false,
//   email:false,
//   password:false,
//   CList:false,
//   Gender:false,
//   teamList:false,
//   status: function():boolean{
//     if(this.fname&&this.lname&&this.email&&this.password&&this.Gender&&this.CList&&this.teamList){
//     //if(this.fname&&this.lname&&this.email&&this.password&&this.Gender){
//       return true;
//     }
//     else{
//       return false;
//     }
//   },
//   myReset: function():void{
//     this.fname=false;
//     this.lname=false;
//     this.email=false;
//     this.password=false;
//     this.CList=false;
//     this.Gender=false;
//     this.teamList=false;
//   }
// };
//for login
(() => {
    //for loginform
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
        }
        else {
            alert('Wrong Capacha!');
            myObj1.myRandom();
        }
        //return response;
    }));
    myObj1.checkbox.addEventListener('click', () => {
        console.log('Check box triggered');
        myObj1.myCheck();
    });
    myObj1.clear.addEventListener('click', () => {
        console.log('reloading...');
        myObj1.modalForm1.reset();
        //myObj1.robo.style
        myObj1.robo.style.display = "none";
        //location.reload();
    });
})();
(() => __awaiter(void 0, void 0, void 0, function* () {
    //for registration form -------------------------------------------------------------------------------------------------------->>>>
    // load the data
    let countries = yield myObj2.getCountries(myObj2.countryURL); // fetch API, retrieve data response
    myObj2.loadCountries(countries); // render country options
    let teams = yield myObj2.getTeams(myObj2.teamURL);
    myObj2.loadTeams(teams.data);
    //event listener
    myObj2.CList.addEventListener('change', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const box = event.target.value;
        if (box != '') {
            console.log('valid Country ', typeof (box), box);
            myObj2.CList.setAttribute('class', 'form-control is-valid');
            validation.CList = true;
        }
        else {
            console.log('invalid GCountry');
            myObj2.CList.setAttribute('class', 'form-control is-invalid');
            validation.CList = false;
        }
        let cities = yield myObj2.getCities(myObj2.cityURL);
        myObj2.loadCity(box, cities);
    }));
    myObj2.firstname.addEventListener('blur', (event) => {
        event.preventDefault();
        const box = event.target.value;
        if (box !== '') {
            console.log('valid name');
            myObj2.firstname.setAttribute('class', 'form-control is-valid');
            validation.fname = true;
        }
        else {
            console.log('invalid name');
            myObj2.firstname.setAttribute('class', 'form-control is-invalid');
            validation.fname = false;
        }
    });
    myObj2.lastname.addEventListener('blur', (event) => {
        event.preventDefault();
        const box = event.target.value;
        if (box !== '') {
            console.log('valid name');
            myObj2.lastname.setAttribute('class', 'form-control is-valid');
            validation.lname = true;
        }
        else {
            console.log('invalid name');
            myObj2.lastname.setAttribute('class', 'form-control is-invalid');
            validation.lname = false;
        }
    });
    myObj2.email.addEventListener('blur', (event) => {
        event.preventDefault();
        const box = event.target.value;
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(box)) {
            console.log('valid email');
            myObj2.email.setAttribute('class', 'form-control is-valid');
            validation.email = true;
        }
        else {
            console.log('invalid email');
            myObj2.email.setAttribute('class', 'form-control is-invalid');
            validation.email = false;
        }
    });
    myObj2.password2.addEventListener('blur', (event) => {
        event.preventDefault();
        const box = event.target.value;
        if (box !== '') {
            console.log('valid pass');
            if (box === myObj2.repassword2.value) {
                console.log('password match');
                myObj2.password2.setAttribute('class', 'form-control is-valid');
                myObj2.repassword2.setAttribute('class', 'form-control is-valid');
                validation.password = true;
            }
            else {
                console.log('password mis-match');
                myObj2.password2.setAttribute('class', 'form-control is-invalid');
                myObj2.repassword2.setAttribute('class', 'form-control is-invalid');
                validation.password = false;
            }
        }
        else {
            console.log('invalid pass');
            myObj2.password2.setAttribute('class', 'form-control is-invalid');
            validation.password = false;
        }
    });
    myObj2.repassword2.addEventListener('blur', (event) => {
        event.preventDefault();
        const box = event.target.value;
        if (box !== '') {
            console.log('valid pass');
            if (box === myObj2.password2.value) {
                console.log('password match');
                myObj2.password2.setAttribute('class', 'form-control is-valid');
                myObj2.repassword2.setAttribute('class', 'form-control is-valid');
                validation.password = true;
            }
            else {
                console.log('password mis-match');
                myObj2.password2.setAttribute('class', 'form-control is-invalid');
                myObj2.repassword2.setAttribute('class', 'form-control is-invalid');
                validation.password = false;
            }
        }
        else {
            console.log('invalid pass');
            myObj2.repassword2.setAttribute('class', 'form-control is-invalid');
            validation.password = false;
        }
    });
    myObj2.Gender.addEventListener('blur', (event) => {
        event.preventDefault();
        const box = event.target.value;
        if (box != '- Select -') {
            console.log('valid Gender');
            myObj2.Gender.setAttribute('class', 'form-control is-valid');
            validation.Gender = true;
        }
        else {
            console.log('invalid Gender');
            myObj2.Gender.setAttribute('class', 'form-control is-invalid');
            validation.Gender = false;
        }
    });
    myObj2.teamList.addEventListener('blur', (event) => {
        event.preventDefault();
        const box = event.target.value;
        if (box != '') {
            console.log('valid team');
            myObj2.teamList.setAttribute('class', 'form-control is-valid');
            validation.teamList = true;
        }
        else {
            console.log('invalid team');
            myObj2.teamList.setAttribute('class', 'form-control is-invalid');
            validation.teamList = false;
        }
    });
    myObj2.checkbox.addEventListener('click', () => {
        console.log('Check box triggered');
        myObj2.myCheck();
    });
    myObj2.btnSubmit.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        console.log("Submit Clicked!");
        console.log("Validation Status: ", validation.status());
        if (validation.status()) {
            myObj2.addData();
        }
        else {
            console.log("error, make sure all inputs are correct");
            alert("error, make sure all inputs are correct");
        }
    }));
    myObj2.clear.addEventListener('click', () => {
        console.log('reloading...');
        myObj2.modalForm2.reset();
        localStorage.clear();
        validation.myReset();
        myObj2.btnSubmit.className = "btn btn-primary btn btn-success disabled";
        myObj2.inputans.className = "input-group invisible";
        //localStorage.clear();
        //myObj1.robo.style
        myObj2.robo.style.display = "none";
        //location.reload();
    });
    myObj2.ans.addEventListener('blur', (event) => {
        event.preventDefault();
        const box = parseInt(event.target.value);
        if (box == myObj2.total) {
            console.log('Correct ans');
            myObj2.ans.setAttribute('class', 'form-control is-valid');
            validation.ans = true;
        }
        else {
            console.log('invalid ans');
            myObj2.ans.setAttribute('class', 'form-control is-invalid');
            validation.ans = false;
            myObj2.myRandom();
        }
    });
}))();
