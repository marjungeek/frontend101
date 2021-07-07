getCountry();
getCity();

async function getTeams() {
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data; //result form api
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamL').innerHTML = options;
}

//reusable function
function constructDropDown(data, type) {
    let options = '<option value="">Select</option>';
    //construct list pf dropdown based from api response using loops
    for (var i = 0; i < data.length; i++) {
        let value;
        let id;
        if(type == 'team') {
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

//reusable function
function getAPI(method, endpoint) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, endpoint, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response);
            }else {
                reject(status);
            }
        };
        xhr.send();
    });
}

async function getCountry() {
    const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries');
    console.log('countries => ', result);
    //const countries = result.data;
    const option = constructDropDown(result, 'country');
    document.getElementById('countryList').innerHTML = option;
}

function getCity(){
    return getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites');
}

async function getCapital() {
    const countryCode = document.getElementById('countryList').value;
    if(countryCode == '') {
        alert('Please select your country');
        document.getElementById('city').value = '';
    }

    const cities = await getCity();

    for(var i = 0; i < cities.length; i++) {
        if(countryCode == cities[i].CountryCode) {
            console.log(countryCode);
            document.getElementById('city').value = cities[i].Capital;
        }
    }
}

//clear button function
$(document).ready(function(){
        $('#clearbtn').click(function() {           
        $('input[type="text"]').val('');
        $('input[type="email"]').val('');
        $('input[type="password"]').val('');
        $('select[id="teamL"]').val('');
        $('select[id="country"]').val('');
        $('select[id="city"]').val('');
        $('select[id="gender"]').val('');
        //$('.regform').val('');
        });
    });

function save() {
    // get data from the input form
    var new_data = document.getElementById('fname').value;
    //if there is nothing saved at the start then save an empty array
    if(localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }
    
    //get old data and put it ot the new data
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);
    //save the old + new data to local storage
    localStorage.setItem('data', JSON.stringify(old_data));
}