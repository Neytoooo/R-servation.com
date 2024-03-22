import React from 'react';
import './TopDestination.css'; // N'oubliez pas de créer un fichier CSS pour le style

const destinations = [
  { name: 'Baléares', price: '290€' },
  { name: 'Tunisie', price: '226€' },
  { name: 'Crète', price: '294€' },
  // Ajoutez d'autres destinations ici
];

function TopDestinations() {
  return (
    <div className="top-destinations">
      <h2>Top destinations</h2>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index} className="destination-item">
            <span className="destination-name">{destination.name}</span>
            <span className="destination-price">{destination.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopDestinations;
