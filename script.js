const myLibrary = new Array();
const add_book_button = document.querySelector("button.add-book");
const book_form = document.querySelector("#book-form");
const form = document.querySelector("form.add-book-form");
const is_read_button = document.querySelector("#is_read");
is_read_button.style.backgroundColor = "red";
const submit_button = document.querySelector("#submit");
let title = document.querySelector("#title");
const shelf_area = document.querySelector(".shelf-area");

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
});

is_read_button.addEventListener("click", () =>
{
    if(is_read_button.style.backgroundColor === "red")
    {
        is_read_button.style.backgroundColor = "lime";
        is_read_button.textContent = "Yes";
    }
    else if(is_read_button.style.backgroundColor === "lime")
    {
        is_read_button.style.backgroundColor = "red";
        is_read_button.textContent = "No";
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
        console.log(this);
        event.preventDefault();
        this.reset();
        form.style.visibility = "hidden";
    }
});

function addBookToLibrary()
{
    // on the press of the button on the screen, add the book to the library.
    let book = this.title.value;
    myLibrary.push(book);
    return myLibrary;
}

function addShelf()
{
    // Add a shelf on top of the other shelves if the amount of books in the current shelf
    // has 8 books, and if so, the 9th book they are trying to add with now be put into the top shelf
    // above it.
    new_div = document.createElement("div");
    shelf_area.appendChild(new_div);
    return shelf_area;
}