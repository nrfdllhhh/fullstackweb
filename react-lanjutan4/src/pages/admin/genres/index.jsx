import React, { useEffect, useState } from "react";
import { getGenres, deleteGenre } from "../../../_services/genres";
import { useNavigate } from "react-router-dom";

export default function GenreList() {
  const [genres, setGenres] = useState([]);
  const navigate = useNavigate();

  const fetchGenres = async () => {
    try {
      const data = await getGenres();
      setGenres(data);
    } catch (error) {
      console.error("Gagal mengambil data genre:", error);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus genre ini?")) {
      try {
        await deleteGenre(id);
        alert("Genre berhasil dihapus!");
        fetchGenres(); // refresh daftar genre
      } catch (error) {
        console.error("Gagal menghapus genre:", error);
      }
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Daftar Genre</h1>
          <button
            onClick={() => navigate("/admin/genres/create")}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            + Tambah Genre
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-100 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Nama Genre</th>
              <th className="p-3 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((g) => (
              <tr key={g.id} className="hover:bg-gray-50">
                <td className="p-3 border">{g.id}</td>
                <td className="p-3 border">{g.name}</td>
                <td className="p-3 border text-center">
                  <button
                    onClick={() => navigate(`/admin/genres/edit/${g.id}`)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(g.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {genres.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  Tidak ada data genre.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
