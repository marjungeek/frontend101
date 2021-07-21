// $(document).ready(function(){
//     $.get('https://api.first.org/data/v1/teams', function(data, status){
//         var teams = data.data; //result from api
//         var options = '';  
//         options += '<option value="Select">Select</option>'; 

//         for (var i = 0; i < teams.length; i++) {     
//           options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; //construct list of dropdown based from api response
//         }

//         $('#teamList').append(options); //append option with value to dom (dropdown)

//     });
// });

//get teams
async function getTeams(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    const teams = result.data; //result from api
    console.log(result)
    let options = '<option value="Select">Select</option>';  
    //construct list of dropdown based from api response using loops
    for (var i = 0; i < teams.length; i++) {     
        options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; 
    }

    document.getElementById('teamList').innerHTML = options;   
}

function getAPI(method, endpoint){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
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

async function getCountry(){
    const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries');
    const country = result.data;
    console.log(result);
    let options = '<option value="Select">Select</option>';
    for (var a = 0; a < country.length; a++){
        options += '<option value="' + country[a].id + '">' + country[a].country + '</option>'
    }
document.getElementById("countryList").innerHTML = options;
}

async function getCity(){
    const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites');
    const city = result.data;
    console.log(result);
}


// $(document).ready(function(){
//     $.get('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries', function (data, status){
//         var country = data.data;
//         var options = '';
//         options += '<option value="Select"> Select </option>';

//         for (var i = 0; i < country.length; i++) {
//             options += '<option value="' + country[i].id + '">' + country[i].country + '</option>';
//         }
//         $('#countryList').append(options);
//     });
// });

function myFunction(){
var firstName = document.getElementById ("firstNameControl").value;
var lastName = document.getElementById ("lastNameControl").value;
var email = document.getElementById ("emailControl").value;
// var team = document.getElementById ("teamList").value;
var password = document.getElementById ("passwordControl").value;
if (typeof(Storage) !== "undefined")
{
    localStorage.setItem ("firstNameControl", firstName);
    localStorage.setItem("lastNameControl", lastName);
    localStorage.setItem("emailControl", email);
    // localStorage.setItem("teamList", team);
    localStorage.setItem("passwordControl", password);

    alert("Welcome " + firstName);
} else{
    alert("Failed to register");
}};

function funct(){
    alert("Ok");
}