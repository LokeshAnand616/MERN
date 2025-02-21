var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const multiRouter = require('./routes/multiRoute');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(cors({
  origin: "http://localhost:3002", 
  methods: ["GET", "POST"], 
  allowedHeaders: ["Content-Type"] 
}));
const options = {
  dotfile:'ignore',
  etag:true,
  extension : ['html','htm'],
  fallthrough:true,
  lastModified :  false,
  maxAge:"30d",
  redirect:false
}

const time = function (req,res,next){
  req.requestTime = Date.now();
  next();
}

app.use(logger('dev'));
app.use(time);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'),options));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/multi',multiRouter);

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
