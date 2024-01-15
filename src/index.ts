//Book class is like a blueprint for Book objects
class Book {
  //property and type
  title: string;
  author: string;
  pages: number;
  read: boolean;

  constructor(title: string, author: string, pages: number, read: boolean) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  //create function
  info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "has been read" : "not read yet"
    }`;
  }
}

const book1 = new Book("Money", "Rifat", 123, true);
console.log(book1);
