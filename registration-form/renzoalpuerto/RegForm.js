import {HttpClient} from "./HttpClient.js";

export default class RegForm extends HttpClient{
    constructor(){

        console.log('regform');
        super();

        var fName = document.getElementById("firstnId");
        var lName = document.getElementById("lastnId");
        var emailC  = document.getElementById("emailId");
        var gen = document.getElementById("genderId");
        var countL = document.getElementById("countryId");
        var cityL = document.getElementById("cityId");
        var teaml = document.getElementById("teamlId");
        var pass = document.getElementById("passwordId");
        var repass = document.getElementById("repasswordId");



    }
      




}
 
