var assert = require('assert');
var BookWorm = require('../bookworm.js');
var Book = require('../book.js');
var Store = require('../store.js');

describe("bookWorm", function(){
    var book;
  var store;
  var book1 = new Book("Chris Burn", "The word easy, when you shouldn't say it!", "fiction", 660, 12.99);
  var book2 = new Book("Davie Clarkson", "X-wing my only love", "romance", 50, 55.99);
  var book3 = new Book("Kieran Marshall", "timekeeping, pfft what's that?", "fiction", 904, 2.99);
  bookWorm2 = new BookWorm(100);

  beforeEach(function(){
    bookWorm = new BookWorm(50);
    store = new Store("Thee book store", "Aberdream");
  })

  it("should be able to buy and sell a book", function(){
    bookWorm.buyBook(book1);
    assert.strictEqual(bookWorm.collection.length, 1);
    assert.strictEqual(bookWorm.cash, 37.01);
    bookWorm.sellBook(book1);
    assert.strictEqual(bookWorm.collection.length, 0);
    assert.strictEqual(bookWorm.cash, 50);
  })

  it("Shouldn't be able to buy a book if they can't afford it", function(){
    bookWorm.buyBook(book2);
      assert.strictEqual(bookWorm.collection.length, 0);
  })

  it("should be able to view the total value of their collection", function(){
    bookWorm.buyBook(book1);
    bookWorm.buyBook(book1);
    bookWorm.buyBook(book3);
    assert.strictEqual(bookWorm.totalValue(), 28.97);
  })

  it("should be able to view the total value of all books of a given Genre", function(){
    bookWorm.buyBook(book1);
    bookWorm.buyBook(book2);
    bookWorm.buyBook(book3);
    assert.strictEqual(bookWorm.valueByGenre("fiction"), 15.98);
  })

  it("should be able to view their longest book", function(){
    bookWorm.buyBook(book1);
    bookWorm.buyBook(book2);
    bookWorm.buyBook(book3);
    assert.strictEqual(bookWorm.longestBook(), book3);
  })

  it("should be able to sort their books by value. (ascending or descending)", function(){
    bookWorm = new BookWorm(100);
    bookWorm.buyBook(book1);
    bookWorm.buyBook(book2);
    bookWorm.buyBook(book3);
    assert.deepEqual(bookWorm.sortByValue(), [book3, book1, book2]);
  })

  it("should be able to compare the value of their collection with another BookWorm", function(){
    bookWorm = new BookWorm(100);
    bookWorm.buyBook(book1);
    bookWorm.buyBook(book2);
    bookWorm2.buyBook(book3);
    bookWorm2.buyBook(book1);
    assert.deepEqual(bookWorm.compareBookWorms(bookWorm2), 53);
  })
})


















