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
  let index = 0;
  myLibrary.forEach((myLibrarys) => {
    const card = document.createElement("div");
    card.classList.add("card");
    books.appendChild(card);

    // Create remove book button and add class attribute for each array card
    const removeBookButton = document.createElement("button");
    removeBookButton.classList.add("remove-book-button");
    removeBookButton.textContent = "Remove From Library";

    // Link the data attribute of the remove button to the array and card
    removeBookButton.dataset.linkedArray = index;
    index++;
    card.appendChild(removeBookButton);

    // Start event listener//remove arry item from card and parent div via data link
    removeBookButton.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
      let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayBooksOnPage();
    }

    // Loop over the object keys and values and display to each card
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
