//get teams
async function getCountry(){
    const result = await getAPICountry();
    let options = '<option value="Select">Select Country</option>';  
    for (i = 0; i < result.length; i++) {     
        options += '<option value="' + result[i].Code + '">' + result[i].Name + '</option>'; 
    }
    document.getElementById('country').innerHTML = options;  
    console.log(result[1].Name);
}
async function getCity(code){
    var team = document.getElementById("country").value;
    const result = await getAPICity();
    let options = '<option value="Select">Select Country</option>';
    for (i = 0; i < result.length; i++) {     
        if(result[i].CountryCode == team){
            options += '<option value="' + result[i].Capital + '">' + result[i].Capital + '</option>';
        } 
    }
    document.getElementById('city').innerHTML = options;  
    console.log(result[1].CountryCode);
    console.log(team)
}
function getAPICountry(){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries', true);
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

function getAPICity(){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites', true);
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
getCountry();

function inputf(){
    var firstname = document.getElementById("FirstName").value;
    var lastname = document.getElementById("LastName").value;
    var email = document.getElementById("Email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var team = document.getElementById("country").selectedIndex;
    var team1 = document.getElementById("country").options;
    var team2 = document.getElementById("city").selectedIndex;
    var team22 = document.getElementById("city").options;
    errorCount = 0;
    var option1 = "";
    var option2 = "";

    if(team1[team].index == 0){
        errorCount = errorCount + 1;
    }else{
        option1 = team1[team].text;
    }
    
    if(team22[team2].index == 0){
        errorCount = errorCount + 1;
    }else{
        option2 = team22[team2].text;
    }
    

    if(firstname.length >= 1){
        console.log(firstname);
    }else{
        errorCount = errorCount + 1;
    }

    if(lastname.length >= 1){
        console.log(lastname);
    }else{
        errorCount = errorCount + 1;
    }

    if(email.length >= 1){
        console.log(email);
    }else{
        errorCount = errorCount + 1;
    }

    if(password1.length >= 1){
        console.log("nice");
    }else{
        errorCount = errorCount + 1;
    }

    if(password2.length >= 1){
        console.log("nice");
    }else{
        errorCount = errorCount + 1;
    }

    if(password1 == password2){
        console.log("nice");
    }else{
        errorCount = errorCount + 1;
    }
    console.log(errorCount);

    if(errorCount == 0){
        localStorage.setItem("firstName",firstname);
        localStorage.setItem("lastName",lastname);
        localStorage.setItem("email",email);
        localStorage.setItem("team",option1)
        localStorage.setItem("team2",option2)
        alert("Nice")
    }else{
        alert("Check Input");
    }
}
function clearf(){
    document.getElementById("FirstName").value='';
    document.getElementById("LastName").value='';
    document.getElementById("Email").value='';
    document.getElementById("password1").value='';
    document.getElementById("password2").value='';
    var team = document.getElementById("team").selectedIndex=0;
    var team1 = document.getElementById("team").options="";
}
function retrievef(){
    firstName = localStorage.getItem("firstName");
    lastName = localStorage.getItem("lastName");
    email = localStorage.getItem("email");
    team = localStorage.getItem("team");
    console.log("First Name: " + firstName + 
    '\n' + "Last Name: " + lastName +
    '\n' + "Email: " + email +
    '\n' + "Team: " + team);
    alert("First Name: " + firstName + 
    '\n' + "Last Name: " + lastName +
    '\n' + "Email: " + email +
    '\n' + "Team: " + team);
}