var express = require('express');
var router  = express.Router();

var userController = require('../controller/userController');

router.get('/getByUserName', function(req,res){
    userController.getUserByUserName(req,res)
})

router.post('/createUser', function(req,res){
    userController.createUser(req,res);
})
module.exports = router