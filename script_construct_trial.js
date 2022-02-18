let myLibrary = []
let number = 1

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
    var message_ReadorNot = ""
    var check = document.getElementById("book_read").checked;
    if (check) {
        message_ReadorNot = "Read"
    }
    else {
        message_ReadorNot = "Not Read"
    }

    var start_2 = document.getElementById("anchor_2")

    const book_info = document.createElement("div")
    book_info.classList.add("info")


    var p_title = document.createElement("p")
    var p_author = document.createElement("p")
    var p_pages = document.createElement("p")
    var p_ReadorNot = document.createElement("p")

    const del_button = document.createElement("button")
    del_button.onclick = function () { deleteMe(del_button) };

    if (message_title.length > 0 && message_author.length > 0 && message_numofpages > 0 && message_ReadorNot.length > 0) {
        //Only create book object if all fields are filled
        const book = new Book(message_title, message_author, message_numofpages, message_ReadorNot)
        myLibrary.push(book)
        console.log(myLibrary)

        for (let i = 0; i < myLibrary.length; i++) {

            /*const book_info = document.createElement("div")
            book_info.classList.add("info")*/
            book_info.classList.add("Book_" + String(i))

            /*var p_title = document.createElement("p")
            var p_author = document.createElement("p")
            var p_pages = document.createElement("p")
            var p_ReadorNot = document.createElement("p")*/

            /*const del_button = document.createElement("button")
            del_button.onclick = function () { deleteMe(del_button) };*/
            del_button.value = "Book_" + String(i)

            p_title.innerHTML = myLibrary[i].title;

            p_author.innerHTML = myLibrary[i].author;

            p_pages.innerHTML = myLibrary[i].pages;

            p_ReadorNot.innerHTML = myLibrary[i].read;

            /*
            if (document.getElementById("book_read").checked) {
                p_ReadorNot.innerHTML = "Read" + "<br>";
            }
    
            else {
                p_ReadorNot.innerHTML = "Not read" + "<br>";
            }
            "/*/

            del_button.innerHTML = "Remove Book " + String(i + 1)

            book_info.appendChild(p_title)
            book_info.appendChild(p_author)
            book_info.appendChild(p_pages)
            book_info.appendChild(p_ReadorNot)
            book_info.appendChild(del_button)

            start_2.appendChild(book_info)

            document.getElementById("book_title").value = ""
            document.getElementById("book_author").value = ""
            document.getElementById("book_pages").value = ""
            document.getElementById("book_read").checked = false
        }

    }

    else {
        alert("Empty Fields")

    }
}

function deleteMe(item) {
    var del = document.getElementsByClassName(item.value)
    var index = item.value;
    index = index.replace('Book_', '');
    while (del.length > 0) {
        del[0].parentNode.removeChild(del[0]);
        if (index > -1) {
            myLibrary.splice(index, 1)

        }
    }


    number -= 1
    console.log(item, " number: ", number)
    console.log(myLibrary, del)
}