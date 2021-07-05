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

function myFunction(){
var firstName = document.getElementById ("firstNameControl").value;
var lastName = document.getElementById ("lastNameControl").value;
var email = document.getElementById ("emailControl").value;
var team = document.getElementById ("teamList").value;
var password = document.getElementById ("passwordControl").value;
if (typeof(Storage) !== "undefined")
{
    localStorage.setItem ("firstNameControl", firstName);
    localStorage.setItem("lastNameControl", lastName);
    localStorage.setItem("emailControl", email);
    localStorage.setItem("teamList", team);
    localStorage.setItem("passwordControl", password);
} else{
    alert("failed");
}};

function funct(){
    alert("Ok");
}