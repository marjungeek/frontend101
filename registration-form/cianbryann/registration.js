$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data;
        var options = '';  
        console.log(status)
        options += '<option value="Select">Select Team?</option>'; 
        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>';
        }
        $('#team').append(options);     
    });
});

function inputf(){
    var firstname = document.getElementById("FirstName").value;
    var lastname = document.getElementById("LastName").value;
    var email = document.getElementById("Email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var team = document.getElementById("team").selectedIndex;
    var team1 = document.getElementById("team").options;
    errorCount = 0;
    var option = "";

    if(team1[team].index == 0){
        errorCount = errorCount + 1;
    }else{
        option = team1[team].text;
    }
    

    if(firstname.length >= 1){
        console.log(firstname);
    }else{
        errorCount = errorCount + 1;
    }

    if(lastname.length >= 1){
        console.log(lastname);
    }else{
        errorCount = errorCount + 1;
    }

    if(email.length >= 1){
        console.log(email);
    }else{
        errorCount = errorCount + 1;
    }

    if(password1.length >= 1){
        console.log("nicee");
    }else{
        errorCount = errorCount + 1;
    }

    if(password2.length >= 1){
        console.log("nice");
    }else{
        errorCount = errorCount + 1;
    }

    if(password1 == password2){
        console.log("nice");
    }else{
        errorCount = errorCount + 1;
    }
    console.log(errorCount);

    if(errorCount == 0){
        localStorage.setItem("firstName",firstname);
        localStorage.setItem("lastName",lastname);
        localStorage.setItem("email",email);
        localStorage.setItem("firstName",firstname);
        localStorage.setItem("lastName",lastname);
        localStorage.setItem("email",email);
        localStorage.setItem("team",option)
        alert("Nice")
    }else{
        alert("Check Input");
    }
}
function clearf(){
    document.getElementById("FirstName").value='';
    document.getElementById("LastName").value='';
    document.getElementById("Email").value='';
    document.getElementById("password1").value='';
    document.getElementById("password2").value='';
    var team = document.getElementById("team").selectedIndex=0;
    var team1 = document.getElementById("team").options="";
}
function retrieveff(){
    firstName = localStorage.getItem("firstName");
    lastName = localStorage.getItem("lastName");
    email = localStorage.getItem("email");
    team = localStorage.getItem("team");
    console.log("First Name: " + firstName + 
    '\n' + "Last Name: " + lastName +
    '\n' + "Email: " + email +
    '\n' + "Team: " + team);
    alert("First Name: " + firstName + 
    '\n' + "Last Name: " + lastName +
    '\n' + "Email: " + email +
    '\n' + "Team: " + team);
}