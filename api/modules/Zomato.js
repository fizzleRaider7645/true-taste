class Zomato {
    constructor(term, location) {
        this.apiKey = process.env.ZOMATIO_API_KEY
        this.term = term
        this.location = location
    }
}

Zomato.prototype.search = function() {
  }

module.exports = new Zomato();
