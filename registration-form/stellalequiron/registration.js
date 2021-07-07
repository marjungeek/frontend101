async function getTeams(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data; //result from api
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamList').innerHTML = options;   
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

function passid_validation(passwordControl,mx,my){
    var passwordControl_len = ppasswordControl.value.length;
    if (passwordControl_len == 0 ||passwordControl_len >= my || passwordControl_len < mx){
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passwordControl.focus();
        return false;
    }
    return true;
}

function myClear() {
    alert("Cleared");
    document.getElementById("registrationForm1").reset();
    DeleteData()
    location.reload();

}