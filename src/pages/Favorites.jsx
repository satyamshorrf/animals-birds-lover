import React from 'react';

function Favorites() {
  // This would typically be managed with state management like Redux or Context
  const mockFavorites = [
    { id: 1, name: 'Tiger', type: 'animal', category: 'Wild' },
    { id: 2, name: 'Owl', type: 'bird', category: 'Nocturnal' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Favorites</h1>

      {mockFavorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFavorites.map(favorite => (
            <div key={favorite.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-2">{favorite.name}</h2>
              <p className="text-gray-600">Type: {favorite.type}</p>
              <p className="text-gray-600">Category: {favorite.category}</p>
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600">
          <p>No favorites added yet.</p>
          <p className="mt-2">Start tracking animals and birds to add them to your favorites!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites; 