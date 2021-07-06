//$(document).ready(function(){
 //   $.get('https://api.first.org/data/v1/teams', function(data, status){
  //      var teams = data.data; //result from api
   //     var options = '';  
  //      options += '<option value="Select">Select</option>'; 

   //     for (var i = 0; i < teams.length; i++) {     
  //          options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; //construct list of dropdown based from api response
  //      }

 //       $('#teamList').append(options); //append option with value to dom (dropdown)

//    });
//});

//get teams
async function getTeams(){
  const result = await getAPI();
  const teams = result.data; //result from api
  let options = '<option value="Select">Select</option>';  
  //construct list of dropdown based from api response using loops
  for (var i = 0; i < teams.length; i++) {     
      options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; 
  }

  document.getElementById('teamList').innerHTML = options;   
}

function getAPI(){
  return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', 'https://api.first.org/data/v1/teams', true);
      xhr.responseType = 'json';
      xhr.onload = function () {
          var status = xhr.status;
          if (status == 200) {
              resolve(xhr.response);
          } else {
              reject(status);
          }
      };
      xhr.send();
  });
}

function clearFields() {

    document.getElementById("firstNameControl").value = "";
    document.getElementById("lastNameControl").value = "";
    document.getElementById("emailControl").value = "";
    document.getElementById("teamList").value = "- Select -";
    document.getElementById("genderList").value = "- Select -";
    document.getElementById("passwordControl1").value = "";
    document.getElementById("repasswordControl1").value = "";
    alert("Cleared");
    location.reload();

}

function viewStorage(){
    var tlist = localStorage.getItem("Team");
    if (typeof(Storage) !== "undefined" && tlist !== null) {
        var fn = localStorage.getItem("Firstname");
        var ln = localStorage.getItem("Lastname");
        var g = localStorage.getItem("Gender");
        var e = localStorage.getItem("Email");
        var tl = localStorage.getItem("Team");
        var pw = localStorage.getItem("Password");
        alert(fn + " " + ln + " " + g + " " + e + " " + tl+ " " + pw);
    } else {
        alert("No Data Stored");
    }
}

function delLocalStorage(){
    localStorage.removeItem("Firstname");
    localStorage.removeItem("Lastname");
    localStorage.removeItem("Email");
    localStorage.removeItem("Gender");
    localStorage.removeItem("Team");
    localStorage.removeItem("Password");

    alert("Local storage deleted!");
}

//function ValidateEmail1(inputText)
//{
//var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//if(inputText.value.match(mailformat))
//{
//alert("Valid email address!");
//document.form1.email1.focus();
//return true;
//}
//else
//{
////alert("You have entered an invalid email address!");
///document.form1.email1.focus();
//return false;
//}
//}
function validateForm(){
    let fName = document.getElementById("firstNameControl").value;
    let lName = document.getElementById("lastNameControl").value;
    let tList = document.getElementById("teamList").value;
    let eControl = document.getElementById("emailControl").value;
    let gList = document.getElementById("genderList").value;
    let pwd = document.getElementById("passwordControl1").value;
    let rpwd = document.getElementById("repasswordControl1").value;

    if(fName == "" || fName.length <= 1) {
      document.getElementById("blankMsg").innerHTML = "Fill the First Name";
      return false;
    }

    if(!isNaN(fName)){
      document.getElementById("blankMsg").innerHTML = "Only Characters are Allowed";
      return false;
    }
    if(lName == "" || lName.length <= 1 ){
        document.getElementById("charMsg").innerHTML = "Fill the Last Name";
        return false;
    }
    if(!isNaN(lName)){
      document.getElementById("charMsg").innerHTML = "Only Characters are Allowed";
      return false;
    } 

    if(gList == "- Select -") {
        document.getElementById("gMsg").innerHTML = "Please Select Gender";
        return false;
    }

    if(tList == "- Select -") {
        document.getElementById("teamMsg").innerHTML = "Please Select Team";
        return false;
    }
    if (eControl == ""){
      document.getElementById("annyMsg").innerHTML = "Invalid Email Address";
      return false;
    }
    
      if(pwd == "") {
        document.getElementById("message1").innerHTML = "Please Enter Your password";
        return false;
      }

      if(pwd.length < 8) {
        document.getElementById("message1").innerHTML = "Use 8 characters or more for your password";
        return false;
      }

      if(rpwd == "") {
        document.getElementById("message2").innerHTML = "Please Re-Type Your password";
        return false;
      }

      if(pwd != rpwd) {
        document.getElementById("message2").innerHTML = "Those passwords didn’t match. Try again.";
        return false;
        
    } else {
   let Firstname = document.getElementById("firstNameControl").value;
        localStorage.setItem("Firstname", Firstname);
    
        let Lastname = document.getElementById("lastNameControl").value;
        localStorage.setItem("Lastname", Lastname);
    
        let Email = document.getElementById("emailControl").value;
        localStorage.setItem("Email", Email);
    
        let Team = document.getElementById("teamList").value;
        localStorage.setItem("Team", Team);

        let Gender = document.getElementById("genderList").value;
        localStorage.setItem("Gender", Gender);
    
        let Password = document.getElementById("passwordControl1").value;
       localStorage.setItem("Password", Password);
    
        alert("Registration Complete!");
        location.reload();
    }  
}