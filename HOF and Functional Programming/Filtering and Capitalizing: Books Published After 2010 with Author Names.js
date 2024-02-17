const books = [
    { title: "Book1", author: "author1", year: 2008 },
    { title: "Book2", author: "author2", year: 2015 },
    { title: "Book3", author: "author3", year: 2012 }
];

const filteredBooks = books
    .filter(book => book.year > 2010)
    .map(book => ({ ...book, author: book.author.toUpperCase() }));

console.log(filteredBooks);
