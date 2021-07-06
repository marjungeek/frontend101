
async function getTeams(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data; //result from api
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamlist').innerHTML = options;   
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

function newFunction() {
    document.getElementById("newForm").reset();
 }

// const signUp = e =>{
//     let formData = {
//         firstname: document.getElementById('firstname').value,
//         lastname: document.getElementById('lastname').value,
//         email: document.getElementById('email').value,
//         teamlist: document.getElementById('teamlist').value,
//         password: document.getElementById('password').value,
//         repassword: document.getElementById('repassword').value,
//     }
//     localStorage.getItem('formData',JSON.stringify(formData));
//     e.prevenDefault();
// }

function signUp(){
    
    
    let firstname = document.forms["newForm"]["firstName"].value;
    let lastname = document.forms["newForm"]["lastName"].value;
    let email = document.forms["newForm"]["email"].value;
    let countrylist = document.forms["newForm"]["countrylist"].value;
    let cityControl = document.forms["newForm"]["cityControl"].value;
    let teamlist = document.forms["newForm"]["teamlist"].value;
    let password = document.forms["newForm"]["password"].value;
    let repassword = document.forms["newForm"]["repassword"].value;
    if(firstname == ""){
        alert("First name is missing!");
        return false;
    
    }else if(lastname == ""){
        alert("Last name is missing!");
        return false;
    
    }else if(email == ""){
        alert("Email is missing!");
        return false;
    
    }else if(countrylist == ""){
        alert("Country is missing!");
        return false;
    
    }else if(cityControl == ""){
        alert("City is missing!");
        return false;
    
    }else if(teamlist == ""){
        alert("team is missing!");
        return false;
    
    }else if(password != repassword) {
        alert("Password does not match!");
        return false;
    }
    else {
      	localStorage.setItem(
          "First Name",
          document.getElementById("firstName").value
        );
        localStorage.setItem(
          "Last Name",
          document.getElementById("lastName").value
        );
        localStorage.setItem(
          "Email",
          document.getElementById("email").value
        );
        localStorage.setItem(
          "Team List",
          document.getElementById("teamlist").value
        );
        localStorage.setItem(
          "Password",
          document.getElementById("password").value
        );
        
        alert("Registered Successfully!");
        ;
    }
}