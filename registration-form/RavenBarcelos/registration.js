//get teams
async function getTeams(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data;
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamList').innerHTML = options;
}

function constructDropDown(data, type){
    let options = '<option value=""> Select </option>'
    for (var i = 0; i < data.length; i++){
        let value;
        let id;
        if(type == 'team'){
            value = data[i].team;
            id = data[i].id;
        } else{
            value = data[i].Name;
            id = data[i].code;
        }
        options +=  '<option value"' + id + '">' + value + '</option>';
    }
    return options;
}

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
        alert('Please select your country!!');
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

const Register = e =>{
    let formData = {
        firstNameControl: document.getElementById('firstNameControl'),
        lastNameControl: document.getElementById('lastNameControl'),
        emailControl: document.getElementById('emailControl'),
        teamList: document.getElementById('teamList'),
        passwordControl: document.getElementById('passwordControl'),
        repasswordControl: document.getElementById('repasswordControl')
    }

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    e.preventDefault();
}