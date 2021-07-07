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
  function constructDropDown(data, type){
    let option = '<option = "value '
  
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
  
  async function Country(){
    const result = await getAPI('get', );
    const option = constructDropDown(result, 'country');
  
  }