import LogInClass from "./LogInClass";

const login = new LogInClass({
    url: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login',
    success: function(){
        alert("Successfully Logged In!!");
        document.location.href="project-5/index.html";
    },
    error: function(){
        alert("Wrong Credentials");
    }
});

var x = "Welcome!!!";

(async function(x){
    console.log(x)
})(x);

login.listener();