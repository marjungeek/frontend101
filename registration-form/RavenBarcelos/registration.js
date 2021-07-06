//get teams
async function getTeams(){
    const result = await getAPI();
    const teams = result.data; //result from api
    let options = '<option value="Select">Select</option>';  
    //construct list of dropdown based from api response using loops
    for (var i = 0; i < teams.length; i++) {     
        options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; 
    }

    document.getElementById('teamList').innerHTML = options;   
}

function getAPI(){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.first.org/data/v1/teams', true);
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