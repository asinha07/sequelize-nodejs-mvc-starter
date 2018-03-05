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

var loginUser = function(request){
    
}

var getUserByName = function(userName){   
    return new Promise ((resolve,reject) => {
        userRepository.getUserByUserName(userName)
        .then((response) => {
            resolve(response);
        }).catch((err) => {reject(err)});
    })
}

var matchPassword = function(password,username,isLogin){
    var responseArray = {}
    if(isLogin == 1){
        responseArray.status = false;
        responseArray.message = "Already logged in";
    }
    if(response.password === password){
        userRepository.updateLogin(request.username);
        responseArray.status = true;
        responseArray.message = "success";
    }
    else{
        responseArray.status = false;
        responseArray.message = "failed";
    }
    console.log(responseArray);
    return responseArray;
}

module.exports = {
    getUserByUserName : getUserByUserName,
    createUser : createUser,
    loginUser: loginUser
}