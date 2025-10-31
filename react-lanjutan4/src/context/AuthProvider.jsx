import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Cek localStorage saat pertama kali aplikasi dijalankan
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false); // menandakan bahwa pengecekan sudah selesai
  }, []);

  // 🔹 Simpan user ke localStorage setiap kali login
  const login = (name, role) => {
    const newUser = { name, role };
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  // 🔹 Logout hapus dari localStorage
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // 🔹 Jangan render apapun sampai pengecekan selesai
  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
