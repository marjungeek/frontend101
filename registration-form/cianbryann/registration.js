async function getCountry(){
    const result = await getAPIs('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries');
    let options = '<option value="Select">Select Country</option>';  
    for (i = 0; i < result.length; i++) {     
        options += '<option value="' + result[i].Code + '">' + result[i].Name + '</option>'; 
    }
    document.getElementById('country').innerHTML = options;  
}
async function getCity(){
    var team = document.getElementById("country").value;
    var valueCity = "";
    const result = await getAPIs('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites');
    for (i = 0; i < result.length; i++) { 
        if(result[i].CountryCode == team){
            valueCity = result[i].Capital;
            document.getElementById('capital').value = valueCity;
        } 
    }     
}
function getAPIs(method,endpoint){
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method,endpoint, true);
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
getCountry();
function control() { 
    var firstname = document.getElementById("FirstName").value;
    var lastname = document.getElementById("LastName").value;
    var email = document.getElementById("Email").value;
    var capital = document.getElementById("capital").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var cap2 = document.getElementById("country").selectedIndex;
    var cap22 = document.getElementById("country").options;
    var option1 = "";
    const obb = {fn:firstname,
                ln:lastname,
                em:email,
                cp:capital,
                pw1:password1,
                pw2:password2};
    this.input = function() {
        var errorcount = 0;
        for (var key in obb) {
            if (obb[key] == "" || obb[key] == null){
                console.log(obb[key]);
                errorcount = errorcount + 1;
            }else{
                console.log(obb[key]);
            }
        }
        if(password1 == password2){
            console.log("nice");
        }else{
            errorcount = errorcount + 1;
        }

        if(cap22[cap2].index == 0){
            errorcount = errorcount + 1;
        }else{
            option1 = cap22[cap2].text;
        }

        if(errorcount == 0){
            localStorage.setItem("firstName",firstname);
            localStorage.setItem("lastName",lastname);
            localStorage.setItem("email",email);
            localStorage.setItem("country",option1);
            localStorage.setItem("capital",capital);
            alert("Galing mo doon ah");
        }else{
            alert("Pls Check Input")
        }
    }
    this.clear = function() {
        document.getElementById("FirstName").value='';
        document.getElementById("LastName").value='';
        document.getElementById("Email").value='';
        document.getElementById("password1").value='';
        document.getElementById("password2").value='';
        document.getElementById("capital").value='';
    }
    this.display = function(){
        alert("First Name: " + localStorage.getItem("firstName") + 
        '\n' + "Last Name: " + localStorage.getItem("lastName") +
        '\n' + "Email: " + localStorage.getItem("email") +
        '\n' + "Country: " + localStorage.getItem("country") +
        '\n' + "Capital: " + localStorage.getItem("capital"));
    }
}