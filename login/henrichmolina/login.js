setUser();

function login (){
    let lclStrg = localStorage.getItem("dataForm");
    let lclStrgjson = JSON.parse(lclStrg);
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if(username === lclStrgjson.email && password === lclStrgjson.password){
        alert("login Successfully")

    } else {
    
        alert("user email/password credentials doesn't match")
    
    }
    }
    
    
    function setUser() {
    
    let dataForm = {
        firstname : "Henrich",
        lastname : "Molina",
        email :  "henrichmolina@ibm.com",
        teamlist : "Accenture",
        password : "test123",
        repassword : "test123",
    }

        let setLocalStorage= localStorage.setItem("dataForm", JSON.stringify(dataForm))
        console.log(setLocalStorage);
    
 
    }