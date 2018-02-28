var testController  = require('../controller/testController');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.tests.findAll({where :{"id":1}}).then(function(successResult) {
    res.send("Hello");
  });
});

router.get('/getUser', function(req,res){
  testController.getUserById(req,res);
})

router.post('/getUser', function(req,res){
  models.tests.findAll({where :{"id":req.body.id}}).then(function(successResult) {
    res.send(successResult);
  });
})

module.exports = router;