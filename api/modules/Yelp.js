class Yelp {
    constructor(yelpClient, searchTerm, searchLocation) {
        this.yelpClient = yelpClient
        this.searchTerm = searchTerm
        this.searchLocation = searchLocation
    }
}

Yelp.prototype.search = function(res) {
    const searchRequest = {term: this.searchTerm, location: this.searchLocation}
    this.yelpClient.search(searchRequest).then(response => {
        res.send(response.jsonBody)
      }).catch(e => {
        res.send(e.response.body)
        console.log(e)
    });
  }

module.exports = Yelp;
