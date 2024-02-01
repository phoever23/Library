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

// const btn = document.querySelector("button")
// const title = document.getElementById("title").value
// btn.addEventListener("click", function (e) {
//     console.log(title)
// })


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
    })
}

// for test use
const book1 = new Book("harry potter", "JK", 666, true)
const book2 = new Book("1984", "george", 321, false)
addBookToLibrary(book1)
addBookToLibrary(book2)
displayBooks(myLibrary)