import regcontrol from './regcontrol.js';
let regControlO = new regcontrol();
console.log("HAHAHAHA");

let endpoints = {
    countryDrop: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries',
    capitalVal: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites',
    teamDrop: 'https://api.first.org/data/v1/teams'};

regControlO.getTeam(endpoints.teamDrop);    
regControlO.getCountry(endpoints.countryDrop);
regControlO.countryD.addEventListener('change', function(){
    var countryCode = regControlO.countryD.value;
    regControlO.getCity(endpoints.capitalVal,countryCode);
});
regControlO.submit.addEventListener('click',function(){
    var firstname = document.getElementById("FirstName").value;
    var lastname = document.getElementById("LastName").value;
    var email = document.getElementById("Email").value;
    var capital = document.getElementById("capital").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    var cap2 = document.getElementById("country").selectedIndex;
    var cap22 = document.getElementById("country").options;
    var team2 = document.getElementById("team").selectedIndex;
    var team22 = document.getElementById("team").options;
    var gender2 = document.getElementById("gender").selectedIndex;
    var gender22 = document.getElementById("gender").options;

    var country = "";
    var team = "";
    var gender = "";

    var errorcount = 0;
        const obb = {fn:firstname,
                ln:lastname,
                em:email,
                cp:capital,
                pw1:password1,
                pw2:password2};
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
            country = cap22[cap2].text;
        }

        if(team22[team2].index == 0){
            errorcount = errorcount + 1;
        }else{
            team = team22[team2].text;
        }

        if(gender22[gender2].index == 0){
            errorcount = errorcount + 1;
        }else{
            gender = cap22[cap2].text;
        }

        if(errorcount == 0){
            localStorage.setItem("firstName",firstname);
            localStorage.setItem("lastName",lastname);
            localStorage.setItem("email",email);
            localStorage.setItem("country",country);
            localStorage.setItem("capital",capital);
            localStorage.setItem("team",team);
            localStorage.setItem("gender",gender);
            alert("Galing mo doon ah");
        }else{
            alert("Pls Check Input")
        }
});
regControlO.display.addEventListener('click',function(){
    alert("First Name: " + localStorage.getItem("firstName") + 
    '\n' + "Last Name: " + localStorage.getItem("lastName") +
    '\n' + "Email: " + localStorage.getItem("email") +
    '\n' + "Country: " + localStorage.getItem("country") +
    '\n' + "Capital: " + localStorage.getItem("capital") +
    '\n' + "Team: " + localStorage.getItem("team") +
    '\n' + "Gender: " + localStorage.getItem("gender"));
});
regControlO.clear.addEventListener('click',function(){
    document.getElementById("FirstName").value='';
    document.getElementById("LastName").value='';
    document.getElementById("Email").value='';
    document.getElementById("password1").value='';
    document.getElementById("password2").value='';
    document.getElementById("capital").value='';
});
