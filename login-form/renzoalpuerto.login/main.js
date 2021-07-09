import Regis from "./Regis.js";

console.log('main.js load');
const regis = new Regis({url:'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'});

(async function(){ 

regis.subBtn.addEventListener('click', async function(event) {
    event.preventDefault();

    let username = regis.user.value;
    let password = regis.pass.value;
    let response = await regis.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });

    if(response.statusCode==200){

        $("#showModal").modal("show")
        
      document.getElementById('statCode').innerHTML = 'STATUS CODE: ' + response.statusCode;

    }else if(username==""||password==""){
    
        alert('EMPTY FIELDS EXIST!')

    }else{
        
        $("#errorModal").modal("show");
        document.getElementById('errStatcode').innerHTML = 'STATUS CODE: ' + response.statusCode;
        
    }

    console.log(response);

  });

})();
