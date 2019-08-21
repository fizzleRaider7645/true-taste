class Yelp {
    constructor(yelpClient, searchTerm, searchLocation) {
        this.yelpClient = yelpClient
        this.searchTerm = searchTerm
        this.searchLocation = searchLocation
    }
}

Yelp.prototype.search = function(req, res, next) {
    let searchRequest = {term: this.searchTerm, location: this.searchLocation}
    this.yelpClient.search(searchRequest).then(response => {
       (req.yelpData = response.jsonBody)
       next()
      })
  }

module.exports = Yelp;