import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import AddBook from "./pages/AddBook";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/profile" element={<Profile />} />
	<Route path="/add" element={<AddBook />} />
      </Routes>
    </Router>
  );
}
