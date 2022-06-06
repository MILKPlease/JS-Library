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
  displayBooksOnPage();
}

// Display library array
function displayBooksOnPage() {
  const books = document.querySelector(".books");

  const removeDivs = document.querySelectorAll(".card");
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }

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

const addBookButton = document.querySelector(".add-book-button");
addBookButton.addEventListener("click", displayTheForm);

function displayTheForm() {
  document.getElementById("add-book-form").style.display = "";
}

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", intakeFormData);

function intakeFormData() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").value;

  if (title == "" || author == "" || pages == "" || read == "") {
    return;
  }

  addBookToLibrary(title, author, pages, read);

  document.getElementById("add-book").reset();
}

const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book").reset();
}

// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
// displayBooksOnPage();
