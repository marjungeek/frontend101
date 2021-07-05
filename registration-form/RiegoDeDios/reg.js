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

var password = document.getElementById("pass")
  , confirm_password = document.getElementById("pass2");

function storage(){
    var info = document.getElementById("first").value;

    localStorage.setItem("Local" , info);
    console.log(localStorage.getItem("Local"));


    if(pass.value != pass2.value) {
        pass2.setCustomValidity("Passwords Don't Match");
      } else {
        pass2.setCustomValidity('');
      }


}

pass.onchange = validatePassword;
pass2.onkeyup = validatePassword;

function showPass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function showPass2() {
    var x = document.getElementById("pass2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }