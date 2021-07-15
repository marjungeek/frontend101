const username = document.getElementById('username')! as HTMLInputElement;
const password = document.getElementById('password')! as HTMLInputElement;
const btnLogIn = document.getElementById('submit')! as HTMLElement;


(function(){
    btnLogIn.addEventListener('click', function(event){
        event.preventDefault();
    
        interface LoginResponse{
            statusCode: number;
            message: string;
        }

        function sendLogin(username: string, password: string): LoginResponse{
            return {statusCode: 200, message: "Log In Success"};
        }

        let response = sendLogin('ghuser', 'secret');

        if(response.statusCode === 200){
            console.log("Success");
        }

    });
})();