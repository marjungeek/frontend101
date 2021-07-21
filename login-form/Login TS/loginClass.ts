import  {LoginApiResponse, LoginClassOptions}  from "./interface"
import HttpClient from "./HttpClient";

export default class loginClass extends HttpClient {
  public $username: HTMLInputElement; 
  public $password: HTMLInputElement;
  public $btnsubmit: HTMLButtonElement;
  

  url: string; 
  success: () => void;
  error: () => void;

  
  constructor(options: LoginClassOptions) {
    super();

    this.$username = document.getElementById('username')! as HTMLInputElement;
    this.$password = document.getElementById('password')! as HTMLInputElement;
    this.$btnsubmit = document.getElementById('submit')! as HTMLButtonElement;

    this.success = options.success;
    this.error = options.error;
    this.url = options.url;
  }

  async httpRequest() {
  }

  async sendLogin(): Promise<LoginApiResponse|any> {
    const username = this.$username.innerHTML;
    const password = this.$password.innerHTML;
    

    return await super.httpRequest({
      method: 'post',
      endpoint: this.url,
      headers: { 'Content-Type': 'application/json' },
      requestBody: JSON.stringify({ username, password }),
      responseType: 'json'
    });
  }
  
   
  }