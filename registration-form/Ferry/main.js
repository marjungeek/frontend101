$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data; //result from api
        var options = '';  
        options += '<option value="Select">Select</option>'; 

        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; //construct list of dropdown based from api response
        }

        $('#teamlist').append(options); //append option with value to dom (dropdown)

    });
});

function newFunction() {
    document.getElementById("newForm").reset();
 }

const signUp = e =>{
    let formData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        email: document.getElementById('email').value,
        teamlist: document.getElementById('teamlist').value,
        password: document.getElementById('password').value,
        repassword: document.getElementById('repassword').value,
    }
    localStorage.getItem('formData',JSON.stringify(formData));
    e.prevenDefault();
}