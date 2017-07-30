var Book = function(author, title, genre, pages, price){
  this.author = author;
  this.title = title;
  this.genre = genre;
  this.pages = pages;
  this.price = price;
}

Book.prototype.getAllInfo = function() {
  return "author: " + this.author + ", " + "title: " + this.title + ", " + "genre: " + this.genre + ", " + "pages: " + this.pages + ", " + "price: " + this.price;
},

module.exports = Book;