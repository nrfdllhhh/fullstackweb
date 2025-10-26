import { BrowserRouter, Route, Routes } from "react-router-dom";

// PUBLIC
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";

// AUTH
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// ADMIN
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BooksCreate from "./pages/admin/books/create";
import AdminGenres from "./pages/admin/genres";
import GenresCreate from "./pages/admin/genres/create";
import AdminAuthors from "./pages/admin/authors";
import AuthorsCreate from "./pages/admin/authors/create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
        </Route>

        {/* AUTH */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* ADMIN */}
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          {/* BOOKS */}
          <Route path="books">
            <Route index element={<AdminBooks />} />
            <Route path="create" element={<BooksCreate />} />
          </Route>

          {/* AUTHORS */}
          <Route path="authors">
            <Route index element={<AdminAuthors />} />
            <Route path="create" element={<AuthorsCreate />} />
          </Route>

          {/* GENRES */}
          <Route path="genres">
            <Route index element={<AdminGenres />} />
            <Route path="create" element={<GenresCreate />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
