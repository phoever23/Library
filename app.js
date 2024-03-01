const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
    return myLibrary
}

const cards = document.querySelector(".cards")

function displayBooks(library) {
    library.forEach(book => {
        const card = document.createElement("ul")
        cards.appendChild(card)
        for (const key in book) {
            const li = document.createElement("li")
            li.textContent = `${key}: ${book[key]}`
            card.appendChild(li)
        }
        //add delete button
        const delButton = document.createElement("button")
        delButton.className = "del"
        delButton.innerText = "DELETE"
        card.appendChild(delButton)
        //add read status button
        const readButton = document.createElement("button")
        if (document.getElementById("read").checked) {
            readButton.innerText = "read"
        } else {
            readButton.innerText = "not read"
        }
        readButton.className = "read"
        card.appendChild(readButton)
    })
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const btn = document.querySelector("button")
btn.addEventListener("click", function (e) {
    removeAllChildNodes(cards)

    const title = document.getElementById("title").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    if (title !== "" && author !== "" && pages !== "") {
        const newBook = new Book(title, author, pages)
        addBookToLibrary(newBook)
        displayBooks(myLibrary)
        document.getElementById("title").value = ""
        document.getElementById("author").value = ""
        document.getElementById("pages").value = ""

        //delete button
        let delbuttons = document.querySelectorAll(".del")
        delbuttons.forEach(delbutton => {
            delbutton.addEventListener("click", function (e) {
                delbutton.parentNode.remove()
            })
        });
        // change read status
        let reads = document.querySelectorAll(".read")
        reads.forEach(read => {
            read.addEventListener("click", function (e) {
                if (read.innerText === "read") {
                    read.innerText = "not read"
                } else {
                    read.innerText = "read"
                }
            })
        });
    }
})




