// Element selection for UI components
const addBookBtn = document.getElementById("add-score");
const scoreDialog = document.getElementById("score_dialog");
const composer = document.getElementById("composer");
const composition = document.getElementById("composition");
const catalog = document.getElementById("catalog");
const instrument = document.getElementById("instrument");
const confirmBtn = scoreDialog.querySelector("#confirmBtn");
const books = document.getElementById("books");

const myLibrary = [];

// "Show the dialog" button opens the <dialog> modally
addBookBtn.addEventListener("click", () => {
  scoreDialog.showModal();
});

// Event listener to capture the dialog's close event
scoreDialog.addEventListener("close", (e) => {
  const returnValue = scoreDialog.returnValue;
  if (returnValue === "default") {
    console.log("No return value.");
  }
});

// Event listener for the "confirm" button to create a book object and add it to the library
confirmBtn.addEventListener("click", (event) => {
  // Get the input values
  const composerValue = composer.value.trim();
  const compositionValue = composition.value.trim();
  const catalogValue = catalog.value.trim();
  const instrumentValue = instrument.value.trim();

  // Create a new Book object with the input values
  let score = new Book(composerValue, compositionValue, catalogValue, instrumentValue, false);

  // Add the book object to the library
  addBookToLibrary(score);
  // Display the new book 
  displayBooks(myLibrary);
  
  // get the check and trash buttons
  let checkBtn = document.getElementById("check");
  let trashBtn = document.getElementById("trash");
  
  checkBtn.addEventListener("click", function(){
    markRead(score, checkBtn);
    
  });
  
  trashBtn.addEventListener("click", function() {
    deleteBook(score);
  })

  // Prevent the default form submission behavior and close the dialog
  event.preventDefault();
  scoreDialog.close();
});

// Book constructor function
function Book(composer, composition, catalog, instrument, read) {
  this.composer = composer;
  this.composition = composition;
  this.catalog = catalog;
  this.instrument = instrument;
  this.read = read;
}

// Function to add a book to the library array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// function to display books in the library
function displayBooks(arr) {
  // Iterate over the library array and create HTML elements for each book
      let lastBook = arr[arr.length-1];
      let bookIndex = arr.indexOf(lastBook);
      const bookDiv = document.createElement("div");
      bookDiv.setAttribute("class","book_object");
      bookDiv.setAttribute("arrIndex",bookIndex);
      //bookDiv.classList.add("book");

      const bookInfo = `
          <p id='book_composer'>${lastBook.composer}</p>
          <p id='book_composition'>${lastBook.composition}</p>
          <p id='book_catalog'>${lastBook.catalog}</p>
          <p id='book_instrument'>${lastBook.instrument}</p>
          <p class='footer'>⎯⎯⎯⎯<svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" width="15" fill="white">
          <path d="M13 11V7.5L15.2 5.29C16 4.5 16.15 3.24 15.59 2.26C15.14 1.47 14.32 1 13.45 1C13.24 1 13 1.03 12.81 1.09C11.73 1.38 11 2.38 11 3.5V6.74L7.86 9.91C6.2 11.6 5.7 14.13 6.61 16.34C7.38 18.24 9.06 19.55 11 19.89V20.5C11 20.76 10.77 21 10.5 21H9V23H10.5C11.85 23 13 21.89 13 20.5V20C15.03 20 17.16 18.08 17.16 15.25C17.16 12.95 15.24 11 13 11M13 3.5C13 3.27 13.11 3.09 13.32 3.03C13.54 2.97 13.77 3.06 13.88 3.26C14 3.46 13.96 3.71 13.8 3.87L13 4.73V3.5M11 11.5C10.03 12.14 9.3 13.24 9.04 14.26L11 14.78V17.83C9.87 17.53 8.9 16.71 8.43 15.57C7.84 14.11 8.16 12.45 9.26 11.33L11 9.5V11.5M13 18V12.94C14.17 12.94 15.18 14.04 15.18 15.25C15.18 17 13.91 18 13 18Z" /></svg>⎯⎯⎯⎯</p>
          <div class="book-btns">
          <button class="book-btn" id="check"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg></button>
          <button class="book-btn" id="trash"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16,10V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V10H16M13.5,6L14.5,7H17V9H7V7H9.5L10.5,6H13.5Z" /></svg></button>
          
          
      `;

      bookDiv.innerHTML = bookInfo;
      books.appendChild(bookDiv);
 
}

// trash the book 
function deleteBook(score){
  let index = myLibrary.indexOf(score);
  if (index > -1) {
    myLibrary.splice(index,1);
  }
  // remove DOM
  let bookDOM = document.querySelector(`.book_object[arrIndex="${index}"]`);
  bookDOM.remove();
}

// function to update 'read' status
function markRead(score, checkBtn){
  if (score.read == true) {
    score.read = false;
    checkBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" /></svg>`;
  } else {
    score.read = true;
    checkBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" /></svg>`;
  }
  return score;
}