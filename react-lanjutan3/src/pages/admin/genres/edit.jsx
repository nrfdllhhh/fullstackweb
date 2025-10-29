import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGenres, updateGenre } from "../../../_services/genres";

export default function EditGenre() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [genre, setGenre] = useState({ name: "" });

  const fetchGenreData = useCallback(async () => {
    try {
      const allGenres = await getGenres();
      const selected = allGenres.find((g) => g.id === parseInt(id));
      if (selected) setGenre({ name: selected.name });
    } catch (error) {
      console.error("Gagal mengambil data genre:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchGenreData();
  }, [fetchGenreData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateGenre(id, genre);
      alert("Genre berhasil diperbarui!");
      navigate("/admin/genres");
    } catch (error) {
      console.error("Gagal memperbarui genre:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Genre
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nama Genre
            </label>
            <input
              type="text"
              value={genre.name}
              onChange={(e) => setGenre({ ...genre, name: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate("/admin/genres")}
              className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
