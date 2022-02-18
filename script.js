let myLibrary = []
let number = 0

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
    var message_title = document.getElementById("book_title").value;
    var message_author = document.getElementById("book_author").value;
    var message_numofpages = document.getElementById("book_pages").value;
    var message_ReadorNot = document.getElementById("book_read").value;

    /*const book = new Book(message_title, message_author, message_numofpages, message_ReadorNot)
    myLibrary.push(book)
    console.log(myLibrary)*/

    number += 1
    let custom = number
    const book_info = document.createElement("div")
    book_info.classList.add("info")
    book_info.classList.add("Book_" + String(custom))

    var start = document.getElementById("anchor")
    var p_title = document.createElement("p")
    var p_author = document.createElement("p")
    var p_pages = document.createElement("p")
    var p_ReadorNot = document.createElement("p")

    //DELETE BUTTON
    const del_button = document.createElement("button")
    del_button.onclick = function () { deleteMe(del_button) };
    del_button.value = "Book_" + String(custom)

    if (message_title.length > 0 && message_author.length > 0 && message_numofpages > 0 && message_ReadorNot.length > 0) {
        p_title.innerHTML = message_title + "<br>";

        p_author.innerHTML = message_author + "<br>";

        p_pages.innerHTML = message_numofpages + "<br>";

        if (document.getElementById("book_read").checked) {
            p_ReadorNot.innerHTML = "Read" + "<br>";
        }

        else {
            p_ReadorNot.innerHTML = "Not read" + "<br>";
        }

        del_button.innerHTML = "Remove Book " + custom

        book_info.appendChild(p_title)
        book_info.appendChild(p_author)
        book_info.appendChild(p_pages)
        book_info.appendChild(p_ReadorNot)
        book_info.appendChild(del_button)

        start.appendChild(book_info)

        document.getElementById("book_title").value = ""
        document.getElementById("book_author").value = ""
        document.getElementById("book_pages").value = ""
        document.getElementById("book_read").checked = false
    }
}

function deleteMe(item) {
    var del = document.getElementsByClassName(item.value)
    while (del.length > 0) {
        del[0].parentNode.removeChild(del[0]);
    }
    number -= 1
}