// require('dotenv').config(); /* Keeping this here for testing... is really located in app.js*/

var express = require('express');;
var router = express.Router();

const yelp = require('yelp-fusion');
const yelpClient = yelp.client(process.env.YELP_API_KEY);

var zomato = require('zomato-api');
var zomatoClient = zomato({
userKey: process.env.ZOMATO_API_KEY
})


router.post('/', function(req, res, next) {
  const searchRequest = {
    term:'Four Barrel Coffee',
    location: 'san francisco, ca'
  };
  
  yelpClient.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  }).catch(e => {
    console.log(e);
  });

  zomatoClient.getCollections({city_id: 256})
  .then(res => console.log(res))
  .catch(err => console.log(err));
});
module.exports = router;