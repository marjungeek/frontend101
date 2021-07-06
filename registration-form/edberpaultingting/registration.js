$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data; //result from api
        //console.log(teams);
        var options = '';  
        //options += '<option value="Select">Select</option>'; 

        for (var i = 0; i < teams.length; i++) {     
            //construct list of dropdown based from api response
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; 
        }

        $('#teamList').append(options); //append option with value to dom (dropdown)

    });
});

//Start of code for getting country list
getCountry();
async function getCountry(){
    const apiCountry = 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries';
    const result = await getAPI('get', apiCountry);
    var options = '<option disabled selected value="">Select Country</option>';
    //construct list of dropdown based from api response using loops
    for (var i = 0; i < result.length; i++) {
        options += '<option value="' + result[i].Code + '">' + result[i].Name + '</option>'; 
    }

    document.getElementById("countryList").innerHTML = options;
}//End of code for getting country list

//Start of Code for displaying Capital City
async function findCity() {
    console.log(document.getElementById("countryList").value);
    const apiCities = 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites';
    const result = await getAPI('get', apiCities);
    for (var i = 0; i < result.length; i++) {
        if (document.getElementById("countryList").value == result[i].CountryCode){
            //console.log(result[i].Capital);
            document.getElementById("cityList").value = result[i].Capital;
        }
    }
}
//End of Code for displaying Capital City

function getAPI(method, endpoint){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        //xhr.open('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries', true);
        xhr.open(method, endpoint, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
}

function addToLocalStorage(){
    
    let x = document.forms["myForm"]["teamList"].value;
    let y = document.forms["myForm"]["firstNameControl"].value;
    let z = document.forms["myForm"]["lastNameControl"].value;
    let a = document.forms["myForm"]["emailControl"].value;
    let b = document.forms["myForm"]["passwordControl"].value;
    let c = document.forms["myForm"]["repasswordControl"].value;
    let d = document.forms["myForm"]["countryList"].value;
    let e = document.forms["myForm"]["cityList"].value;
    if (x == "" || y == "" || z == "" || a == "" || b == "") {
      alert("Everything must be filled out");
      return false;
    } else if (b != c) {
        alert("Password does not match!");
        return false;
    } else {
        let firstname = document.getElementById("firstNameControl").value;
        localStorage.setItem("firstname", firstname);
    
        let lastname = document.getElementById("lastNameControl").value;
        localStorage.setItem("lastname", lastname);
    
        let email = document.getElementById("emailControl").value;
        localStorage.setItem("email", email);
    
        let team = document.getElementById("teamList").value;
        localStorage.setItem("team", team);
    
        let password = document.getElementById("passwordControl").value;
        localStorage.setItem("password", password);

        let CountryCode = document.getElementById("countryList").value;
        localStorage.setItem("countrycode", CountryCode);

        let Capital = document.getElementById("cityList").value;
        localStorage.setItem("capital", Capital);
    
        alert("Registration Complete!");
        //alert(localStorage.getItem("team"));
    }
}

function viewLocalStorage(){
    var test = localStorage.getItem("team");
    if (typeof(Storage) !== "undefined" && test !== null) {
        var ab = localStorage.getItem("firstname");
        var cd = localStorage.getItem("lastname");
        var ef = localStorage.getItem("email");
        var gh = localStorage.getItem("team");
        var ij = localStorage.getItem("password");
        var kl = localStorage.getItem("countrycode");
        var mn = localStorage.getItem("capital");
        alert(ab + " " + cd + " " + ef + " " + gh + " " + ij + " " + kl + " " + mn);
    } else {
        alert("No data stored or your browser does not support web storage. Sorry T.T");
    }
}

function deleteLocalStorage(){
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
    localStorage.removeItem("email");
    localStorage.removeItem("team");
    localStorage.removeItem("password");
    localStorage.removeItem("countrycode");
    localStorage.removeItem("capital");

    alert("Local storage deleted!");
}