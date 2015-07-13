function BookReader(book) {
  this.book = book;
  this.currentPage = 0;
}

BookReader.prototype.nextPage = function() {
  if(this.currentPage < this.book.length - 1){
    this.currentPage++;
    return this.book[this.currentPage]
  } else {
    return this.book[this.book.length -1]
  }
};

BookReader.prototype.previousPage = function() {
  if(this.currentPage > 0){
    this.currentPage--;
    return this.book[this.currentPage]
  } else {
    return this.book[0]
  }
};

BookReader.prototype.pagesLeft = function() {
  return (this.book.length - 1)- this.currentPage
};

BookReader.prototype.encouragement = function() {
  if(this.pagesLeft() > 1){
    return 'Keep going, only ' + this.pagesLeft() + ' pages left after this one!'
  } else {
    return "Keep going, this book is good 'til the last drop!"
  }
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
