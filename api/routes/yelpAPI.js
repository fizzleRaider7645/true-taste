const Yelp = require('../modules/Yelp')
const express = require('express');;
const app = express()
const router = express.Router();
const yelp = require('yelp-fusion');
const yelpClient = yelp.client(process.env.YELP_API_KEY);
const yelpAPI = new Yelp(yelpClient, null, null)

const yelpFetch = (req, res, next) => {
  yelpAPI.searchTerm = req.body.term;
  yelpAPI.searchLocation = req.body.location;
  yelpAPI.search(res, req, next)
}

router.post('/', function(req, res, next) {
  yelpFetch(req, res, next)
});


module.exports = router;