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


function register(){
    addData();
}


function addData(){

let dataForm = {
    firstname : document.getElementById("firstname").value,
    lastname : document.getElementById("lastname").value,
    email :  document.getElementById("email").value,
    teamlist : document.getElementById("teamList").value,
    password : document.getElementById("password").value,
    repassword : document.getElementById("repassword").value
}

 let password = document.getElementById("password").value;
 let repassword = document.getElementById("repassword").value;

 if (passowrd === repassword) {
    let test = localStorage.setItem("dataForm", JSON.stringify(dataForm));
    console.log(test)
    let getLocalStorage = localStorage.getItem("dataForm");
    console.log(getLocalStorage);
 alert("Successfully Registered") 
    clearData();
 } else{

    alert("Passowrd does not match");
 }

}


function clearData(){
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("teamList").value = '';
    document.getElementById("password").value = '';
    document.getElementById("repassword").value = '';

}

function deleteData() {
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("teamList").value = '';
    document.getElementById("password").value = '';
    document.getElementById("repassword").value = '';
    localStorage.clear();
}