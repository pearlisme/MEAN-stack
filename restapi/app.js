var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var restful = require('node-restful')
var methodOverride = require('method-override')
var cors = require('cors')

var products = require('./routes/products');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/productdb')
.then(()=> console.log('connection successfully'))
.catch((err) => console.error(err))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// Changing view engine from jade to ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
// support for other languages
app.use(bodyParser.urlencoded({'extended':'true'}));
// using customization
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(methodOverride());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1/products', products);


var Category = app.resource = restful.model
       ('category', mongoose.Schema({
  cat_name: String,
}))
.methods(['get', 'post', 'put', 'delete']);

Category.register(app, '/category');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
