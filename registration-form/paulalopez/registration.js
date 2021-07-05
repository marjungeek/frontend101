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