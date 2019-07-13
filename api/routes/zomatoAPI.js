const Zomato =  require('../modules/Zomato')

const express = require('express');;
const app = express()
const router = express.Router();

const zomato = require('zomato-api');
const zomatoClient = zomato({
userKey: process.env.ZOMATO_API_KEY
})

const zomatoAPI = new Zomato(zomatoClient, null, null)

const zomatoFetch = (req, res, next) => {
  zomatoAPI.searchTerm = req.body.term;
  zomatoAPI.searchLocation = req.body.location;
  zomatoAPI.search(req, res, next)
}

router.post('/', function(req, res, next) {
    zomatoFetch(req, res, next)
});


module.exports = router;