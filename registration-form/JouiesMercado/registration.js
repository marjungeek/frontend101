$(document).ready(function(){
    $.get('https://api.first.org/data/v1/teams', function(data, status) {
        var teams = data.data; //result from api
        var options = '';
        options += '<option value="Select">Select</option>';

        for (var i = 0; i < teams.length; i++) {
            options += '<option value="' + teams[i].id + '">' + teams[i].team + '</option>'; 
            //construct list of dropdown based from api response
        }

        $('#team').append(options);
        //append option with value to dom (dropdown)
    });
});

//clear button function
$(document).ready(function(){
        $('#clearbtn').click(function() {           
        $('input[type="text"]').val('');
        $('input[type="email"]').val('');
        $('input[type="password"]').val('');
        $('select[id="team"]').val('');
        //$('.regform').val('');
        });
    });

function save() {
    // get data from the input form
    var new_data = document.getElementById('fname').value;
    //if there is nothing saved at the start then save an empty array
    if(localStorage.getItem('data') == null) {
        localStorage.setItem('data', '[]');
    }
    
    //get old data and put it ot the new data
    var old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push(new_data);
    //save the old + new data to local storage
    localStorage.setItem('data', JSON.stringify(old_data));
}