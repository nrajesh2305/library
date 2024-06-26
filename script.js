const myLibrary = new Array();
const add_book_button = document.querySelector("button.add-book");
const book_form = document.querySelector("#book-form");
const form = document.querySelector("form.add-book-form");
const is_read_button = document.querySelector("#is_read");
is_read_button.style.backgroundColor = "red";
const submit_button = document.querySelector("#submit");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let numPages = document.querySelector("#numPages");
let isRead = document.querySelector("#is_read");
const shelf_area = document.querySelector(".shelf-area");
const shelf = document.querySelector(".shelf-area div");
let confirmed_read = false;

function Book(title, author, num_pages, is_read)
{
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.is_read = is_read;
}

add_book_button.addEventListener("click", () =>
{
    form.style.visibility = "visible";
    add_book_button.textContent = "CLOSE FORM";
    add_book_button.addEventListener("click", () =>
    {
        if(add_book_button.textContent === "CLOSE FORM")
        {
            add_book_button.textContent = "ADD BOOK";
            form.style.visibility = "hidden";
        }
        else if(add_book_button.textContent === "ADD BOOK")
        {
            add_book_button.textContent = "CLOSE FORM";
            form.style.visibility = "visible";
        }
        form.reset();
    });
});


is_read_button.addEventListener("click", () =>
{
    if(is_read_button.style.backgroundColor === "red")
    {
        is_read_button.style.backgroundColor = "lime";
        is_read_button.textContent = "Yes";
        confirmed_read = true;
    }
    else if(is_read_button.style.backgroundColor === "lime")
    {
        is_read_button.style.backgroundColor = "red";
        is_read_button.textContent = "No";
        confirmed_read = false;
    }
});

book_form.addEventListener("submit", function(event)
{
    let inputs = document.querySelectorAll("form input");
    let is_all_filled = true;

    inputs.forEach(function(input)
    {
        if(!input.value.trim())
        {
            is_all_filled = false;
        }
    });
    if(is_all_filled)
    {
        // Do this if you want to prevent refreshing the entire page, 
        // and only plan to do so in a specific part. 
        addBookToLibrary();
        event.preventDefault();
        // We are only resetting the form. Not the page.
        form.style.visibility = "hidden";
        add_book_button.textContent = "ADD BOOK";
        this.reset();
    }
});

function addBookToLibrary()
{
    // on the press of the button on the screen, add the book to the library.
    let book = this.title.value;
    myLibrary.push(book);
    addShelfOrBook();
    return myLibrary;
}

function addShelfOrBook()
{
    // Add a shelf on top of the other shelves if the amount of books in the current shelf
    // has 8 books, and if so, the 9th book they are trying to add with now be put into the top shelf
    // above it.
    if(myLibrary.length === 1 || myLibrary.length % 8 === 1)
    {
        new_shelf = document.createElement("div");
        shelf_area.appendChild(new_shelf);
    }
    new_book = document.createElement("div");
    new_shelf.appendChild(new_book);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    new_book.setAttribute("style", "white-space: pre;");
    new_book.textContent = this.title.value;
    new_book.textContent += "\n\n";
    new_book.textContent += "By: " + this.author.value;
    new_book.textContent += "\n\n";
    new_book.textContent += this.numPages.value + " pages";
    new_book.textContent += "\n\n";
    if(confirmed_read)
    {
        new_book.textContent += "READ";   
    }
    else
    {
        new_book.textContent += "NOT READ";
    }
    new_book.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";

    return shelf_area;
}