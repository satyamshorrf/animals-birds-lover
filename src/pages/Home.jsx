import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Home() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <header className="relative py-20 px-8 text-center text-white">
        <div
          className="absolute inset-0 bg-black/50 -z-10"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Wildlife Tracker</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Document, track, and share your wildlife encounters
        </p>
      </header>

      {/* Features Section */}
      <section className={`py-16 px-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <h2 className="text-3xl font-bold text-center mb-12">What You Can Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className={`p-8 rounded-lg shadow-md text-center ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          }`}>
            <span className="text-4xl mb-4 block">📝</span>
            <h3 className="text-xl font-semibold mb-2">Track Sightings</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Log your wildlife encounters with detailed notes
            </p>
          </div>
          <div className={`p-8 rounded-lg shadow-md text-center ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          }`}>
            <span className="text-4xl mb-4 block">📍</span>
            <h3 className="text-xl font-semibold mb-2">Location Mapping</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Mark exact locations of your sightings
            </p>
          </div>
          <div className={`p-8 rounded-lg shadow-md text-center ${
            darkMode ? 'bg-gray-700' : 'bg-white'
          }`}>
            <span className="text-4xl mb-4 block">📸</span>
            <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Build your collection of wildlife photos
            </p>
          </div>
        </div>
      </section>

      {/* Start Tracking Section */}
      <section className={`py-16 px-8 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Start Tracking</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/animals"
            className={`p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300 ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">Track Animals</h2>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Log and track your favorite animals
            </p>
          </Link>
          <Link
            to="/birds"
            className={`p-8 rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300 ${
              darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">Track Birds</h2>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
              Record bird sightings and observations
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
