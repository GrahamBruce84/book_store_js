var assert = require('assert');
var BookWorm = require('../bookworm.js');
var Book = require('../book.js');
var Store = require('../store.js');

describe('bookworm', function(){
  var book;
  var store;
  var book1 = new Book("Chris Burn", "The word easy, when you shouldn't say it!", "fiction", 12.99);
  var book2 = new Book("Davie Clarkson", "X-wing my only love", "romance", 15.99);
  var book3 = new Book("Kieran Marshall", "timekeeping, pfft what's that?", "fiction", 2.99);

  beforeEach(function(){
    var bookworm = new BookWorm(50);
    var store = new Store("Thee book store", "Aberdream");
  })

  xit("should be able to buy a book", function(){

  })

  xit("should be to sell a book", function(){

  })

  xit("Shouldn't be able to buy a book if can't afford it", function(){

  })

  xit("should be able to view the total value of their collection", function(){

  })

  xit("should be able to view the total value of all books of a given Genre", function(){

  })

  xit("should be able to view their longest book", function(){

  })

  xit("should be able to sort their books by value. (ascending or descending)", function(){

  })

  xit("should be able to compare the value of their collection with another BookWorm", function(){
    
  })
})


















