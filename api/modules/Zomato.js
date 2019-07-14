class Zomato {
    constructor(zomatoClient, term, location) {
        this.zomatoClient = zomatoClient
        this.searchTerm = term
        this.searchLocation = location
    }
}

Zomato.prototype.search = function(req, res, next) {
    let searchRequestObj = {term: this.searchTerm, location: this.searchLocation}
    let stringSearch = Object.values(searchRequestObj).join(" ")
    this.zomatoClient.search({q: stringSearch})
    .then(response => {
        req.zomatoData = response
        next()
    })
  }

module.exports = Zomato;
