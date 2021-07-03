$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data;
        var options = '';  
        //options += '<option value="Select">Select</option>'; redundunt

        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>';
        }

        $('#teamList').append(options); 

    });
});

function myClear() {
    alert("Cleared");
    document.getElementById("myForm1").reset();
    DeleteData()
    location.reload();

}

function Validate(){
    var x = 0;
    var mes = "";
    var _firstname= document.getElementById("firstname").value;
    var _lastname=document.getElementById("lastname").value;
    var _email=document.getElementById("email").value;
    var _teamList=document.getElementById("teamList").value;
    var _genderList=document.getElementById("genderList").value;
    var _Password=document.getElementById("Password").value;
    var _RePassword=document.getElementById("RePassword").value;
    if(_firstname===""){
        document.getElementById("idfirstname").className = "input-group has-error";
        mes += "First Name is empty!\n";
    }
    else{
        document.getElementById("idfirstname").className = "input-group has-success";
        x++;
    }

    if(_lastname===""){
        document.getElementById("idlastname").className = "input-group has-error";
        mes += "Last Name is empty!\n";
    }
    else{
        document.getElementById("idlastname").className = "input-group has-success";
        x++;
    }

    if(_email===""){
        document.getElementById("idemail").className = "input-group has-error";
        mes += "Email is empty!\n";
    }
    else{
        if(validateEmail(_email)){
            document.getElementById("idemail").className = "input-group has-success";
            x++;
        }
        else{
            document.getElementById("idemail").className = "input-group has-error";
            mes += "Email is not valid!\n";
            //alert("Not a valid email");
        }
    }
    if(_teamList==="- Select -"){
        document.getElementById("idteamList").className = "input-group has-error";
        mes += "Team List is empty!\n";
    }
    else{
        document.getElementById("idteamList").className = "input-group has-success";
        x++;
    }
    if(_genderList==="- Select -"){
        document.getElementById("idgenderList").className = "input-group has-error";
        mes += "Gender List is empty!\n";
    }
    else{
        document.getElementById("idgenderList").className = "input-group has-success";
        x++;
    }
    if(_Password==="" || _RePassword=="" ){
        document.getElementById("idpassword").className = "input-group has-error";
        document.getElementById("idRepassword").className = "input-group has-error";
        mes += "Password Mismatch or Empty!\n";

    }
    else{

        if((_Password === _RePassword) && (x===5)){
            document.getElementById("idpassword").className = "input-group has-success";
            document.getElementById("idRepassword").className = "input-group has-success";
            addData();
            
        }
        else{
            document.getElementById("idpassword").className = "input-group has-error";
            document.getElementById("idRepassword").className = "input-group has-error";
            mes += "Password Mismatch or Empty!\n";
            
        }
    }
    if(mes!==""){
        alert(mes);
    }
}


function addData(){
    DeleteData()
    var ans=document.getElementById("Ans").value;
    if(total==ans){

        localStorage.setItem("First Name",document.getElementById("firstname").value);
        localStorage.setItem("Last Name",document.getElementById("lastname").value);
        localStorage.setItem("Email",document.getElementById("email").value);
        localStorage.setItem("Team List",document.getElementById("teamList").value);
        localStorage.setItem("Gender",document.getElementById("genderList").value);
        localStorage.setItem("Password",document.getElementById("Password").value);
    
        alert("Correct! \nRegistered, Data stored to local Storage!");
    

    }
    else{
        alert(`Wrong capacha!\n${ans} not equal to ${total}` );
        myRandom();
    }

}
function DeleteData(){
    localStorage.clear();
}


var total;
function myCheck() {
    var y = document.getElementById("robot");
    if (y.style.display === "block") {
      y.style.display = "none";
      document.getElementById("submit").className = "btn btn-success disabled";
    } else {
      y.style.display = "block"; //show
      document.getElementById("submit").className = "btn btn-success";
      myRandom();
    }
    
}
function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email );
}

function myRandom(){
    var num1=Math.floor(Math.random() * 10);
    var num2=Math.floor(Math.random() * 10);
    total=num1+num2;
    document.getElementById("Q").innerHTML = ""+num1+"+"+num2+"?";
}