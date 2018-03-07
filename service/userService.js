const userRepository = require('../repository/userRepository');
const utils = require('../utils/utils')
const nodemailer = require('nodemailer')
const errorResponse = require('../response/errorResponse')


const createUser = function(request){
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

const logoutUser = function(request){
    return new Promise((resolve,reject) => {
        userRepository.logoutUser(request.username)
            .then((response) => {
                resolve(makeLogOutResponse(response))
            }).catch((err) => {
                reject(err)
            })
    })
}

const makeLogOutResponse = function(responseFromLogoutUser){
    let responseArray = {};
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

const loginUser = function(request){
    return new Promise((resolve,reject) => {
        getUserByName(request.username)
            .then((response)=>{
                resolve(matchPassword(request.password,request.username,response[0].dataValues))
            })
            .catch((err) =>reject(err))
    });
}

const matchPassword = function(password,username,user){
    let responseArray = {}
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
    createUser : createUser,
    loginUser: loginUser,
    logoutUser: logoutUser
}