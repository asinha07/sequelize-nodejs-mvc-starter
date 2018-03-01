var testRepository = require('../repository/testRepository');

var getUserById = function(id){
    return new Promise((resolve,reject)=>{testRepository.getUserById(id)
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