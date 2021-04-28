var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const Movie = require("./models/movie");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'),{extensions: 'html'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.post("/create", function(req, res) {

    // Create a student from the submitted form data
    const mov = new Movie({
       name: req.body.name,
       rating: req.body.rating,
       releaseDate: new Date(req.body.releasedate)
    });
 
    mov.save(function(err, mov) {
       if (err) {
          res.status(400).send(err);
       } 
       else {
          res.send("Movie was saved.");
       }
    });
 });
 
module.exports = app;



