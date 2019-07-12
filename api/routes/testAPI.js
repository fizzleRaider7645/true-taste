require('dotenv').config()

const Yelp = require('../modules/Yelp')
const Zomato =  require('../modules/Zomato')

const express = require('express');;
const router = express.Router();

const yelp = require('yelp-fusion');
const yelpClient = yelp.client(process.env.YELP_API_KEY);

const zomato = require('zomato-api');
const zomatoClient = zomato({
userKey: process.env.ZOMATO_API_KEY
})

let yelpAPI = new Yelp(yelpClient, null, null)



router.post('/', function(req, res, next) {
  console.log(yelpAPI)
  // const searchRequest = {
  //   term:'Four Barrel Coffee',
  //   location: 'san francisco, ca'
  // };
  yelpAPI.searchTerm = req.body.term;
  yelpAPI.searchLocation = req.body.location;
  yelpAPI.search(res)
  // yelpClient.search(searchRequest).then(response => {
  //   const firstResult = response.jsonBody.businesses[0];
  //   const prettyJson = JSON.stringify(firstResult, null, 4);
  //   res.send(prettyJson)
  //   console.log(prettyJson);
  // }).catch(e => {
  //   console.log(e);
  // });
  // zomatoClient.search({q: 'American Joes Boston'})
  //   .then(response => res.send(response))
  //   .catch(err => console.log(err));

});

module.exports = router;