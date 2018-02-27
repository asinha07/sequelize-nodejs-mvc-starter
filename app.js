var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


app.use(function(req, res, next) {
  var err = new Error('X');
  err.status = 404;
  next(err);
});


app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error'+err.message);
});


module.exports = app;