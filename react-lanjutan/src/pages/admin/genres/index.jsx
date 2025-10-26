import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGenres } from "../../../_services/genres";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const data = await getGenres();
      setGenres(data);
    } catch (error) {
      console.error("Gagal memuat data genre:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Manajemen Genre</h1>
            <p className="text-gray-500 text-sm">Kelola daftar genre buku di sini</p>
          </div>
          <Link
            to="/admin/genres/create"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-medium shadow hover:bg-indigo-700 transition-all duration-200"
          >
            Tambah Genre
          </Link>
        </div>

        <div className="overflow-hidden border border-gray-200 rounded-xl">
          <table className="min-w-full border-collapse bg-white text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700 w-16 text-center">No</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-700">Nama Genre</th>
              </tr>
            </thead>
            <tbody>
              {genres.length > 0 ? (
                genres.map((genre, index) => (
                  <tr
                    key={genre.id}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-indigo-50 transition-all`}
                  >
                    <td className="px-6 py-3 text-center text-gray-700 font-medium">
                      {index + 1}
                    </td>
                    <td className="px-6 py-3 text-gray-800">{genre.name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="px-6 py-6 text-center text-gray-500 italic"
                  >
                    Tidak ada data genre untuk saat ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
