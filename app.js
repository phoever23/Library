const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
        const delButton = document.createElement("button")
        delButton.className = "del"
        delButton.innerText = "DELETE"
        card.appendChild(delButton)
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
    const newBook = new Book(title, author, pages)
    addBookToLibrary(newBook)
    displayBooks(myLibrary)
    document.getElementById("title").value = ""
    document.getElementById("author").value = ""
    document.getElementById("pages").value = ""

    // add delete button
    let delbuttons = document.querySelectorAll(".del")
    delbuttons.forEach(delbutton => {
        delbutton.addEventListener("click", function (e) {
            delbutton.parentNode.remove()
        })
    });
})


// for test use
// const book1 = new Book("harry potter", "JK", 666, true)
// const book2 = new Book("1984", "george", 321, false)
// addBookToLibrary(book1)
// addBookToLibrary(book2)
// displayBooks(myLibrary)

