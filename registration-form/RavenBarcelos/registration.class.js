class Myclass{
    constructor(teams, result){
        this.teams = teams;
        this.result =result;
    }
    
        getTeams(){
            const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
            console.log('teams => ', result);
            const teams = result.data;
            const option = constructDropDown(teams, 'team');
            document.getElementById('teamList').innerHTML = options;
    
        }
    
        getCountry(){
            const result = await getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries');
            console.log('countries => ', result);
            const option = constructDropDown(result, 'country');
            document.getElementById('countryList').innerHTML = option;
        }
    
        getCity(){
            return getAPI('get', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites');
    
            async function getCapital(){
                const countryCode = document.getElementById('countryList').value;
                if(countryCode == ''){
                    alert('Please select a Country!');
                    document.getElementById('city').value = '';
                }
    
                const cities = await getCity();
    
                for(var i = 0; i < cities.length; i++){
                    if(countryCode == cities[i].CountryCode){
                        console.log(countryCode);
                        document.getElementById('city').value = cities[i].Capital;
                    }
                }
            }
        }

    constructDropDown(data, type){
        for(var i = 0; i < data.length; i++){
            let value;
            let id;

            if(type == 'team'){
                value = data[i].team;
                id = data[i].id;
            } else{
                value = data[i].Name;
                id = data[i].code;
            }

            options += '<option value"' +id+ '">' +value+ '</option>';
        }
        return options;
    }
}