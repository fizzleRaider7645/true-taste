class Zomato {
    constructor(term, location) {
        this.apiKey = process.env.ZOMATIO_API_KEY
        this.term = term
        this.location = location
    }
}

Zomato.prototype.displayLatestReview = function() {
    let reviewHtml = `<li><strong>${this.title}</strong> - ${this.beerName}</li>`
    return reviewHtml;
  }

module.exports = new Zomato();
