var express = require('express');;
var router = express.Router();
const yelp = require('yelp-fusion');
const client = yelp.client(process.env.API_KEY);


router.post('/', function(req, res, next) {
  client.reviews(`${req.body.term}-${req.body.location}`)
    .then(response => {
      res.send(response.jsonBody)
    }).catch(e => {
      console.log(e);
  });
});

module.exports = router;