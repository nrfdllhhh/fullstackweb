import React, { useEffect, useState } from "react";
import { getAuthors, deleteAuthor } from "../../../_services/authors";
import { useNavigate } from "react-router-dom";

export default function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  const fetchAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch (error) {
      console.error("Gagal mengambil data author:", error);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus author ini?")) {
      try {
        await deleteAuthor(id);
        alert("Author berhasil dihapus!");
        fetchAuthors(); // refresh daftar
      } catch (error) {
        console.error("Gagal menghapus author:", error);
      }
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Daftar Author</h1>
          <button
            onClick={() => navigate("/admin/authors/create")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            + Tambah Author
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Nama Author</th>
              <th className="p-3 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50">
                <td className="p-3 border">{a.id}</td>
                <td className="p-3 border">{a.name}</td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => navigate(`/admin/authors/edit/${a.id}`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {authors.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  Tidak ada data author.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
