
var validateCreateUserRequest = function(request){
    var response = {};
    console.log(request.username);
    if(request.username.length == 0){
        response.error = "Not a vaid username";
        response.status = false;
    }
    else if(request.password.length < 5){
        response.error = "Not a vaid password";
        response.status = false;
    }
    else if(request.name.length == 0){
        response.error = "Not a vaid name";
        response.status = false;
    }
    else if(request.phone.length < 10){
        response.error = "Not a vaid phone number";
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