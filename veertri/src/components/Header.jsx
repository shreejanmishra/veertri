import { Link } from "react-router-dom";
import { Search, Bell, User, Menu, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? "dark:bg-black/95 bg-white/95 shadow-md"
          : "bg-gradient-to-b from-black/80 to-transparent dark:from-black/80"
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
            <Link
              to="/"
              className={`transition font-medium ${
                isScrolled ? "dark:text-white text-gray-900" : "text-white"
              } hover:text-[#FAD502]`}
            >
              Home
            </Link>
            <Link
              to="/subjects"
              className={`transition font-medium ${
                isScrolled ? "dark:text-white text-gray-900" : "text-white"
              } hover:text-[#FAD502]`}
            >
              Education
            </Link>
            <Link
              to="/my-list"
              className={`transition font-medium ${
                isScrolled ? "dark:text-white text-gray-900" : "text-white"
              } hover:text-[#FAD502]`}
            >
              My Corner
            </Link>
            <Link
              to="/scholarship"
              className={`transition font-medium ${
                isScrolled ? "dark:text-white text-gray-900" : "text-white"
              } hover:text-[#FAD502]`}
            >
              Scholarship
            </Link>
          </nav>
        </div>

        {/* Right side icons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`transition ${
              isScrolled ? "dark:text-white text-gray-900" : "text-white"
            } hover:text-[#FAD502]`}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Search */}
          <div className="relative">
            {showSearch ? (
              <input
                type="text"
                placeholder="Search..."
                className={`dark:bg-black/70 bg-white/70 border ${
                  isScrolled
                    ? "dark:border-white border-gray-900 dark:text-white text-gray-900"
                    : "border-white text-white"
                } px-4 py-2 rounded-sm w-64 focus:outline-none focus:border-[#FAD502]`}
                autoFocus
                onBlur={() => setShowSearch(false)}
              />
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className={`transition ${
                  isScrolled ? "dark:text-white text-gray-900" : "text-white"
                } hover:text-[#FAD502]`}
              >
                <Search size={20} />
              </button>
            )}
          </div>

          {/* Notifications */}
          <button
            className={`transition ${
              isScrolled ? "dark:text-white text-gray-900" : "text-white"
            } hover:text-[#FAD502]`}
          >
            <Bell size={20} />
          </button>

          {/* Profile */}
          <Link
            to="/profile"
            className="dark:text-white text-gray-900 hover:text-gray-500 dark:hover:text-gray-300 transition"
          >
            <User size={20} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden dark:text-white text-gray-900 hover:text-gray-500 dark:hover:text-gray-300 transition z-50"
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
