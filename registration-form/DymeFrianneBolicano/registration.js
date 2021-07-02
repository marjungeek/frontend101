$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data;
        var options = '';  
        options += '<option value="Select">Select</option>'; 

        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>';
        }

        $('#teamList').append(options); 

    });
});

function myFunction() {
    alert("Cleared");
    document.getElementById("myForm1").reset();
    DeleteData()
    location.reload();

}

function Validate(){
    var x=0;
    var mes="Please Fill all blank"
    var _firstname= document.getElementById("firstname").value;
    var _lastname=document.getElementById("lastname").value;
    var _email=document.getElementById("email").value;
    var _teamList=document.getElementById("teamList").value;
    var _Password=document.getElementById("Password").value;
    var _RePassword=document.getElementById("RePassword").value;
    if(_firstname===""){
        document.getElementById("idfirstname").className = "input-group has-error";
    }
    else{
        document.getElementById("idfirstname").className = "input-group has-success";
        x++;
    }

    if(_lastname===""){
        document.getElementById("idlastname").className = "input-group has-error";
    }
    else{
        document.getElementById("idlastname").className = "input-group has-success";
        x++;
    }

    if(_email===""){
        document.getElementById("idemail").className = "input-group has-error";
    }
    else{
        document.getElementById("idemail").className = "input-group has-success";
        x++;
    }
    if(_teamList==="- Select -"){
        document.getElementById("idteamList").className = "input-group has-error";
    }
    else{
        document.getElementById("idteamList").className = "input-group has-success";
        x++;
    }
    if(_Password==="" || _RePassword=="" ){
        document.getElementById("idpassword").className = "input-group has-error";
        document.getElementById("idRepassword").className = "input-group has-error";

    }
    else{

        if((_Password === _RePassword) && (x===4)){
            document.getElementById("idpassword").className = "input-group has-success";
            document.getElementById("idRepassword").className = "input-group has-success";
            addData();
            
        }
        else{
            document.getElementById("idpassword").className = "input-group has-error";
            document.getElementById("idRepassword").className = "input-group has-error";
            if(x===4){
                alert("Password Mismatch or Empty");
            }
            else{
                alert("Please Fill all Empty form");
            }
        }
    }
    if(x<4 ||_Password==="" || _RePassword==""){
        alert("Please Fill all Empty form");
    }
}


function addData(){
    DeleteData()

    localStorage.setItem("First Name",document.getElementById("firstname").value);
    localStorage.setItem("Last Name",document.getElementById("lastname").value);
    localStorage.setItem("Email",document.getElementById("email").value);
    localStorage.setItem("Team List",document.getElementById("teamList").value);
    localStorage.setItem("Password",document.getElementById("Password").value);

    alert("Registered, Data stored to local Storage!");

}
function DeleteData(){
    localStorage.clear();
}

