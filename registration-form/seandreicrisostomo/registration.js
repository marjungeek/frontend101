$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams= data.data;
        var options= '';
        options += '<option value="Choose One">Choose One</option>';

        for (var i = 0; i < teams.length; i++){
            options += '<option value ="' + teams[i].id + '">' + teams[i].team + '</option>';
        }

        $('#teamList').append(options);

    });
});

function validateForm(){
    var firstName = document.myForm.firstNameControl.value;
    var lastName = document.myForm.lastNameControl.value;
    var firstPassword = document.myForm.passwordControl.value;
    var secondPassword = document.myForm.repasswordControl.value;
    var email = document.myForm.emailControl.value;
    var atSymbol = email.indexOf("@");
    var dotSymbol = email.lastIndexOf(".");

    if(firstName == null || firstName == ""){
        alert("Please enter your first name.");
        return false;
    }else if(lastName == null || lastName == "" || lastName.length <= 2){
        alert("Please enter your last name.");
        return false;
    }else if(atSymbol < 1 || dotSymbol < atSymbol+2 || dotSymbol+2 >= email.length){
        alert("Please enter a valid email.");
        return false;
    }else if(firstPassword.length < 1){
        alert("Password must at least 6 characters long.");
        return false;
    }else if(firstPassword != secondPassword){
        alert("Password do not match. Try again.");
        return false;
    }

    //StoreInputs
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Email", email);

}


