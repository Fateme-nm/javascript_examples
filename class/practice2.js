/* Write a program in which you define a Media class, then take classes like book, movie, etc. from it.
Create and create new objects from these classes */

class Media {
    constructor(name, category) {
        this.name = name
        this.category = category
    }

    introducing() {
        console.log(`thats name is ${this.name} and it is in the ${this.category} genre`) 
    }
}

class Book extends Media{
    constructor(name, category, author) {
        super(name, category)
        this.author = author
    }

    publicationDate;
    price;
    Language;
    Paperback;

    introducing() {
        console.log("***Introducing a good book***")
        super.introducing()
        console.log(`The author of this book is ${this.author} \nthis book has been published in ${this.publicationDate}.\n\n`)
    }
}

class Film extends Media{
    constructor(name, category, director) {
        super(name, category)
        this.director = director
    }

    writersList;
    starsList;

    introducing() {
        console.log("***Introducing a good film***")
        super.introducing()
        console.log(`This film is directed by ${this.director} \nstars of this film are ${this.starsList}\n\n`)
    }
}

let film1 = new Film("Forrest Gump", ["Drama","Romance"], "Robert Zemeckis")
film1.writersList = ["Winston Groom", "Eric Roth"]
film1.starsList = ["Tom Hanks", "Robin Wright", "Gary Sinise"]

let film2 = new Film("The Fault in Our Stars", ["Drama","Romance"], "Josh Boone")
film2.writersList = ["Scott Neustadter", "Michael H. Weber", "John Green"]
film2.starsList = ["Shailene Woodley", "Ansel Elgort", "Nat Wolff"]

let book1 = new Book("The Alchemist","Novel", "Paulo Coelho")
book1.Language = "English"
book1.Paperback = 197
book1.price = "$16.98"
book1.publicationDate = "April 25, 1993"

let book2 = new Book("The Four Agreements", "Psychology", "Don Miguel Ruiz")
book2.Language = "English"
book2.Paperback = 160
book2.price = "$1.54"
book2.publicationDate = "July 10, 2018"

film1.introducing()
book1.introducing()


