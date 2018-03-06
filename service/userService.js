var userRepository = require('../repository/userRepository');
var utils = require('../utils/utils')
var nodemailer = require('nodemailer')

var getUserByUserName = function(userName){
    return new Promise((resolve,reject) => {
        userRepository.getUserByUserName(userName)
            .then((response) =>{
                resolve(response);
            })
            .catch((err) =>{
                reject(err);
            })
    })
}

var createUser = function(request){
    var password = utils.encrypt(request.password);
    return new Promise((resolve,reject) => {
        userRepository.createUser(request.username,password,request.name,request.email,request.phone,request.picture,request.sex,request.city,request.state,request.country,request.age)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

var logoutUser = function(request){
    return new Promise((resolve,reject) => {
        userRepository.logoutUser(request.username)
            .then((response) => {
                resolve(makeLogOutResponse(response))
            }).catch((err) => {
                reject(err)
            })
    })
}

var makeLogOutResponse = function(responseFromLogoutUser){
    var responseArray = {};
    if(responseFromLogoutUser[0] == 0){
        responseArray.status = false;
        responseArray.data = "Not able to log out, please try again";
    }
    else{
        responseArray.status = true;
        responseArray.data = "Successfully Logged out";
    }
    return responseArray;

}

var loginUser = function(request){
    return new Promise((resolve,reject) => {
        getUserByName(request.username)
            .then((response)=>{
                resolve(matchPassword(request.password,request.username,response[0].dataValues))
            })
            .catch((err) =>reject(err))
    });
}

var getUserByName = function(userName){   
    return new Promise ((resolve,reject) => {
        userRepository.getUserByUserName(userName)
        .then((response) => {
            resolve(response);
        }).catch((err) => {reject(err)});
    })
}

var matchPassword = function(password,username,user){
    var responseArray = {}
    if(user.password == password){
        new Promise((resolve,reject) => {userRepository.loginUser(username)});
        responseArray.status = true;
        user.isLogin = 1;
        responseArray.data = user;
    }
    else{
        responseArray.status = false;
        responseArray.data = "failed";
    }
    return responseArray;
}

module.exports = {
    getUserByUserName : getUserByUserName,
    createUser : createUser,
    loginUser: loginUser,
    logoutUser: logoutUser
}