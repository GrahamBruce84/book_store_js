var assert = require('assert');
var Book = require('../book.js');
var Store = require('../store.js');


describe("store", function(){
  var book1 = new Book("Chris Burn", "The word easy, when you shouldn't say it!", "fiction", 660, 12.99);
  var book2 = new Book("Davie Clarkson", "X-wing my only love", "romance", 50, 15.99);
  var book3 = new Book("Kieran Marshall", "timekeeping, pfft what's that?", "fiction", 904, 2.99);
  var book;

  beforeEach(function(){
    store = new Store("Thee book store", "Aberdream")
    store.addBook(book1);
    store.addBook(book2);
  })

  it('can add some books to the inventory', function(){
    store.addBook(new Book("Mick Robertson", "Born in a white man's body, the Original OG", "AutoBiography", 356, 3.99));
    assert.strictEqual(store.inventory.length, 3);
  })

  it('can print out the book details as a string', function(){
    assert.deepEqual(store.getDetails()[0], {"author": "Chris Burn", "title": "The word easy, when you shouldn't say it!", "genre": "fiction", "pages": 660, "price": 12.99});
  })

  it('can show a list of the inventory', function(){
    assert.deepEqual(store.listInventory(), [book1, book2])
  })

  it('can sell a book and adjust the store balance', function(){
    assert.strictEqual(store.inventory.length, 2);
    store.sellBook(book1);
    assert.strictEqual(store.inventory.length, 1);
    assert.strictEqual(store.balance, 512.99)
  })

  it('report the financial situation of the Store. Balance and value of inventory', function(){
    assert.strictEqual(store.allTheMonies(), 528.98)
  })

  it('list the books by genre', function(){
    store.addBook(book3);
    assert.deepEqual(store.getByGenre("fiction"), [book1, book3])
  })

})