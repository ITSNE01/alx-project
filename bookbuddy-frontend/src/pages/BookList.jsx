import React from "react";

const BookList = () => {
  // Later we'll fetch this from an API
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://covers.openlibrary.org/b/id/10592366-L.jpg",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: "https://covers.openlibrary.org/b/id/8379786-L.jpg",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      cover: "https://covers.openlibrary.org/b/id/8226096-L.jpg",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition-all"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">{book.title}</h2>
            <p className="text-gray-600">by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
