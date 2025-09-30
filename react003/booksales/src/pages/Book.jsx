import React, { useState } from "react";
import booksData from "../Utils/books";

function Book() {
  const [books, setBooks] = useState(booksData);
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });

  const addBook = () => {
    setBooks([...books, { id: books.length + 1, ...newBook }]);
    setNewBook({ title: "", author: "", year: "" });
  };

  return (
    <div className="container">
      <h1>📖 Halaman Buku</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> <br />
            <em>{book.author}</em> ({book.year})
          </li>
        ))}
      </ul>

      <h2>➕ Tambah Buku Baru</h2>
      <div>
        <input
          type="text"
          placeholder="Judul"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Penulis"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Tahun"
          value={newBook.year}
          onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
        />
        <br />
        <button onClick={addBook}>Tambah</button>
      </div>
    </div>
  );
}

export default Book;
