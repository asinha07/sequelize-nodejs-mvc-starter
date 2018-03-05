
var validateCreateUserRequest = function(request){
    var response = {};
    console.log(request.username);
    if(request.username.length == 0 || request.email.length == 0 || request.phone.length == 0){
        response.error = "Not a vaid request";
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