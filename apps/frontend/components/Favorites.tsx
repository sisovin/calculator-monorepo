import React, { useState, useEffect } from 'react';

interface Favorite {
  id: number;
  name: string;
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  useEffect(() => {
    // Fetch favorites from local storage or API
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (favorite: Favorite) => {
    const updatedFavorites = [...favorites, favorite];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (id: number) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name}
            <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
          </li>
        ))}
      </ul>
      {/* Add UI for adding new favorites */}
    </div>
  );
};

export default Favorites;
