
getTeams();
getCount();
getCity();

$(document).ready(function(){

    $("#repasswordId").keyup(isPasswordMatch); //for password confirmation

});


async function getTeams(){
    const teamsresult = await getAPI('get', 'https://api.first.org/data/v1/teams');  //storing api in teamresult
    console.log(teamsresult);                                   
    const teams = teamsresult.data; //result from api (object.object)
    // console.log(teams);
    const options = constructDropDown(teams, 'team');  //throw to function constructDropDown (data, <dataname>) 
    // console.log(options); 
    document.getElementById('teamlId').innerHTML = options;  
}

//resuable function // Checking if the API is available
function getAPI(method, endpoint){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, endpoint, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {      // if the api status code is 200(success)
                resolve(xhr.response);
            } else {
                reject(status);
                alert("File not yet ready");
            }
        };
        xhr.send();
    });
}


//reusable function
function constructDropDown(data, type){
    let options = '<option value="">Select</option>';  
    //construct list of dropdown based from api response using loops
    for (var i = 0; i < data.length; i++) {    
        let value;
        let id;
        if(type == 'team'){
            value = data[i].team;
            id = data[i].id;
        }else{
            value = data[i].Name;
            id = data[i].Code;
        }
        options += '<option value="' + id + '">' + value + '</option>'; 
    }
    return options;
}

async function getCount(){
    const count = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries');
    // console.log(count);
    const cnt =  constructDropDown(count, 'Name');
    // console.log(cnt);
    document.getElementById('countryId').innerHTML = cnt;
}

function getCity(){
    return getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites');
}

async function getCap(){
    
    const countId = document.getElementById('countryId').value;

    if(countId == ''){
        document.getElementById('cityId').value = '';
    }

    const cities = await getCity();

    for(var i = 0; i < cities.length; i++){
       if(countId == cities[i].CountryCode){
           console.log(countId);
           document.getElementById('cityId').value = cities[i].Capital;
       }
    }


}





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
    var countL = document.getElementById("countryId").value;
    var cityL = document.getElementById("cityId").value;
    var teaml = document.getElementById("teamlId").value;
    var pass = document.getElementById("passwordId").value;
    var repass = document.getElementById("repasswordId").value;
    
    if(typeof(Storage) !== "undefined") {
        if(fName&&lName&&emailC&&teaml&&gen&&pass&&repass&&cityL&&countL!=""){
            if(pass==repass&&emailC.includes("@")){
                    if(repass.length>7){
                        alert("Registered Successfully!\n\n"+
                                "First name: "+fName+
                            "\n"+"Last name: "+lName+
                            "\n"+"Gender: "+gen+
                            "\n"+"Email: "+emailC+
                            "\n"+"Country: "+countL+
                            "\n"+"City: "+cityL+
                            "\n"+"Team: "+teaml);
                        localStorage.setItem("First Name", fName);    //store files
                        localStorage.setItem("Last Name", lName);
                        localStorage.setItem("Email", emailC);
                        localStorage.setItem("Country", countL);
                        localStorage.setItem("City", cityL);
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

