$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data; //result from api
        var options = '';  
        options += '<option>Alpha</option>'; 

        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; //construct list of dropdown based from api response
        }

        $('#teamList').append(options); //append option with value to dom (dropdown)
        
    });
});

function validate (){
    var password = document.getElementById("passwordID").value;
    var repassword = document.getElementById("repasswordID").value;
    var fname = document.getElementById("firstNameID").value;
    var lname = document.getElementById("lastNameID").value;
    var email = document.getElementById("emailID").value;
    var team = document.getElementById("teamList").value;
    var gender = document.getElementById("genderID").value;

    if (fname == null || fname == "") {
        alert("Please enter Firstname");
        return false;
    }
    if (lname == null || lname == "") {
        alert("Please enter Lastname.");
        return false;
    }
    if (email == null || email == "") {
        alert("Please enter Email.");
        return false;
    }
    if (team == "-- Select --") {
        alert("Please select team.");
        return false;
    }
    if (gender == "-- Gender --") {
        alert("Please select gender.");
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter password");
        return false;
    }
    if (repassword == null || repassword == "") {
        alert("Please re-enter password");
        return false;
    }
    if(password==repassword) {
        if(password.length>=6) {
            localStorage.setItem("firstname", fname);
            localStorage.setItem("lastname", lname);
            localStorage.setItem("email", email);
            localStorage.setItem("team", team);
            localStorage.setItem("gender", gender);
            localStorage.setItem("password", password);

            alert("Registration Succesful!");
            resetList();
        }
        else{
            alert("Password must have 6 or more character.");
            return false;
        }
    }
    else
    {
        alert("Password not match!");
    }
}

function resetList() {
    document.getElementById("firstNameID").value="";
    document.getElementById("lastNameID").value="";
    document.getElementById("emailID").value="";
    var teamDropList = document.getElementById("teamList");
    teamDropList.selectedIndex = 0;
    var genderDropList = document.getElementById("genderID");
    genderDropList.selectedIndex = 0;
    document.getElementById("passwordID").value="";
    document.getElementById("repasswordID").value="";
}