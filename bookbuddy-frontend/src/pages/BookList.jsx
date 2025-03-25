import React, { useEffect, useState } from "react";
import { getAllBooks } from "../api/bookAPI";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading books...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">📚 All Books</h2>
      {books.length === 0 ? (
        <p className="text-center text-gray-500">No books available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-md rounded p-4 hover:shadow-lg transition"
            >
              <img
                src={book.coverImage || "https://via.placeholder.com/150"}
                alt={book.title}
                className="w-full h-64 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
