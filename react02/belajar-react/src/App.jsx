import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import "./App.css"; // pastikan file CSS diimport

export default function App() {
  return (
    <BrowserRouter>
  <nav className="navbar">
    <div className="container">
      <NavLink className="logo" to="/">My Website</NavLink>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  </nav>

  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </main>
</BrowserRouter>

  );
}
