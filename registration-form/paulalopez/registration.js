$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data; //result from api
        var options = '';  
        options += '<option value="Select">Select</option>'; 

        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; //construct list of dropdown based from api response
        }

        $('#teamList').append(options); //append option with value to dom (dropdown)

    });
});

// ----Country---
// async function getCountry() {
//     const result = await getFile();
//     const countries = result.data;
//     let options = '<option value="Select">Select</option>';

//     for (var a = 0; a < countries.length; a++){
//         id +'">' + countries[a].country + '</option>';
//     }
//     document.getElementById('countryList').innerHTML = options;
// }

// funtion getFile() {
//     return new Promise(function(resolve, reject) {
        
//     })
// }

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