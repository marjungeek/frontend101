import RegForm from "./RegForm.js";

console.log('Application was loaded...');

const regForm = new RegForm({
  countryUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries',
  cityUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites',
  teamUrl: 'https://api.first.org/data/v1/teams'
});


// self-invoking function
(async function() {  
  // load the data
  let countries = await regForm.getCountries(); // fetch API, retrieve data response
  regForm.loadCountries(countries); // render country options

  let teams = await regForm.getTeams(); 
  regForm.loadTeams(teams.data);

  //event listener
  regForm.optCountries.addEventListener('change', async function(event) {
    event.preventDefault();

    let cities = await regForm.getCities();    
    regForm.loadCity(event.target.value, cities);
  });

  regForm.txtEmail.addEventListener('blur', function(event) {
    event.preventDefault();

    const email = event.target.value;

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      console.log('valid email');
      regForm.txtEmail.classList.remove('error');
    } else {
      regForm.txtEmail.classList.add('error');
    }
  });


  regForm.btnSubmit.addEventListener("click", function(){
 
  let fn = document.getElementById("firstNameControl").value;
  let ln = document.getElementById("lastNameControl").value;
  let em = document.getElementById("email").value;
  let pass1 = document.getElementById("passwordControl").value;
  let pass2 = document.getElementById("repasswordControl").value;
  let country = document.getElementById("countryList").value;
  let team = document.getElementById("teamList").value;
  let gender = document.getElementById("genderList").value;


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
      document.getElementById("firstNameControl").value
    );
    localStorage.setItem(
      "Last Name",
      document.getElementById("lastNameControl").value
    );
    localStorage.setItem("Email", document.getElementById("email").value);
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
    localStorage.setItem("City", document.getElementById("city").value);
    localStorage.setItem("Gender", document.getElementById("genderList").value);

    alert("Registered Successfully!");
  }
})

    
})();
