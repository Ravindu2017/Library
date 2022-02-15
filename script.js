let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        if (read) {
            console.log(title, "by ", author, pages, "read")
        }
        else {
            console.log(title, "by ", author, pages, "not read yet")
        }

    }
}

function addBook() {
    const p = document.createElement("p")
    var message = document.getElementById("book_title").value;
    display_message.innerHTML = message;


}

const frodo = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)

//console.log(frodo.info()) // The Hobbit by  J.R.R. Tolkien 295 not read yet

function myFunction() {
    alert("The form was submditted");
}

var form_one = document.forms.target;
const formData = new FormData(form_one)
const formProps = Object.fromEntries(formData)

console.log(document.getElementById("book_title"), "FUCK")//, formData[0])