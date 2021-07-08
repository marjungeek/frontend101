import logincontrol from './logincontrol.js';
alert("BOBOLOGIN");
let gfgfg = new logincontrol();

gfgfg.submit.addEventListener('click',function(){
    var ufffff = gfgfg.usName.value;
    var pfffff = gfgfg.paWord.value;
    gfgfg.getCountry(ufffff,pfffff);
});
// console.log("BOBOLOGIN");