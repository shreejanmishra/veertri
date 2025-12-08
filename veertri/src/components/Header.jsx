import { Link } from "react-router-dom";
import { Search, Bell, User, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add scroll listener
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo & Navigation */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-[#FAD502] text-2xl md:text-3xl font-bold"
          >
            VEERTRI
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white hover:text-gray-300 transition">
              Home
            </Link>
            <Link
              to="/subjects"
              className="text-white hover:text-gray-300 transition"
            >
              Education
            </Link>
            <Link
              to="/my-list"
              className="text-white hover:text-gray-300 transition"
            >
              My Corner
            </Link>
            <Link
              to="/scholarship"
              className="text-white hover:text-gray-300 transition"
            >
              Scholarship
            </Link>
          </nav>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <input
                type="text"
                placeholder="Search..."
                className="bg-black/70 border border-white text-white px-4 py-2 rounded-sm w-64 focus:outline-none focus:border-white"
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-white hover:text-gray-300 transition"
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Notifications */}
          <button className="text-white hover:text-gray-300 transition">
            <Bell size={20} />
          </button>

          {/* Profile */}
          <Link
            to="/profile"
            className="text-white hover:text-gray-300 transition"
          >
            <User size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-gray-300 transition z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <Link
            to="/"
            className="text-white text-2xl hover:text-[#FAD502] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/subjects"
            className="text-white text-2xl hover:text-[#FAD502] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Subjects
          </Link>
          <Link
            to="/my-list"
            className="text-white text-2xl hover:text-[#FAD502] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My List
          </Link>
          <Link
            to="/scholarship"
            className="text-white text-2xl hover:text-[#FAD502] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Scholarship
          </Link>
          <Link
            to="/profile"
            className="text-white text-2xl hover:text-[#FAD502] transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Profile
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
