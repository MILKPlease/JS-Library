// Empty Array
let myLibrary = [];

// Object Constructor
function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  //   info: function () {
  //     console.log(
  //       this.title + ", " + this.author + ", " + this.pages + ", " + this.read
  //     );
  //   },
}

// Add to myLibrary
function addBookToLibrary(title, author, pages, read) {
  let Book = new book(title, author, pages, read);
  myLibrary.push(Book);
}

// Display library array
function displayBooksOnPage() {
  const books = document.querySelector(".books");

  // Loop over the library
  myLibrary.forEach((myLibrary) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);
    for (let key in myLibrary) {
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrary[key]}`;
      card.appendChild(para);
    }
  });
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
displayBooksOnPage();
