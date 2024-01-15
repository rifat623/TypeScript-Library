"use strict";
//Book class is like a blueprint for Book objects
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    //create function
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "has been read" : "not read yet"}`;
    }
}
const book1 = new Book("Money", "Rifat", 123, true);
console.log(book1);
//# sourceMappingURL=index.js.map