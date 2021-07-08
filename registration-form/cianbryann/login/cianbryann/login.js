import logincontrol from './logincontrol.js';
alert("BOBOLOGIN");
let gfgfg = new logincontrol();

gfgfg.submit.addEventListener('click',function(){
    var ufffff = gfgfg.username.value;
    var pfffff = gfgfg.password.value;
    gfgfg.getCountry(ufffff,pfffff);
});
// console.log("BOBOLOGIN");