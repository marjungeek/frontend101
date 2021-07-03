$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data; //result from api
        var options = '';  
        //options += '<option value="Select">Select</option>'; 

        for (var i = 0; i < teams.length; i++) {     
            //construct list of dropdown based from api response
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; 
        }

        $('#teamList').append(options); //append option with value to dom (dropdown)

    });
});

function addToLocalStorage(){
    
    let x = document.forms["myForm"]["teamList"].value;
    let y = document.forms["myForm"]["firstNameControl"].value;
    let z = document.forms["myForm"]["lastNameControl"].value;
    let a = document.forms["myForm"]["emailControl"].value;
    let b = document.forms["myForm"]["passwordControl"].value;
    let c = document.forms["myForm"]["repasswordControl"].value;
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
        alert(ab + " " + cd + " " + ef + " " + gh + " " + ij);
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

    alert("Local storage deleted!");
}