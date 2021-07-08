var total; //store sum of random number generated to use later
let City; //store city object from API

class MyClass {
    constructor(){
        //no init
    }
    //this run onload
    async getTeams(){
        const result = await this.getAPI();
        console.log(result);
        const teams = result.data; //result from api
        let options = '<option value="Select"> - Select - </option>';  
        //construct list of dropdown based from api response using loops
        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; 
            //console.log(teams[i].team);
        }
        document.getElementById('teamList').innerHTML = options;   
        //console.log(JSON.stringify(teams));
    }
    //get API for team
    getAPI(){
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', 'https://api.first.org/data/v1/teams', true);
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    console.log("Success!");
                    resolve(xhr.response);
                } else {
                    reject(status);
                    console.log("Fail!");
                }
            };
            xhr.send();
        });
    }
    //this Run onload and Get API for Country and City with then
    myPromise(){
        let myPromise = new Promise(function(successCb, errorCb) {

            let req = new XMLHttpRequest();
            req.open('GET', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries'); //country.json
            req.onload = function() {
                if (req.status === 200) {
                    successCb(this.response);
                    //console.log(JSON.parse(this.response))
                    let Country = JSON.parse(this.response)
                    console.log("got Country");
                    console.table(Country);
                    let options = '<option name="Select"> - Select - </option>';  
                    for (var i = 0; i < Country.length; i++) {     
                        options += '<option id="Ccode" value="' + Country[i].Code + '">' + Country[i].Name + '</option>'; 
                    }
                    document.getElementById('CList').innerHTML = options;   
        
                } else {
                    errorCb("Error");
                }
            }
            req.send();
        });
        
        myPromise.then(
            function(value) { console.log("Getting City?"); 
            
            let req = new XMLHttpRequest();
            req.open('GET', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites'); //country.json
            req.onload = function() {
                if (req.status === 200) {
                    //console.log(JSON.parse(this.response))
                    City = JSON.parse(this.response)
                    console.log("got city");
                    console.table(City);
                } else {
                    console.log("fail to get city");
                }
            }
            req.send();
            },
            function(error) { alert("Fail to get COuntry"); }
        )
        
    }
}