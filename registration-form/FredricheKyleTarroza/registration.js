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





//method for submit button
function HuMethod(){

var FN = document.getElementById("huFN").value;
var LN = document.getElementById("huLN").value;

var email = document.getElementById("email").value;
var teamList = document.getElementById("teamList").value;
var psw = document.getElementById("psw").value;
var pswrepeat = document.getElementById("pswrepeat").value;


localStorage.setItem("FNStorage", FN);
localStorage.setItem("LNStorage", LN);

localStorage.setItem("emailStorage", email);
localStorage.setItem("teamlistStorage", teamList);
localStorage.setItem("pswStorage", psw);
localStorage.setItem("pswrepeatStorage", pswrepeat);


console.log(localStorage.getItem("FNStorage"));
console.log(localStorage.getItem("LNStorage"));

console.log(localStorage.getItem("emailStorage"));
console.log(localStorage.getItem("teamlistStorage"));
console.log(localStorage.getItem("pswStorage"));
console.log(localStorage.getItem("pswrepeatStorage"));



if(FN.length <= 0){

    alert("missing First name for validation! please input!")
    document.getElementById('huFN').style.borderColor = "red";
   
    


}


if(LN.length <= 0){

    document.getElementById('huLN').style.borderColor = "red";
    alert("missing Last name for validation! please input!")

    


}

if(email.length <= 0){

    document.getElementById('psw').style.borderColor = "red";
    alert("missing email for validation! please input!")


}

if(teamList.length <= 0){

    document.getElementById('huLN').style.borderColor = "red";
    alert("missing teamList for validation! please input!")
    


}

if(psw.length <= 0){

    document.getElementById('huLN').style.borderColor = "red";
    alert("missing password for validation! please input!")
    


}



alert("Firstname: " + FN + "\n" + "Lastname: " + LN +"\n" + "Email: " + email + "\n" + "Team: " + teamList + "\n" + "Pasword: " + psw + "\n")




  



}// end of button scope




//disables submit if password not match
// $('#psw, #pswrepeat').on('keyup', function() {
//     if ($('#psw').val() == $('#pswrepeat').val()) {
//       $('#message').html('Matching').css('color', 'green');
//       $('#submit').prop('disabled', false);
//     } else {
//       $('#message').html('Not Matching').css('color', 'red');
//       $('#submit').prop('disabled', true);
//     }
//   });


  //inputs

  function clearmethod(){
   document.getElementById("huFN").value= "";
   document.getElementById("huLN").value= "";
    
   document.getElementById("email").value= "";
   document.getElementById("teamList").value= "";
   document.getElementById("psw").value= "";
   document.getElementById("pswrepeat").value="";



  }








