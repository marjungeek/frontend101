import { APICLASS } from './httpclientReg.js';
export default class regcontrol extends APICLASS{
    constructor(){
        console.log("HUUUU");
        super();
        this.submit = document.getElementById('reg');
        this.countryD = document.getElementById('country');
        this.display = document.getElementById('display');
        this.clear = document.getElementById('clear');

    }
    async getTeam(endpoint){
        let httpO = new APICLASS();
        let options = '<option value="Select">Select Team</option>'; 
        const result = await httpO.getAPIs('get',endpoint);
        var data = result.data;
        console.log(data);
        for (var i = 0; i < data.length; i++) {     
            options += '<option value="' + data[i].team + '">' + data[i].team + '</option>'; 
        }
        document.getElementById('team').innerHTML = options;
    }
    async getCountry(endpoint){
        let httpO = new APICLASS();
        let options = '<option value="Select">Select Country</option>'; 
        const result = await httpO.getAPIs('get',endpoint);
        for (var i = 0; i < result.length; i++) {     
            options += '<option value="' + result[i].Code + '">' + result[i].Name + '</option>'; 
        }
        document.getElementById('country').innerHTML = options;
    }
    async getCity(endpoint,countrycode){
        let httpO = new APICLASS();
        var team = document.getElementById("country").value;
        var valueCity = countrycode;
        const result = await httpO.getAPIs('get', endpoint);
        for (var i = 0; i < result.length; i++) { 
            if(result[i].CountryCode == team){
                valueCity = result[i].Capital;
                document.getElementById('capital').value = valueCity;
            } 
        }     
    }       
}