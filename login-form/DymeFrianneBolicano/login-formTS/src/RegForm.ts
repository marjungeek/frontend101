import { MyHttpClient } from "./HTTP";
import { regOption } from "./Interface";

export class MyRegForm extends MyHttpClient {
    countryURL:string;
    cityURL:string;
    teamURL:string;
  
    //validation:any;
    
    firstname:HTMLElement;
    lastname:HTMLElement;
    email:HTMLElement;
    CList:HTMLElement;
    City:HTMLElement;
    Gender:HTMLElement;
    teamList:HTMLElement;
    password2:HTMLElement;
    repassword2:HTMLElement;
    inputans:HTMLElement;
  
    btnSubmit:HTMLElement;
    checkbox:HTMLElement;
    clear:HTMLElement;
    ans:HTMLElement;
    robo:HTMLElement;
    modalForm2:HTMLElement;
    total:number;
  
    constructor(options:regOption) {
    super();
    console.log('regForm was loaded...');
      
    this.countryURL = options.countryURL;
    this.cityURL= options.cityURL;
    this.teamURL= options.teamURL;
    this.total=NaN;
  
    this.firstname = (<HTMLInputElement>document.getElementById('firstname'));
    this.lastname = (<HTMLInputElement>document.getElementById('lastname'));
    this.email = (<HTMLInputElement>document.getElementById('email'));
    this.CList = (<HTMLInputElement>document.getElementById('CList'));
    this.City = (<HTMLInputElement>document.getElementById('City'));
    this.teamList = (<HTMLInputElement>document.getElementById('teamList'));
    this.Gender = (<HTMLInputElement>document.getElementById('Gender'));
    this.password2 = (<HTMLInputElement>document.getElementById('password2'));
    this.repassword2 =(<HTMLInputElement>document.getElementById('repassword2'));
    this.inputans=(<HTMLInputElement>document.getElementById('input-ans'));
    
    this.btnSubmit = (<HTMLButtonElement>document.getElementById('test-submit2'));
    this.modalForm2 =(<HTMLImageElement>document.getElementById("modal-body-2"));
    this.checkbox = (<HTMLInputElement>document.getElementById('checkbox2'));
    this.clear = (<HTMLButtonElement>document.getElementById('reload2'));
    this.robo = (<HTMLInputElement>document.getElementById("robot2"));
    this.ans=(<HTMLInputElement>document.getElementById("Ans2"));
  
    }
  
    
    myRandom=()=>{
      var num1=Math.floor(Math.random() * 10);
      var num2=Math.floor(Math.random() * 10);
      this.total=num1+num2;
      (<HTMLInputElement>document.getElementById("Q2")).innerHTML = ""+num1+"+"+num2+"?";
      //return total;
    
    }
    myCheck=()=> {
      //var y = 
      if (this.robo.style.display === "block") {
        this.robo.style.display = "none";
        (<HTMLButtonElement>this.btnSubmit).className = "btn btn-primary btn btn-success disabled";
        (<HTMLInputElement>this.inputans).className = "input-group invisible";
        //return NaN;
      } 
      else {
        this.robo.style.display = "block"; //show
        (<HTMLButtonElement>this.btnSubmit).className  = "btn btn-primary btn btn-success";
        (<HTMLInputElement>this.inputans).className = "input-group visible";
        this.myRandom();
  
      }
    }
    async getCountries(endpoint:string) {
      return await this.getRequest(endpoint);
    }
  
    async getCities(endpoint:string) {
      return await this.getRequest(endpoint);
    }
  
    async getTeams(endpoint:string) {
      return await this.getRequest(endpoint);
    }
  
    loadCountries(data:any) {
      const options = this.constructDropDown(data, 'country');
      this.CList.innerHTML = options;
    }
  
    loadTeams(data:any) {
      const options = this.constructDropDown(data, 'team');
      this.teamList.innerHTML = options;
    }
  
    loadCity(countryCode:any, cities:any) {
      (<HTMLInputElement>this.City).value = '';
  
      for(var i = 0; i < cities.length; i++) {
        if(countryCode == cities[i].CountryCode) {
          (<HTMLInputElement>this.City).value = cities[i].Capital;
        }
      }
    }
  
    constructDropDown(data:any, type:string){
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
  addData(){
    localStorage.clear();
    //var ans=parseInt((<HTMLInputElement>this.ans).value)

    //if(this.total==ans){

        localStorage.setItem("First Name",(<HTMLInputElement>this.firstname).value);
        localStorage.setItem("Last Name",(<HTMLInputElement>this.lastname).value);
        localStorage.setItem("Email",(<HTMLInputElement>this.email).value);
        localStorage.setItem("Country",(<HTMLInputElement>this.CList).value);
        localStorage.setItem("City",(<HTMLInputElement>this.City).value);
        localStorage.setItem("Team List",(<HTMLInputElement>this.teamList).value);
        localStorage.setItem("Gender",(<HTMLInputElement>this.Gender).value);
        localStorage.setItem("Password",(<HTMLInputElement>this.password2).value);
        console.log("Correct! \nRegistered, Data stored to local Storage!");
        alert("Correct! \nRegistered, Data stored to local Storage!");

    //}else{
    //     alert(`Wrong capacha!\n${ans} not equal to ${this.total}` );
    //     this.myRandom();
    // }

  }
}