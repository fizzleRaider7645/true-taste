class Yelp {
    constructor(yelpClient, searchTerm, searchLocation) {
        this.yelpClient = yelpClient
        this.searchTerm = searchTerm
        this.searchLocation = searchLocation
        this.response = ""
    }
}

Yelp.prototype.search = function(res) {
    const searchRequest = {term: this.searchTerm, location: this.searchLocation}
    this.yelpClient.search(searchRequest).then(response => {
        // res.send({yelpResponse: response.jsonBody})
        this.response = response.jsonBody
      })
      .catch(e => {
        res.send(e)
    });
  }

module.exports = Yelp;
