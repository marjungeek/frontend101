import { HttpClient } from './HttpClient.js';

export default class RegForm extends HttpClient {
  constructor() {
    console.log('RegForm was loaded...');
    super();

    // class property - sort of like configuration
    this.username = document.getElementById('username');
    this.password = document.getElementById('password');
    this.checked = document.getElementById('rememberMe');
    this.btnSubmit = document.getElementById('btn-login');
  }
  async getInput(username, password){
      console.log(username);
      console.log(password);
      if (username =='' && password == ''){
          alert('Incomplete Input');
      } else {
            const result = await this.gethttpRequest( 'post' ,'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',{username,password});
            console.log(result);
            
            var status = result.statusCode;
            console.log(status);

             if (status==200){
                alert('logged in successfully');
                location.href = 'http://192.168.1.9:8080/index.html';
             } else {
              alert('Invalid login');
              return false;
            }
      }

  }
  async getAPI() {
    return await this.getRequest(this.APIUrl);
  }

  //getCheck(checked){
    //console.log(username);
    //console.log(rmCheck);
    //if (localStorage.checkbox && localStorage.checkbox !== ''){
      //rmCheck.setAttribute('checked', 'checked');
      //username.value = localStorage.name;
    //} else {
      //rmCheck.removeAttribute('checked');
      //username.value = "";
    //}
  //}
}
