const myLibrary = new Array();

const add_book_button = document.querySelector("button.add-book");
const form = document.querySelector("form.add-book-form");

function Book(title, author, num_pages, is_read)
{
    // the constructor.
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.is_read = is_read;
}

add_book_button.addEventListener("click", () =>
{
    form.style.visibility = "visible";
});

function addBookToLibrary()
{
    // on the press of the button on the screen, add the book to the library.
}