interface loginResponse {
    statusCode : number;
    message: string;
}

function doLogin(username:string, password:string): loginResponse{
    return {statusCode: 200, message: 'Success!'};
}

let response = doLogin('ghuser','secret');
if (response.statusCode === 200){
    console.log('Success');
}