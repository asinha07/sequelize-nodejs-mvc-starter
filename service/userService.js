var userRepository = require('../repository/userRepository');
var utils = require('../utils/utils')

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
        userRepository.createUser(request.username,password,request.name,request.email,request.phone,request.picture,request.sex,request.city,request.state,request.country)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = {
    getUserByUserName : getUserByUserName,
    createUser : createUser
}