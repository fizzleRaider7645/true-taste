require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const Yelp = require('./modules/Yelp')
const Zomato =  require('./modules/Zomato')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(function(req, res, next) {
  const yelp = require('yelp-fusion');
  const yelpClient = yelp.client(process.env.YELP_API_KEY);
  const yelpAPI = new Yelp(yelpClient, null, null)
  yelpAPI.searchTerm = req.body.term;
  yelpAPI.searchLocation = req.body.location;
  yelpAPI.search(req, res, next)
})

app.use(function(req, res, next) {
  const zomato = require('zomato-api');
  const zomatoClient = zomato({
    userKey: process.env.ZOMATO_API_KEY
  })
  const zomatoAPI = new Zomato(zomatoClient, null, null)
  zomatoAPI.searchTerm = req.body.term;
  zomatoAPI.searchLocation = req.body.location;
  zomatoAPI.search(req, res, next)
})

app.use(function(req, res, next) {
  const finalResult = {
    search: req.body,
    yelpData: req.yelpData,
    zomatoData: req.zomatoData
  }
  res.send(finalResult)
})





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