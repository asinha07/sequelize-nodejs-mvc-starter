var models  = require('../models');

var getUserById = function(id){
    return new Promise((resolve,reject) => {
        models.tests.findAll({where :{"id":id}})
        .then((successResponse)=>{
           resolve(successResponse); 
        })
        .catch((err)=>{
            reject(err);
        })
    });
}

module.exports = {
    getUserById: getUserById
}