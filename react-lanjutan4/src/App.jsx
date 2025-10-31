import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";

// Layouts
import PublicLayout from "./layouts/public";
import AdminLayout from "./layouts/admin";

// Pages
import Home from "./pages/public";
import Books from "./pages/public/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BooksCreate from "./pages/admin/books/create";
import AdminGenres from "./pages/admin/genres";
import GenresCreate from "./pages/admin/genres/create";
import AdminAuthors from "./pages/admin/authors";
import AuthorsCreate from "./pages/admin/authors/create";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* ADMIN - hanya bisa diakses oleh admin */}
          <Route
            path="admin"
            element={
              <ProtectedRoute role="admin">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="books" element={<AdminBooks />} />
            <Route path="books/create" element={<BooksCreate />} />
            <Route path="genres" element={<AdminGenres />} />
            <Route path="genres/create" element={<GenresCreate />} />
            <Route path="authors" element={<AdminAuthors />} />
            <Route path="authors/create" element={<AuthorsCreate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
