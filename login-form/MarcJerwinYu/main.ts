import Regform from "./Regform";

const login = new Regform({
    url : 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
    success: function() {
        alert('success');
    },
    error: function(){
        alert('error');
    }
});
login.listener();