var testService = require('../service/testService');

var getUserById = function(req,res){
    testService.getUserById(req,res);
}

module.exports = {
    getUserById: getUserById
}