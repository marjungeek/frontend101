import { HttpClient } from "./HttpClient.js";

export default class RegForm extends HttpClient {
  constructor(options) {
    console.log('RegForm was loaded...');
    super();

    // class property - sort of like configuration
    this.countryUrl = options.countryUrl;
    this.cityUrl = options.cityUrl;
    this.teamUrl = options.teamUrl;

    this.optCountries = document.getElementById('countryList');
    this.optTeams = document.getElementById('teamList');
    this.txtCity = document.getElementById('city');


    this.txtFirstname = document.getElementById('FN');
    this.txtLastname = document.getElementById('LN');
    this.txtPassword = document.getElementById('psw');
    this.txtPasswordRepeat = document.getElementById('pswrepeat');
    this.txtEmail = document.getElementById('email');

    this.btnSubmit = document.getElementById('submit');
  }

  async getCountries() {
    return await this.getRequest(this.countryUrl);
  }

  async getCities() {
    return await this.getRequest(this.cityUrl);
  }

  async getTeams() {
    return await this.getRequest(this.teamUrl);
  }

  loadCountries(data) {
    const options = this.constructDropDown(data, 'country');
    this.optCountries.innerHTML = options;
  }

  loadTeams(data) {
    const options = this.constructDropDown(data, 'team');
    this.optTeams.innerHTML = options;
  }

  loadCity(countryCode, cities) {
    this.txtCity.value = '';

    for(var i = 0; i < cities.length; i++) {
      if(countryCode == cities[i].CountryCode) {
        this.txtCity.value = cities[i].Capital;
      }
    }
  }

  constructDropDown(data, type){
    let options = '<option value="">Select</option>';  
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

// export function doSomething() {
//   console.log('doing something...');
// }

// export function doSomethingAgain() {

// }