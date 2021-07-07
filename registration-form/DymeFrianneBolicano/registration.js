async function getTeams(){
    const result = await getAPI();
    console.log(result);
    const teams = result.data; //result from api
    let options = '<option value="Select"> - Select - </option>';  
    //construct list of dropdown based from api response using loops
    for (var i = 0; i < teams.length; i++) {     
        options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; 
        //console.log(teams[i].team);
    }

    document.getElementById('teamList').innerHTML = options;   
    //console.log(JSON.stringify(teams));
    
}

function getAPI(){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.first.org/data/v1/teams', true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                console.log("Success!");
                resolve(xhr.response);
            } else {
                reject(status);
                console.log("Fail!");
            }
        };
        xhr.send();
    });
}
/*
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
});*/


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
    var _Country=document.getElementById("CList").value;
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
     if(_Country==="- Select -"){
        document.getElementById("idCList").className = "input-group has-error";
        mes += "Country is empty!\n";
    }
    else{
        document.getElementById("idCList").className = "input-group has-success";
        //document.getElementById("City").value = Country
        x++;
    }
    
    if(_teamList ==="Select"){
        document.getElementById("idteamList").className = "input-group has-error";
        mes += "Team List is empty!\n";
        //alert("Fail");
    }
    else{
        document.getElementById("idteamList").className = "input-group has-success";
        //alert(_teamList);
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

        if((_Password === _RePassword) && (x===6)){
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
        localStorage.setItem("Country",document.getElementById("CList").value);
        localStorage.setItem("City",document.getElementById("City").value);
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
/*
async function getCountry(){
    const Country = await getJSON();
    let options = '<option value="Select"> - Select - </option>';  
    //construct list of dropdown based from api response using loops
    for (var i = 0; i < Country.length; i++) {     
        options += '<option value="' + Country[i].Name + '">' + Country[i].Name + '</option>'; 
    }
    console.log("getJSON");
    document.getElementById('CList').innerHTML = options;   

}

function getJSON(){
    return new Promise(function (resolve, reject) {
        var _HTTPREq = new XMLHttpRequest();
        _HTTPREq.open('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries',true);
        _HTTPREq.responseType = 'json';
        _HTTPREq.onload = function () {
            var status = _HTTPREq.status;
            if (status == 200) {
                console.log("Success1!");
                resolve(_HTTPREq.response);
            } else {
                reject(status);
                console.log("Fail!1");
            }
        };
        _HTTPREq.send();
    });

}*/

//loadFile();

let myPromise = new Promise(function(successCb, errorCb) {

    let req = new XMLHttpRequest();
    req.open('GET', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries'); //country.json
    req.onload = function() {
        if (req.status === 200) {
            successCb(this.response);
            //console.log(JSON.parse(this.response))
            let Country = JSON.parse(this.response)
            console.log("got Country");
            console.table(Country);
            let options = '<option name="Select"> - Select - </option>';  
            for (var i = 0; i < Country.length; i++) {     
                options += '<option id="Ccode" value="' + Country[i].Code + '">' + Country[i].Name + '</option>'; 
            }
            //console.log("getJSON");
            document.getElementById('CList').innerHTML = options;   
            // loop through data
            // load to select element <option></option>
        } else {
            errorCb("Error");
        }
    }
    req.send();
});
let City;
myPromise.then(
    function(value) { console.log("Getting City?"); 
    
    let req = new XMLHttpRequest();
    req.open('GET', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites'); //country.json
    req.onload = function() {
        if (req.status === 200) {
            //console.log(JSON.parse(this.response))
            City = JSON.parse(this.response)
            console.log("got city");
            console.table(City);
        } else {
            console.log("fail to get city");
        }
    }
    req.send();
    
    
    },
    function(error) { alert("Fail to get COuntry"); }
)

function getCity(){
    var y =document.getElementById("CList").value;
        console.log(y);

        for (var i = 0; i < City.length; i++) {     
            console.log(City[i].CountryCode);
            if(y===City[i].CountryCode){
                console.log("found a match");
                //document.getElementById("City").value = City[i].Capital;
                document.getElementById("City").setAttribute('value',City[i].Capital);
            }else {}
        }
}