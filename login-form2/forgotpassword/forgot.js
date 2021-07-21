function confirmed(){
    if(document.getElementById('email').value == ''){
        alert("Please enter your Email!!!");
        return false;
    } else{
        alert("Email Confirmed!!!");
    }
}