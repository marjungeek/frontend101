import { HttpClient } from "./HttpClient.js";

export default class RegForm extends HttpClient {
  constructor(options) {
    console.log('RegForm was loaded...');
    super();

    // class property - sort of like configuration
    this.txtUsername = document.getElementById('username');
    this.txtPassword = document.getElementById('password');

    this.btnSubmit = document.getElementById('btn-login');
  }
  async getloginUrl() {
   return await this.getRequest(this.getloginUrl);
  }

  async getInput(username, password){
      let http = new HttpClient();
      console.log(username);
      console.log(password);
      if (username =='' && password == ''){
          alert("Incomplete Input");
      } else {
            const result = await http.httpRequest( 'post' ,'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',{username,password});
            console.log(result);
            
            var status = result.statusCode;
            console.log(status);
             if (status==200){
                alert('login successfullt');
             } else {
              alert('Invalid login');
              return false;
            }
      }

  }
  
}
