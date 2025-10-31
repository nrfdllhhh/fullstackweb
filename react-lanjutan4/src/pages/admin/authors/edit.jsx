import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAuthors, updateAuthor } from "../../../_services/authors";

export default function EditAuthor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState({ name: "" });

  const fetchAuthorData = useCallback(async () => {
    try {
      const allAuthors = await getAuthors();
      const selected = allAuthors.find((a) => a.id === parseInt(id));
      if (selected) setAuthor({ name: selected.name });
    } catch (error) {
      console.error("Gagal mengambil data author:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchAuthorData();
  }, [fetchAuthorData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAuthor(id, author);
      alert("Author berhasil diperbarui!");
      navigate("/admin/authors");
    } catch (error) {
      console.error("Gagal memperbarui author:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Author
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nama Author
            </label>
            <input
              type="text"
              value={author.name}
              onChange={(e) => setAuthor({ ...author, name: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={() => navigate("/admin/authors")}
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
