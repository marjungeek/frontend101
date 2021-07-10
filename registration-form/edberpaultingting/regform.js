import { httpclient } from "./httpclient.js";
//Step 5:
//Step:3
//export default syntax (https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript)
export default class RegForm extends httpclient{//Step 1: Connect HTML to JS Files
    constructor() {
        console.log("Class RegForm was Loaded");
        super();

        this.fname = document.getElementById("firstNameControl");
        this.lname = document.getElementById("lastNameControl");
        this.email = document.getElementById("emailControl");
        this.teamList = document.getElementById("teamList");
        this.countryList = document.getElementById("countryList");
        this.cityList = document.getElementById("cityList");
        this.pass = document.getElementById("passwordControl");
        this.repass = document.getElementById("repasswordControl");

        this.startBtn = document.getElementById("startButton");
        this.clearBtn = document.getElementById("clearButton");
        this.addBtn = document.getElementById("addButton");
        this.viewBtn = document.getElementById("viewButton");
        this.deleteBtn = document.getElementById("deleteButton");
    }

    async getCountries () {
        return await this.getRequest(this.apiCountry);
    }

    loadCountries (data) {
        const options = this.constructDropDown(data, 'country');
        this.countryList.innerHTML = options;
    }

    constructDropDown(data, type){
        let options = '<option value="" disabled selected>Select</option>';
        //construct list of dropdown based from api response using loops
        for (var i = 0; i < data.length; i++) {    
            let value;
            let id;
            if(type == 'team'){
                value = data[i].team;
                id = data[i].id;
            }else{
                value = data[i].Name;
                id = data[i].Code;
            }
            options += '<option value="' + id + '">' + value + '</option>'; 
        }
        return options;
      }
}