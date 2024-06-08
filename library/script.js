const myLibrary = [];

function Book(author,title,pages, genre, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.genre = genre;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBook(){

}