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
function saveStorage(){
    
    var inputfName = document.getElementById("firstNameControl");
    localStorage.setItem("firstNameControl", inputfName.value);

    var inputlName = document.getElementById("lastNameControl");
    localStorage.setItem("lastNameControl", inputlName.value);

    var inputEmail = document.getElementById("emailControl");
    localStorage.setItem("emailControl", inputEmail.value);

    var inputTeam = document.getElementById("teamList");
    localStorage.setItem("teamList", inputTeam.value);

    var inputGender = document.getElementById("genderList");
    localStorage.setItem("genderList", inputGender.value);

    var inputPassword = document.getElementById("passwordControl");
    localStorage.setItem("passwordControl", inputPassword.value);

    var inputrePassword = document.getElementById("repasswordControl");
    localStorage.setItem("repasswordControl", inputrePassword.value);

    if(passwordControl.value != repasswordControl.value){
        repasswordControl.setCustomValidity("Passwords don't Match");
    }else{
        repasswordControl.setCustomValidity('')
    }

};
function clearForm(){

    document.getElementById("myForm").reset();
};

passwordControl.onchange = saveStorage; 
repasswordControl.onkeyup = saveStorage;

