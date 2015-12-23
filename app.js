var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var taskbot = require('./taskbot');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// connect to database
mongoose.connect(process.env.MONGOLAB_URI, function (error) {
    if (error) console.error(error);
    else console.log('mongo connected');
});

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!') });
app.post('/', taskbot);

// error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(port, function () {
  console.log('taskbot listening on port ' + port);
});