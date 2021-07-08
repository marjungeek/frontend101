class getTeams{

constructor(){
    this.result = result;
    this.teams = teams;
    this.options = options;
}

getTeam(){
    const result = await getAPI('get', 'https://api.first.org/data/v1/teams');
    console.log('teams => ', result);
    const teams = result.data; //result from api
    const options = constructDropDown(teams, 'team');
    document.getElementById('teamList').innerHTML = options; 
}


}

class constructDropDown{

}
