var userService = require('../service/userService');
var userValidator = require('../validators/userValidator');

var getUserByUserName = function(req,res){
    userService.getUserByUserName(req.query.username)
        .then((response) => {
            res.send(response)
        });
}

var createUser = function(req,res){
    var validation = userValidator.validateCreateUserRequest(req.body);
    console.log(validation);
    if(validation.status){
        userService.createUser(req.body)
            .then((response) => {
                res.send(response);
            }).catch((err) => { 
                res.status = err.status || 500,
                res.send(err.message);
            });
    }
    else{
        res.status(500);
        var response = {};
        console.log(validation);
        response.message = validation.error;
        res.send(response);
    }
}

module.exports = {
    getUserByUserName : getUserByUserName,
    createUser: createUser
}