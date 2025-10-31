import API from "../_api";

export const getGenres = async () => {
  const { data } = await API.get("/genres");
  return data.data;
};

export const createGenre = async (data) => {
  try {
    const response = await API.post("/genres", data);
    return response.data;
  } catch (error) {
    console.log("Error creating genre:", error);
    throw error;
  }
};

// 🆕 Tambahkan fungsi UPDATE dan DELETE
export const updateGenre = async (id, data) => {
  try {
    const response = await API.put(`/genres/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("Error updating genre:", error);
    throw error;
  }
};

export const deleteGenre = async (id) => {
  try {
    const response = await API.delete(`/genres/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error deleting genre:", error);
    throw error;
  }
};
