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
const delete_book_button = document.querySelector("button.delete-book");
let confirmed_read = false;
let delete_mode = false;

function Book(title, author, num_pages, is_read) 
{
    this.title = title;
    this.author = author;
    this.num_pages = num_pages;
    this.is_read = is_read;
}

add_book_button.addEventListener("click", () => 
{
    if (book_form.style.visibility === "visible") {
        book_form.style.visibility = "hidden";
        add_book_button.textContent = "ADD BOOK";
        is_read_button.style.backgroundColor = "red";
        is_read_button.textContent = "No";
    } else {
        book_form.style.visibility = "visible";
        add_book_button.textContent = "CLOSE FORM";
    }
});

delete_book_button.addEventListener("click", () => 
{
    if (myLibrary.length === 0) 
    {
        delete_book_button.textContent = "The Library is Empty!";
        setTimeout(function () 
        {
            delete_book_button.textContent = "DELETE BOOK";
        }, 3000);
    }
    else if(myLibrary.length === 1)
    {
        myLibrary.pop();
        shelf_area.textContent = "";
    } 
    else 
    {
        delete_mode = !delete_mode;
        delete_book_button.textContent = delete_mode ? "Choose a Book to Delete" : "DELETE BOOK";
        // Highlight the delete button in red when delete mode is activated
        if (delete_mode) 
        {
            delete_book_button.style.backgroundColor = "red";
        } 
        else 
        {
            delete_book_button.style.backgroundColor = "rgb(255, 87, 87)";
        }
    }
});

is_read_button.addEventListener("click", () => 
{
    if (is_read_button.style.backgroundColor === "red") 
    {
        is_read_button.style.backgroundColor = "lime";
        is_read_button.textContent = "Yes";
        confirmed_read = true;
    } 
    else if (is_read_button.style.backgroundColor === "lime") 
    {
        is_read_button.style.backgroundColor = "red";
        is_read_button.textContent = "No";
        confirmed_read = false;
    }
});

book_form.addEventListener("submit", function (event) 
{
    let inputs = document.querySelectorAll("form input");
    let is_all_filled = true;

    inputs.forEach(function (input) 
    {
        if (!input.value.trim()) 
        {
            is_all_filled = false;
        }
    });
    if (is_all_filled) 
    {
        addBookToLibrary();
        event.preventDefault();
        form.style.visibility = "hidden";
        add_book_button.textContent = "ADD BOOK";
        is_read_button.style.backgroundColor = "red";
        is_read_button.textContent = "No";
        confirmed_read = false;
        this.reset();
    }
});

function addBookToLibrary() {
    let book = {
        title: title.value,
        author: author.value,
        numPages: numPages.value,
        isRead: confirmed_read
    };
    myLibrary.push(book);
    addShelfOrBook(book);
}

function addShelfOrBook(book) 
{
    let new_shelf;
    if (myLibrary.length === 1 || myLibrary.length % 8 === 1) {
        new_shelf = document.createElement("div");
        shelf_area.appendChild(new_shelf);
    } 
    else 
    {
        new_shelf = shelf_area.lastChild;
    }

    let new_book = document.createElement("div");
    new_shelf.appendChild(new_book);

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    new_book.setAttribute("style", "white-space: pre-wrap;");
    new_book.textContent = this.title.value;
    new_book.textContent += "\n\n";
    new_book.textContent += "By: " + this.author.value;
    new_book.textContent += "\n\n";
    new_book.textContent += this.numPages.value + " pages";
    new_book.textContent += "\n";
    if(book.isRead)
    {
        new_book.textContent += "READ";   
    }
    else
    {
        new_book.textContent += "NOT READ";
    }
    new_book.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    new_book.addEventListener("click", () => 
    {
        if (delete_mode) 
        {
            let index = myLibrary.indexOf(book);
            if (index > -1) 
            {
                myLibrary.splice(index, 1);
                new_book.remove();
                if (new_shelf.childElementCount === 0) 
                {
                    shelf_area.removeChild(new_shelf);
                }
                delete_mode = false;
                delete_book_button.textContent = "DELETE BOOK";
                delete_book_button.style.backgroundColor = "rgb(255, 87, 87)";
            }
        }
    });
    return shelf_area;
}
