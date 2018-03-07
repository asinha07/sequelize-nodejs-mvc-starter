
var validateCreateUserRequest = function(request){
    var response = {};
    if(request.username.length == 0){
        response.error = "Not a valid username";
        response.status = false;
    }
    else if(request.password.length < 5){
        response.error = "Not a valid password";
        response.status = false;
    }
    else if(request.name.length == 0){
        response.error = "Not a valid name";
        response.status = false;
    }
    else if(request.phone.length < 10){
        response.error = "Not a valid phone number";
        response.status = false;
    }
    else{
        response.status = true;
    }
    return response;
}

module.exports = {
    validateCreateUserRequest : validateCreateUserRequest
}