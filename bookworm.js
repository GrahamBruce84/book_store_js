var _ = require('lodash');

var BookWorm = function(cash){
  this.cash = cash;
  this.collection = [];
}

BookWorm.prototype.buyBook = function(book) {
  if(this.cash > book.price && this.cash > 0){
    this.collection.push(book);
    this.cash -= book.price;
  }else {
    return "You can't afford this.";
  }
};

BookWorm.prototype.sellBook = function(book) {
  _.remove(this.collection, book);
  this.cash += book.price;
};

BookWorm.prototype.totalValue = function(book) {
 return _.sumBy(this.collection, "price");
};

BookWorm.prototype.valueByGenre = function(genre) {
  return _.sumBy(_.filter(this.collection, {'genre': genre}), "price");
};

BookWorm.prototype.longestBook = function() {
  return _.maxBy(this.collection, "pages");
};

BookWorm.prototype.sortByValue = function() {
  return _.sortBy(this.collection, "price");
};

BookWorm.prototype.compareBookWorms = function(bookWorm2) {
  return this.totalValue() - bookWorm2.totalValue();
};

module.exports = BookWorm;












