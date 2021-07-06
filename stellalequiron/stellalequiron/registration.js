$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data;
        var options = '';  
        console.log(status)
        options += '<option value="Select">Select Team?</option>'; 
        for (var i = 0; i < teams.length; i++) {     
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>';
        }
        $('#team').append(options);     
    });
});

function passid_validation(passwordControl,mx,my){
    var passwordControl_len = ppasswordControl.value.length;
    if (passwordControl_len == 0 ||passwordControl_len >= my || passwordControl_len < mx){
        alert("Password should not be empty / length be between "+mx+" to "+my);
        passwordControl.focus();
        return false;
    }
    return true;
}

