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
                sendResponse.sendFailureResponse(res,500,err,1);
            });
    }
    else{
        sendResponse.sendFailureResponse(res,500,validation.error);
    }
}

var loginUser = function(req,res){
    userService.loginUser(req.body)
        .then((response) => {
            if(response.status == true){
                sendResponse.sendSuccessResponse(res,response);
            }
            else{
                sendResponse.sendFailureResponse(res,302,response.data,2);
            }
        }).catch((err) => {sendResponse.sendFailureResponse(res,302,err,2)})
}

var logoutUser = function(req,res){
    userService.logoutUser(req.query)
        .then((response) => {
            if(response.status == true){
                sendResponse.sendSuccessResponse(res,response);
            }
            else{
                sendResponse.sendFailureResponse(res,302,response.data,3);
            }
        }).catch((err) => {sendResponse.sendFailureResponse(res,302,err,3)})
}

module.exports = {
    getUserByUserName : getUserByUserName,
    createUser: createUser,
    loginUser : loginUser,
    logoutUser: logoutUser
}