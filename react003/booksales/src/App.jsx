import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/book">Book</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </Router>
  );
}

export default App;
