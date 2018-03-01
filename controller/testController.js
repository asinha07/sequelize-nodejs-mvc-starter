var testService = require('../service/testService');

var getUserById = function(req,res){
    testService.getUserById(req.query.id)
        .then((response)=>{
            res.send(response);
        });
}

module.exports = {
    getUserById: getUserById
}