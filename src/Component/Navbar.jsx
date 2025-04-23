import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Mobile icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-black p-4 shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-red-600">
          <h1 className="text-xl font-bold">Bhagavad Gita</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/gita" className="hover:underline">Gita</Link>
          <Link to="/chapters" className="hover:underline">Chapters</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/signup" className="hover:underline">Signup</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/gita" className="hover:underline" onClick={() => setIsOpen(false)}>Gita</Link>
          <Link to="/chapters" className="hover:underline" onClick={() => setIsOpen(false)}>Chapters</Link>
          <Link to="/login" className="hover:underline" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/signup" className="hover:underline" onClick={() => setIsOpen(false)}>Signup</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
