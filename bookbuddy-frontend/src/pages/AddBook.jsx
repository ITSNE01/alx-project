import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    coverImage: "",
    genres: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        genres: formData.genres.split(",").map((g) => g.trim()),
      };
      await axios.post("http://localhost:5000/api/books", payload);
      alert("Book added!");
      setFormData({ title: "", author: "", description: "", coverImage: "", genres: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding book");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">➕ Add New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Book Title"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          className="w-full p-2 border rounded"
        />
        <input
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          placeholder="Cover Image URL"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border rounded"
        />
        <input
          name="genres"
          value={formData.genres}
          onChange={handleChange}
          placeholder="Genres (comma separated)"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
