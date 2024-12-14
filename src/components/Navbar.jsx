import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Home,
  Cat,
  Bird,
  Heart
} from 'lucide-react';

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl">🦁</span>
            <span className="text-xl font-bold">Wildlife Tracker</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link to="/animals" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Cat size={20} />
              <span>Animals</span>
            </Link>
            <Link to="/birds" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Bird size={20} />
              <span>Birds</span>
            </Link>
            <Link to="/favorites" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <Heart size={20} />
              <span>Favorites</span>
            </Link>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors flex items-center gap-2 ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {darkMode ? (
                <>
                  <Sun size={20} />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon size={20} />
                  <span>Dark</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 py-4 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="flex items-center gap-2 px-4 py-2 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home size={20} />
                <span>Home</span>
              </Link>
              <Link 
                to="/animals" 
                className="flex items-center gap-2 px-4 py-2 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Cat size={20} />
                <span>Animals</span>
              </Link>
              <Link 
                to="/birds" 
                className="flex items-center gap-2 px-4 py-2 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Bird size={20} />
                <span>Birds</span>
              </Link>
              <Link 
                to="/favorites" 
                className="flex items-center gap-2 px-4 py-2 hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={20} />
                <span>Favorites</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
