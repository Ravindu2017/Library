let myLibrary = []
let number = 1

function Book(title, author, pages, read, index) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.index = index
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
            book.index = i
            console.log("index i: ", i)
            //book_info.classList.add("Book_" + String(i))
            book_info.className = "Book_" + String(i)
            //del_button.value = "Book_" + String(i)
            del_button.value = "Book_" + book.index

            p_title.innerHTML = myLibrary[i].title;
            p_author.innerHTML = myLibrary[i].author;
            p_pages.innerHTML = myLibrary[i].pages;
            p_ReadorNot.innerHTML = myLibrary[i].read;
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
    //Index at 2 but book object has element at index 0 so 
    //ofc not going to delete the correct book

    var del = document.getElementsByClassName(item.value)
    var index = item.value;
    index = index.replace('Book_', '');

    for (let j = 0; j < myLibrary.length; j++) {
        if (myLibrary[j].index === parseFloat(index)) {
            var index_library = myLibrary.indexOf(myLibrary[j])
            console.log("Matching indices", "Book", parseFloat(index) + 1, "removed", (myLibrary[j].index), parseFloat(index))
            console.log("\nlibrary index: ", index_library, " and should be deleted at")
            while (del.length > 0) {
                del[0].parentNode.removeChild(del[0]);
                if (parseFloat(index_library) > -1) {
                    myLibrary.splice(parseFloat(index_library), 1)

                }
            }
        }
        //console.log("Index Comparison", myLibrary[j].index, parseFloat(index))

    }

    /* while (del.length > 0) {
         del[0].parentNode.removeChild(del[0]);
         myLibrary.splice(index, 1)
 
         /*if (index > -1) {
             myLibrary.splice(index, 1)
 
         }
     }
     
     if (index > -1) {
         myLibrary.splice(index, 1)
 
     }
 */


    console.log(myLibrary, " item value: ", item.value, " index: ", index, " del: ", del)
}