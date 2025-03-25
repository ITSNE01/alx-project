import axios from "axios";

const API_BASE = "http://localhost:5000/api";

export const getAllBooks = async () => {
  const res = await axios.get(`${API_BASE}/books`);
  return res.data;
};
