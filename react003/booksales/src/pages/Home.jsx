import React from "react";
import books from "../Utils/books";

function Home() {
  return (
    <div className="container">
      <h1>📚 Daftar Buku</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> <br />
            <em>{book.author}</em> ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
