console.log('Registration Form Successfully Loaded...')
async function getTeams(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data; //result from api
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamList').innerHTML = options;   
}
getCountry();
getCity();
getTeams();


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

//resuable function
function getAPI(method, endpoint){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, endpoint, true);
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

async function getCountry(){
    const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries');
    console.log('countries => ', result);
    const option = constructDropDown(result, 'country');
    document.getElementById('countrylist').innerHTML = option;
}

function getCity(){
    return getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites');
}

async function getCapital(){
    const countryCode = document.getElementById('countrylist').value;
    if(countryCode == ''){
        alert('Please select your country');
        document.getElementById('city').value = '';
    }

    const cities = await getCity();

    for(var i = 0; i < cities.length; i++){
       if(countryCode == cities[i].CountryCode){
           console.log(countryCode);
           document.getElementById('city').value = cities[i].Capital;
       }
    }
}


function signUp(){
    
    let fname = document.forms["myForm"]["firstNameControl"].value;
    let lname = document.forms["myForm"]["lastNameControl"].value;
    let email = document.forms["myForm"]["emailControl"].value;
    let password = document.forms["myForm"]["passwordControl"].value;
    let password2 = document.forms["myForm"]["repasswordControl"].value;

    if(fname == ""){
        alert("Please input your First Name!");
        return false;
    
    }else if(lname == ""){
        alert("Please input your Last Name!");
        return false;
    
    }else if(email == ""){
        alert("Please input your Email Address!");
        return false;
    
    }else if(password != password2) {
        alert("Password does not match!");
        return false;
    }
    
    else {
      	localStorage.setItem(
          "First Name",
          document.getElementById("firstNameControl").value
        );
        localStorage.setItem(
          "Last Name",
          document.getElementById("lastNameControl").value
        );
        localStorage.setItem(
          "Email",
          document.getElementById("emailControl").value
        );
        localStorage.setItem(
            "Country",
            document.getElementById("countrylist").value
        );
        localStorage.setItem(
            "City",
            document.getElementById("city").value
          );
        localStorage.setItem(
          "Team List",
          document.getElementById("teamList").value
        );
        localStorage.setItem(
          "Password",
          document.getElementById("passwordControl").value
        );
        
        alert("Registered Successfully!");
        ;
    }
}

function clearForm() {
    document.getElementById("myForm").reset();
 }