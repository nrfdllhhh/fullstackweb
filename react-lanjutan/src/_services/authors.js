import API from "../_api";

export const getAuthors = async () => {
  const { data } = await API.get("/authors");
  return data.data;
};

export const createAuthor = async (data) => {
  try {
    const response = await API.post("/authors", data);
    return response.data;
  } catch (error) {
    console.log("Error creating author:", error);
    throw error;
  }
};
