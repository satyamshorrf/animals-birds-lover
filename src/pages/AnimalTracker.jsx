import React, { useState } from 'react';
import { animals } from '../data/categories';

function AnimalTracker() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = ['all', 'Domestic', 'Wild', 'Other'];

  const filteredAnimals = selectedCategory === 'all' 
    ? animals 
    : animals.filter(animal => animal.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Animal Tracker</h1>
      
      <div className="mb-8 flex justify-center gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAnimals.map(animal => (
          <div key={animal.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{animal.name}</h2>
            <p className="text-gray-600">Category: {animal.category}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Track Sighting
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimalTracker; 