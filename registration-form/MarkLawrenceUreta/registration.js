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

function myFunction(){
    
    let pass1 = document.forms["myForm"]["passwordControl"].value;
    let pass2 = document.forms["myForm"]["repasswordControl"].value;
    let fn = document.forms["myForm"]["firstNameControl"].value;
    let ln = document.forms["myForm"]["lastNameControl"].value;
    let em = document.forms["myForm"]["emailControl"].value;

    if(fn == ""){
        alert("First name is missing!");
        return false;
    
    }else if(ln == ""){
        alert("Last name is missing!");
        return false;
    
    }else if(em == ""){
        alert("Email is missing!");
        return false;
    
    }else if(pass1 != pass2) {
        alert("Password does not match!");
        return false;
    }
    
    else {
      	localStorage.setItem(
          "First Name",
          document.getElementById("firstNameControl").value
        );
        localStorage.setItem(
          "Last Name",
          document.getElementById("lastNameControl").value
        );
        localStorage.setItem(
          "Email",
          document.getElementById("emailControl").value
        );
        localStorage.setItem(
          "Team List",
          document.getElementById("teamList").value
        );
        localStorage.setItem(
          "Password",
          document.getElementById("passwordControl").value
        );
        
        alert("Registered Successfully!");
        ;
    }
}


