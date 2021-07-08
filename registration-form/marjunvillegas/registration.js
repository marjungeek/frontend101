<<<<<<< HEAD
=======
getCountry();

>>>>>>> 9f31147d6aad951b4f0ec287512251cc172b8e50
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





