const myLibrary = new Array();
const add_book_button = document.querySelector("button.add-book");
const form = document.querySelector("form.add-book-form");
const is_read_button = document.querySelector("#is_read");
is_read_button.style.backgroundColor = "red";
const submit_button = document.querySelector("#submit");
let title = document.querySelector("#title");

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

function addBookToLibrary()
{
    // on the press of the button on the screen, add the book to the library.
    let book = this.title.value;
    myLibrary.push(book);
    return myLibrary;
}
