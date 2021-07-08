function myJS(){
    // const regForm = new RegForm({
    //     countryUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/countries',
    //     cityUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/citites',
    //     teamUrl: 'https://api.first.org/data/v1/teams'
    //   });
    // username: ghuser
    // password: secret
    class HttpClient {
        constructor() {
          console.log('HttpClient was laoded...');
        }
      
        async #httpRequest(method, endpoint, data = undefined) {
          return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();      
            xhr.open(method, endpoint, true);
            if (method === 'post') {
              xhr.setRequestHeader('Content-Type', 'application/json');  
              data = JSON.stringify(data);
              console.log('data: ',data)
              console.log(endpoint);
            }
      
            xhr.responseType = 'json';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    resolve(xhr.response);
                } else {
                    reject(status);
                }
            };
            xhr.send(data);
          });
        }
      
        async getRequest(endpoint) {
          return await this.#httpRequest('get', endpoint);
        }
      
        async postRequest(endpoint, data) {
          return await this.#httpRequest('post', endpoint, data);
        }
      }
    
    
    class RegForm extends HttpClient {
        constructor(options) {
            console.log('RegForm was loaded...');
            super();
            this.postURL = options.postURL;
          // class property - sort of like configuration
        //   this.countryUrl = options.countryUrl;
        //   this.cityUrl = options.cityUrl;
        //   this.teamUrl = options.teamUrl;
      
        //   this.optCountries = document.getElementById('countryList');
        //   this.optTeams = document.getElementById('teamList');
        //   this.txtCity = document.getElementById('city');
      
             this.txtEmail = document.getElementById("email");
             this.txtEmaildiv = document.getElementById("email-div");
    
             this.userName = document.getElementById("UserName");
             this.userNamediv = document.getElementById("UserName-div");
    
             this.password = document.getElementById("password");
             this.passworddiv = document.getElementById("password-div");
    
             //console.log(this.txtEmaildiv);
      
            this.btnSubmit = document.getElementById('test-submit');
            }
      
        // async getCountries() {
        //   return await this.getRequest(this.countryUrl);
        // }
      
        // async getCities() {
        //   return await this.getRequest(this.cityUrl);
        // }
      
        // async getTeams() {
        //   return await this.getRequest(this.teamUrl);
        //}
      
        // loadCountries(data) {
        //   const options = this.constructDropDown(data, 'country');
        //   this.optCountries.innerHTML = options;
        // }
      
        // loadTeams(data) {
        //   const options = this.constructDropDown(data, 'team');
        //   this.optTeams.innerHTML = options;
        // }
      
        // loadCity(countryCode, cities) {
        //   this.txtCity.value = '';
      
        //   for(var i = 0; i < cities.length; i++) {
        //     if(countryCode == cities[i].CountryCode) {
        //       this.txtCity.value = cities[i].Capital;
        //     }
        //   }
        // }
      
        // constructDropDown(data, type){
        //   let options = '<option value="">Select</option>';  
        //   //construct list of dropdown based from api response using loops
        //   for (var i = 0; i < data.length; i++) {    
        //       let value;
        //       let id;
        //       if(type == 'team'){
        //           value = data[i].team;
        //           id = data[i].id;
        //       }else{
        //           value = data[i].Name;
        //           id = data[i].Code;
        //       }
        //       options += '<option value="' + id + '">' + value + '</option>'; 
        //   }
        //   return options;
        // }
      }
      
      const obj1 = new RegForm({
        postURL: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
    });
      
      // self-invoking function
      (async function() {  
        // load the data
        //let countries = await regForm.getCountries(); // fetch API, retrieve data response
        //regForm.loadCountries(countries); // render country options
      
        //let teams = await regForm.getTeams(); 
        //regForm.loadTeams(teams.data);
      
        //event listener
        // obj1.optCountries.addEventListener('change', async function(event) {
        //   event.preventDefault();
      
        //   let cities = await regForm.getCities();    
        //   obj1.loadCity(event.target.value, cities);
        // });
    
    
        obj1.txtEmail.addEventListener('blur', function(event) {
            event.preventDefault();
            
            const email = event.target.value;
    
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
              console.log('valid email');
                obj1.txtEmaildiv.setAttribute('class','input-group has-success')
            } else {
                console.log('invalid email');
                obj1.txtEmaildiv.setAttribute('class','input-group has-error')
    
            }
          });
    
          obj1.userName.addEventListener('blur', function(event) {
            event.preventDefault();
            
            const user = event.target.value;
    
            if (user !== '') {
              console.log('valid name');
                obj1.userNamediv.setAttribute('class','input-group has-success')
            } else {
                console.log('invalid name');
                obj1.userNamediv.setAttribute('class','input-group has-error')
    
            }
          });
    
          obj1.password.addEventListener('blur', function(event) {
            event.preventDefault();
            
            const passwd = event.target.value;
    
            if (passwd !== '') {
              console.log('valid password');
                obj1.passworddiv.setAttribute('class','input-group has-success')
            } else {
                console.log('invalid password');
                obj1.passworddiv.setAttribute('class','input-group has-error')
    
            }
          });
    
    
        
      
      
        obj1.btnSubmit.addEventListener('click', async function(event) {
          event.preventDefault();
      
          let username = obj1.userName.value;
          let password = obj1.password.value;
          //console.log('URL',obj1.postURL.value);
            console.log('UserName: ',username);
            console.log('password: ',password);
            //console.log(obj1.postURL.value);
          let response = await obj1.postRequest('https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login', { username, password });
      
          console.log(response);
        });
      })();
    
    }