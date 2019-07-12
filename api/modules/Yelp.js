class Yelp {
    constructor(yelpClient, searchTerm, searchLocation) {
        this.yelpClient = yelpClient
        this.searchTerm = searchTerm
        this.searchLocation = searchLocation
    }
}

// Yelp.prototype.displayLatestReview = function() {
//     let reviewHtml = `<li><strong>${this.title}</strong> - ${this.beerName}</li>`
//     return reviewHtml;
//   }

module.exports = Yelp;
