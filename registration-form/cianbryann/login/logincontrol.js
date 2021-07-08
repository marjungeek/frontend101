import { httpclient } from './httpclient.js';
export default class logincontrol extends httpclient{
    constructor(){
        console.log("logincontrol");
        super();
        this.submit = document.getElementById('logbtn');
        this.usName = document.getElementById('username');
        this.paWord = document.getElementById('password');
    }
    async getCountry(usssN,paaaW){
        let ffff = new httpclient();
        console.log(usssN);
        console.log(paaaW);
        if(usssN=='' && paaaW==''){
            alert("Fill up inputs");
        }else{
            const result = await ffff.getAPIs('post', 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',{usssN,paaaW});
        }    
    }
}