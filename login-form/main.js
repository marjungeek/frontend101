import ClassForm from "./Class.js";

console.log("Log In Form is loaded");

const classForm = new ClassForm({
    messageUrl: 'https://22pnpc80ni.execute-api.ap-southeast-1.amazonaws.com/dev/login'
});

(async function(){
    let message = await classForm.getMessage();
    classForm.loadMessage(message);

    
})();