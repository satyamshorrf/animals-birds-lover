import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-12 pb-4 mt-auto">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-blue-400 text-xl font-semibold mb-4">About Wildlife Tracker</h3>
            <p className="text-gray-300">
              Track and document your wildlife encounters with our easy-to-use platform.
            </p>
          </div>
          <div>
            <h3 className="text-blue-400 text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/animals" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Animals
                </Link>
              </li>
              <li>
                <Link to="/birds" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Birds
                </Link>
              </li>
              <li>
                <Link to="/favorites" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-400 text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@wildlifetracker.com</p>
            <p className="text-gray-300">Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="text-center mt-8 pt-4 border-t border-slate-700">
          <p className="text-gray-400">&copy; 2024 Wildlife Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 