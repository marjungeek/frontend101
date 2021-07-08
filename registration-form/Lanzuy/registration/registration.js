getCountry();
async function getTeams(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data; //result from api
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamList').innerHTML = options;   
}

//reusable function
function constructDropDown(data, type){
    let options = '<option value="">- Select -</option>';  
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
function saveStorage(){
    var inputPassword = document.getElementById("passwordControl");
    var inputrePassword = document.getElementById("repasswordControl");
    
    if(passwordControl.value != repasswordControl.value){
        repasswordControl.setCustomValidity("Passwords don't Match");
    }else{
        repasswordControl.setCustomValidity('')
     var inputfName = document.getElementById("firstNameControl");
    localStorage.setItem("firstNameControl", inputfName.value);

    var inputlName = document.getElementById("lastNameControl");
    localStorage.setItem("lastNameControl", inputlName.value);

    var inputEmail = document.getElementById("emailControl");
    localStorage.setItem("emailControl", inputEmail.value);

    var inputTeam = document.getElementById("teamList");
    localStorage.setItem("teamList", inputTeam.value);

    var inputGender = document.getElementById("genderList");
    localStorage.setItem("genderList", inputGender.value);

    
    localStorage.setItem("passwordControl", inputPassword.value);


    localStorage.setItem("repasswordControl", inputrePassword.value);
    }
    alert(localStorage.getItem('firstNameControl'));

};
function clearForm(){

    document.getElementById("myForm").reset();
};

async function getCountry(){
    const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries');
    console.log('countries => ', result);
    const countries = result.data;
    const option = constructDropDown(countries, 'country');
    document.getElementById('countryList').innerHTML = option;
}

function getCity(){
    return getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites');
}

async function getCapital(){
    const countryCode = document.getElementById('countryList').value;
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





// passwordControl.onchange = saveStorage; 
// repasswordControl.onkeyup = saveStorage;



// function getCountry(){
//     const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries')
//     console.log('countries =>', result)
// }
// function getCity(){

//     const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites')
//     console.log('cities =>', result)

// }