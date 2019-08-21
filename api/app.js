require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const Yelp = require('./modules/Yelp')
const yelp = require('yelp-fusion');
const yelpClient = yelp.client(process.env.YELP_API_KEY);

const Zomato =  require('./modules/Zomato')
const zomato = require('zomato-api');
const zomatoClient = zomato({
  userKey: process.env.ZOMATO_API_KEY
})

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
  const yelpAPI = new Yelp(yelpClient, null, null)
  yelpAPI.searchTerm = req.body.term;
  yelpAPI.searchLocation = req.body.location;
  yelpAPI.search(req, res, next)
})

app.use(function(req, res, next) {
  const zomatoAPI = new Zomato(zomatoClient, null, null)
  zomatoAPI.searchTerm = req.body.term;
  zomatoAPI.searchLocation = req.body.location;
  zomatoAPI.search(req, res, next)
})

app.use(function(req, res, next) {
  let finalResult = {
    search: req.body,
    yelpData: req.yelpData,
    zomatoData: req.zomatoData
  }
  res.send(finalResult)
})

module.exports = app;