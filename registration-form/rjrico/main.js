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


  regForm.btnSubmit.addEventListener('click', async function(event) {
    event.preventDefault();

    let user = regForm.optCountries.value;
    let password = regForm.txtCity.value;

    let response = await regForm.postRequest('`http://127.0.0.1:8080/rjrico/registration.html', { user, password });

    console.log(response);
  });
})();
