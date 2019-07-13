class Yelp {
    constructor(yelpClient, searchTerm, searchLocation) {
        this.yelpClient = yelpClient
        this.searchTerm = searchTerm
        this.searchLocation = searchLocation
        this.response = ""
    }
}

Yelp.prototype.search = function(res, req, next) {
    const searchRequest = {term: this.searchTerm, location: this.searchLocation}
    this.yelpClient.search(searchRequest).then(response => {
       ({yelpResponse: response.jsonBody})
        // this.response = response.jsonBody
      })
      .catch(e => {
        res.send(e)
    });
    return this
  }

module.exports = Yelp;