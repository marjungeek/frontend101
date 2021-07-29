function doLogin(username, password) {
    return { statusCode: 200, message: 'Success!' };
}
var response = doLogin('ghuser', 'secret');
if (response.statusCode === 200) {
    console.log('Success');
}
