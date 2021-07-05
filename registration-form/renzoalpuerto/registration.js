
$(document).ready(function(){

    $("#repasswordId").keyup(isPasswordMatch); //for password confirmation

    $.get('https://api.first.org/data/v1/teams', function(data, status){ 
        var teams = data.data; //result from api
        var options = '';  

        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; //construct list of dropdown based from api response
        }

        $('#teamlId').append(options); //append option with value to dom (dropdown)

    });
    
});

// ATTEMPT TOP LOOP THE VARIABLES

// $(document).ready(function(){

//     var varNames = '{"repass","fname","lname","emailC","pass","teaml","gen"}';
//     var obj1 = JSON.parse(varNames);

//     var elementId = '{"repasswordControl","firstNameControl","lastNameControl","emailControl","passwordControl","teamList","gender"}';
//     var obj2 = JSON.parse(elementId); 

    
//     for(var x = 0; x < varNames.length ; x++){
//         obj1.varNames[x] = document.getElementById(obj2.elementId[x]).value;
//     };
    
//     registerFiles();


// });

function clearF(){
    alert("Fields cleared!");
}

function registerFiles() {
    var fName = document.getElementById("firstnId").value;
    var lName = document.getElementById("lastnId").value;
    var emailC  = document.getElementById("emailId").value;
    var gen = document.getElementById("genderId").value;
    var teaml = document.getElementById("teamlId").value;
    var pass = document.getElementById("passwordId").value;
    var repass = document.getElementById("repasswordId").value;
    if(typeof(Storage) !== "undefined") {
        if(fName&&lName&&emailC&&teaml&&gen&&pass&&repass!=""){
            if(pass==repass&&emailC.includes("@")){
                    if(repass.length>7){
                        alert("Registered Successfully!\n\n"+
                                "First name: "+fName+
                            "\n"+"Last name: "+lName+
                            "\n"+"Gender: "+gen+
                            "\n"+"Email: "+emailC+
                            "\n"+"Team: "+teaml);
                        localStorage.setItem("First Name", fName);    //store files
                        localStorage.setItem("Last Name", lName);
                        localStorage.setItem("Email", emailC);
                        localStorage.setItem("Team", teaml);
                        localStorage.setItem("Gender", gen);
                        localStorage.setItem("Password", pass);
                        localStorage.setItem("Confirm password:", repass);
                    }else{alert("Password must contain atleast 8 character")}
                }else{
                    alert("Password not match or invalid Email!");
                }
            }else{
                alert("Empty Fields Exist")
            }

    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function isPasswordMatch() {
    var password = $("#passwordId").val();
    var confirmPassword = $("#repasswordId").val();

    if (password != confirmPassword){$("#passNotice").html("Passwords do not match!")} 
    else{$("#passNotice").html("Passwords match.")}
}

