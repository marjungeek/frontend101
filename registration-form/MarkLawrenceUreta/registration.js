async function getTeams() {
  const result = await getAPI("get", "https://api.first.org/data/v1/teams");
  const teams = result.data;
  let options = '<option value="">-Select-</option>';

  for (var i = 0; i < teams.length; i++) {
    options += '<option value="'+ teams[i].id +'">' +teams[i].team +"</option>";
  }
  document.getElementById("teamList").innerHTML = options;
}

async function getCountries() {
  const result = await getAPI("get","https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries");
  const countries = result;
  let options = '<option value="">-Select-</option>';

  for (var i = 0; i < countries.length; i++) {
    options += '<option value="' + countries[i].Code +'">' +countries[i].Name + "</option>";
  }
  document.getElementById("countryList").innerHTML = options;
}

function getCity() {
  return getAPI("get","https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites");
}

async function getCapital() {
  const countryCode = document.getElementById("countryList").value;
  if (countryCode == "") {
    alert("Please select your country");
    document.getElementById("city").value = "";
  }

  const cities = await getCity();

  for (var i = 0; i < cities.length; i++) {
    if (countryCode == cities[i].CountryCode) {
      document.getElementById("cityList").value = cities[i].Capital;
    }
  }
}

function getAPI(method, endpoint) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, endpoint, true);
    xhr.responseType = "json";
    xhr.onload = function () {
      const status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
}

function myFunction() {
  
  let fn = document.getElementById("firstname").value;
  let ln = document.getElementById("lastname").value;
  let em = document.getElementById("email").value;
  let pass1 = document.getElementById("passwordControl").value;
  let pass2 = document.getElementById("repasswordControl").value;
  let country = document.getElementById("countryList").value;
  let team = document.getElementById("teamList").value;
  let gender = document.getElementById("genderList").value;
  console.log(fn);
  console.log(ln);
  console.log(em);
  console.log(pass1);
  console.log(pass2);
  console.log(country);
  console.log(team);
  console.log(gender);
  

  if (fn == "") {
    alert("First name is missing!");
    return false;
  } else if (ln == "") {
    alert("Last name is missing!");
    return false;
  } else if (em == "") {
    alert("Email is missing!");
    return false;
  } else if (country == "") {
    alert("Country is missing!");
    return false;
  } else if (team == "") {
    alert("Team is missing!");
    return false;
  } else if (gender == "") {
    alert("Gender is missing");
    return false;
  } else if (pass1 != pass2) {
    alert("Password does not match!");
    return false;
  
  } else {
    localStorage.setItem(
      "First Name",
      document.getElementById("firstname").value
    );
    localStorage.setItem(
      "Last Name",
      document.getElementById("lastname").value
    );
    localStorage.setItem(
      "Email",
      document.getElementById("email").value
    );
    localStorage.setItem(
      "Team List",
      document.getElementById("teamList").value
    );
    localStorage.setItem(
      "Password",
      document.getElementById("passwordControl").value
    );
    localStorage.setItem(
      "Country",
      document.getElementById("countryList").value
    );
    localStorage.setItem(
      "City",
      document.getElementById("cityList").value
    );
    localStorage.setItem(
      "Gender",
      document.getElementById("genderList").value
    );
    

    alert("Registered Successfully!");
  }
}

