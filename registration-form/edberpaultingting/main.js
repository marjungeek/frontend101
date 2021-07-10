import RegForm from "./regform.js";//Step 3:
//Step 2:

const regForm = new RegForm();

(async function() {//Step 4:
    let countries = await regForm.getCountries();//API Request to get Data
    regForm.loadCountries(countries);//Loading onto HTML the data requested Step 6.1:
})();