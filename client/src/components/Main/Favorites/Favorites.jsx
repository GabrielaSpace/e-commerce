import React from "react";



const Favorites = ({ favorites }) => {
  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((favorite, index) => (
        <div key={index}>
          <h3>{favorite.title}</h3>
          <img src={favorite.image} alt={favorite.title} />
          <p>{favorite.price}</p>
          <p>{favorite.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
