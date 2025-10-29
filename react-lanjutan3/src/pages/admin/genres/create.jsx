import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createGenre } from "../../../_services/genres";

export default function GenresCreate() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createGenre({ name });
      alert("Genre berhasil ditambahkan!");
      navigate("/admin/genres");
    } catch (error) {
      console.error("Gagal menambahkan genre:", error);
      alert("Terjadi kesalahan saat menambah genre.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-gray-100">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Tambah Genre</h1>
          <p className="text-gray-500 text-sm">Masukkan data genre baru untuk koleksi buku</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Nama Genre
            </label>
            <input
              type="text"
              placeholder="Masukkan nama genre..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              required
            />
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/admin/genres"
              className="text-gray-600 font-medium hover:text-indigo-600 transition"
            >
              Kembali ke Daftar
            </Link>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow transition-all"
            >
              Simpan Genre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
