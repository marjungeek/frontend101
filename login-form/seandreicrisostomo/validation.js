function validateForm(){

    let user = document.myForm.username.value;
    let passWd = document.myForm.password.value;

    if(user == null || user == "" || user.length < 4){
        alert("Please enter your username. ");
        return false;
    }else if(passWd.length < 4){
        alert("Invalid password. Must have at least 4 characters or more. ");
        return false;
    }else if(passWd == null || passWd == ""){
        alert("Please enter your password. ");
        return false;
    }else if(user != "ghuser" || passWd != "secret"){
        alert("Invalid username/password. Please try again.");
        return false;
    }else{
        alert("Logging In... ");
    }

}