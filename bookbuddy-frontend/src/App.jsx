import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"; // Import Navbar

function App() {
  return (
    <div>
      <Navbar />  {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
