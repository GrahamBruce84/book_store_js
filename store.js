var _ = require('lodash');

var Store = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 500;
}

Store.prototype.addBook = function(book) {
  this.inventory.push(book);
};

Store.prototype.getDetails = function(book) {
  return _.forEach(this.inventory, function(book){
    return book.getAllInfo;
  })
};

Store.prototype.listInventory = function() {
  return _.forEach(this.inventory, function(book){
    return book;
  })
};

Store.prototype.sellBook = function(book) {
  this.balance += book.price;
  _.remove(this.inventory, book);
};

Store.prototype.allTheMonies = function() {
  return _.round(_.sumBy(this.inventory, "price") + this.balance, 2);
};

Store.prototype.getByGenre = function(genre) {
  return _.filter(this.inventory, {'genre': genre})
};

module.exports = Store;