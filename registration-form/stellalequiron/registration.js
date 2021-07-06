$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data;
        var options = '';  
        console.log(status)
        options += '<option value="Select">Select Team?</option>'; 
        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>';
        }
        $('#team').append(options);     
    });
});


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

async function getCountry(){
    const Country = await getJSON();
    let options = '<option value="Select"> - Select - </option>';  //construct list of dropdown based from api response using loops
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
    
    
}