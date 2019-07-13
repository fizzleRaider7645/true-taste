const Yelp = require('../modules/Yelp')
const Zomato =  require('../modules/Zomato')

const express = require('express');;
const app = express()
const router = express.Router();


const yelp = require('yelp-fusion');
const yelpClient = yelp.client(process.env.YELP_API_KEY);

const zomato = require('zomato-api');
const zomatoClient = zomato({
userKey: process.env.ZOMATO_API_KEY
})

const yelpAPI = new Yelp(yelpClient, null, null)
const zomatoAPI = new Zomato(zomatoClient, null, null)

const yelpFetch = (req, res, next) => {
  yelpAPI.searchTerm = req.body.term;
  yelpAPI.searchLocation = req.body.location;
  yelpAPI.search(res)
}

const zomatoFetch = (req, res, next) => {
  zomatoAPI.searchTerm = req.body.term;
  zomatoAPI.searchLocation = req.body.location;
  zomatoAPI.search(req, res, next)
}

app.post('/', function(req, res, next) {
  res.yelpData = yelpFetch(req, res, next)
  next()
}, function(req, res, next) {
  res.zomatoData = zomatoFetch()
  res.send()
});


module.exports = router;