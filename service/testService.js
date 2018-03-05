var testRepository = require('../repository/testRepository');
var userRepository = require('../repository/userRepository');
var getUserById = function(id){
    return new Promise((resolve,reject)=>{userRepository.getUserByUserName(id)
        .then((response)=>{
            resolve(response);
        })
        .catch((err)=>{
            reject(err);
        })
    });
}


module.exports = {
    getUserById: getUserById
}