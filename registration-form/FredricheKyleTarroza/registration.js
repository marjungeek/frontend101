

getCountry();
getCity();
getTeams();

async function getTeams(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data; //result from api
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamList').innerHTML = options;   
}

// reusable function
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
	console.log(cities);

    for(var i = 0; i < cities.length; i++){
       if(countryCode == cities[i].CountryCode){
           console.log(countryCode);
           document.getElementById('city').value = cities[i].Capital;
       }
    }
}





//method for submit button
function HuMethod()
{

	var FN = document.getElementById("huFN").value;
	var LN = document.getElementById("huLN").value;
	var email = document.getElementById("email").value;
	var countryList = document.getElementById("countryList").value;
	var city = document.getElementById("city").value;
	var teamList = document.getElementById("teamList").value;
	var psw = document.getElementById("psw").value;
	var pswrepeat = document.getElementById("pswrepeat").value;



	if (FN.length <= 0){
		alert("missing First name!")
		// document.getElementById('huFN').style.borderColor = "red";
	}

	if (LN.length <= 0){
		alert("missing Last name!")
		// document.getElementById('huLN').style.borderColor = "red";
	}

	if (email.length <= 0){
		alert("missing email!")
		// document.getElementById('email').style.borderColor = "red";
	}
	if (countryList.length <= 0){
		alert("missing Country!")
		// document.getElementById('email').style.borderColor = "red";
	}

	if (psw.length <= 0){
		alert("Input your password!")
		// document.getElementById('psw').style.borderColor = "red";
	}

	if (pswrepeat.length <= 0){

		alert("Input your password!")
		// document.getElementById('pswrepeat').style.borderColor = "red";
	}

	if (psw != pswrepeat){
		alert("Passwords do not match.")
		// document.getElementById('psw').style.borderColor = "red";
		// document.getElementById('pswrepeat').style.borderColor = "red";
		return false;
	}

	if (psw == pswrepeat &&
		FN.length > 0 &&
		LN.length > 0 &&
		email.length > 0)
	{

		alert("Firstname: " + FN + "\n" + 
			  "Lastname: " + LN + "\n" + 
			  "Email: " + email + "\n" + 
			  "Country: " + countryList + "\n"+
			  "City: " + city + "\n" +
			  "Team: " + teamList + "\n" + 
			  "Pasword: " + psw + "\n" )

		localStorage.setItem("FNStorage", FN);
		localStorage.setItem("LNStorage", LN);
		localStorage.setItem("emailStorage", email);
		localStorage.setItem("countryList", countryList);
		localStorage.setItem("city", city);
		localStorage.setItem("teamlistStorage", teamList);
		localStorage.setItem("pswStorage", psw);

		console.log(localStorage.getItem("FNStorage"));
		console.log(localStorage.getItem("LNStorage"));
		console.log(localStorage.getItem("emailStorage"));
		console.log(localStorage.getItem("countryList"));
		console.log(localStorage.getItem("city"));
		console.log(localStorage.getItem("teamlistStorage"));
		console.log(localStorage.getItem("pswStorage"));




		
	}


} // end of button scope

