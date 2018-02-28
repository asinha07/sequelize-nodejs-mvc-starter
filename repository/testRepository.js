var models  = require('../models');

var getUserById = function(req,res){
    models.tests.findAll({where :{"id":req.query.id}}).then(function(successResult) {
        res.send(successResult);
    });
}

module.exports = {
    getUserById: getUserById
}