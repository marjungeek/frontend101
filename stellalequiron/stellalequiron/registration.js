$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status){
        var teams = data.data; //result from API
        var options = '';
        options += '<option value="Select">Select</option>';

        for (var i=0; i<teams.length; i++){
            options += '<option value="'+teams[i].id + '">' + teams[i].team + '</option>' //ito ung sa dropdown based sa API response
        }
        $('#teamList').append(options); //ito ung sa value sa dropdown
    })
})