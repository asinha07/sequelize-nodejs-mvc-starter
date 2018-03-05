var userService = require('../service/userService');
var userValidator = require('../validators/userValidator');
var sendResponse = require('../response/sendResponse');

var getUserByUserName = function(req,res){
    userService.getUserByUserName(req.query.username)
        .then((response) => {
            res.send(response)
        });
}

var createUser = function(req,res){
    var validation = userValidator.validateCreateUserRequest(req.body);
    if(validation.status){
        userService.createUser(req.body)
            .then((response) => {
                sendResponse.sendSuccessResponse(res,response);
            }).catch((err) => { 
                sendResponse.sendFailureResponse(res,500,err);
            });
    }
    else{
        sendResponse.sendFailureResponse(res,500,validation.error);
    }
}

module.exports = {
    getUserByUserName : getUserByUserName,
    createUser: createUser
}