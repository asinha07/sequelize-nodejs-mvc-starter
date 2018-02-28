var testRepository = require('../repository/testRepository');

var getUserById = function(req,res){
    testRepository.getUserById(req,res);
}

module.exports = {
    getUserById: getUserById
}