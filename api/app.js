require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var testAPIRouter = require("./routes/testAPI");
var yelpAPI = require("./routes/yelpAPI");
var zomatoAPI = require("./routes/zomatoAPI");


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

// app.use("/testAPI", testAPIRouter);
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.use(function(req, res, next) {
  const yelp = require('yelp-fusion');
  const apiKey = process.env.YELP_API_KEY;

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  req.yelpData = response.jsonBody;
  next()
  });
})

app.use(function(req, res, next) {
  zomatoClient.getEstablishments({city_id: 256})
  .then(response => {
    req.zomatoData = response
    next()
  })
})

app.use(function(req, res, next) {
  let finalResult = {
    yelpResults: req.yelpData,
    zomatoResults: req.zomatoData
  }
  req.finalResult = finalResult
  req.finalResult.search = req.body
  next()
})

app.use(function(req, res, next) {
  res.send(req.finalResult)
  console.log(req.finalResult)
})
// JSON.parse(body)
// app.use(function(res, req, next) {
//   console.log(req.zomatoData)
// })

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;