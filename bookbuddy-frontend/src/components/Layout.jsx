import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">📚 BookBuddy</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <Outlet /> {/* This is where different pages will be rendered */}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} BookBuddy. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
