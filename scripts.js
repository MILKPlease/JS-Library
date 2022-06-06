// Empty Array
let myLibrary = [];

// Object Constructor
class Book {
  constructor(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;
  }
}

// Add to myLibrary
function addBookToLibrary(Title, Author, Pages, Read) {
  let book = new Book(Title, Author, Pages, Read);
  myLibrary.push(book);
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
    card.appendChild(removeBookButton);

    // Start event listener//remove arry item from card and parent div via data link
    removeBookButton.addEventListener("click", removeBookFromLibrary);

    function removeBookFromLibrary() {
      let retrieveBookToRemove = removeBookButton.dataset.linkedArray;
      myLibrary.splice(parseInt(retrieveBookToRemove), 1);
      card.remove();
      displayBooksOnPage();
    }

    const readStatusButton = document.createElement("button");
    readStatusButton.classList.add("read-status-button");
    readStatusButton.textContent = "Toggle Read Status";

    readStatusButton.dataset.linkedArray = index;
    card.appendChild(readStatusButton);
    readStatusButton.addEventListener("click", toggleReadStatus);

    function toggleReadStatus() {
      let retrieveBookToToggle = readStatusButton.dataset.linkedArray;
      Book.prototype = Object.create(Book.prototype);
      const toggleBook = new Book();

      if (myLibrary[parseInt(retrieveBookToToggle)].Read == "Yes") {
        toggleBook.Read = "No";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
      } else if (myLibrary[parseInt(retrieveBookToToggle)].Read == "No") {
        toggleBook.Read = "Yes";
        myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
      }
      displayBooksOnPage();
    }

    for (let key in myLibrarys) {
      const para = document.createElement("p");
      para.textContent = `${key}: ${myLibrarys[key]}`;
      card.appendChild(para);
    }

    index++;
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
  let Title = document.getElementById("Title").value;
  let Author = document.getElementById("Author").value;
  let Pages = document.getElementById("Pages").value;
  let Read = document.getElementById("Read").value;

  if (Title == "" || Author == "" || Pages == "" || Read == "") {
    return;
  }

  addBookToLibrary(Title, Author, Pages, Read);

  document.getElementById("add-book").reset();
}

const clearButton = document.querySelector(".reset-button");
clearButton.addEventListener("click", clearForm);

function clearForm() {
  document.getElementById("add-book").reset();
}
