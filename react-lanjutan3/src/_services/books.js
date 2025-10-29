import API from "../_api";

export const getBooks = async () => {
  const { data } = await API.get("/books");
  return data.data;
}

export const createBook = async (data) => {
  try {
    const response = await API.post("/books", data);
    return response.data;
  } catch (error) {
    console.log("Error creating book:", error);
    throw error;
  }
}