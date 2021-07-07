// $(document).ready(function(){
//     $.get('https://api.first.org/data/v1/teams', function(data, status){
//         var teams = data.data; //result from api
//         var options = '';  
//         options += '<option value="Select">Select</option>'; 

//         for (var i = 0; i < teams.length; i++) {     
//             options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; //construct list of dropdown based from api response
//         }

//         $('#teamList').append(options); //append option with value to dom (dropdown)

//     });
// });

//-----Reusable Function-----(from origin)
function constructDropDown(data, type){
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

// -----Lists-----(from origin)
async function getTeams(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data; //result from api
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamList').innerHTML = options;   
}

async function getCountry(){
    const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries');
    console.log('countries => ', result);
    const option = constructDropDown(result, 'country');
    document.getElementById('countryList').innerHTML = option;
}

function getCity(){
    return getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites');
}

async function getCapital(){
    const countryCode = document.getElementById('countryList').value;
    if(countryCode == ''){
        alert('Please select your country');
        document.getElementById('city').value = '';
    }

    const cities = await getCity();

    for(var i = 0; i < cities.length; i++){
       if(countryCode == cities[i].CountryCode){
           console.log(countryCode);
           document.getElementById('city').value = cities[i].Capital;
       }
    }
}

// -----localStorage chenes-----
const register = x =>{
     let userData = {
         fname: document.getElementById('fname').value,
         lname: document.getElementById('lname').value,
         email: document.getElementById('email').value,
         team: document.getElementById('teamList').value,
         gender: document.getElementById('gender').value,
         pwd: document.getElementById('pwd').value,
         repwd: document.getElementById('repwd').value
     }
     localStorage.setItem('userData', JSON.stringify(userData));
     console.log(localStorage.getItem('userData')); //to check in console of the browser
     x.preventDefault();
}