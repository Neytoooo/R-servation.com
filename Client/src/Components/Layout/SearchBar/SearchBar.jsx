import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css'; // Assurez-vous que le chemin d'accès est correct

function SearchBar() {
  const [fromId, setFromId] = useState('');
  const [toId, setToId] = useState('');
  const [departDate, setDepartDate] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://skyscanner80.p.rapidapi.com/api/v1/flights/search-one-way', {
        params: {
          fromId: fromId,
          toId: toId,
          departDate: departDate
        },
        headers: {
          'X-RapidAPI-Key': 'c6ebe30c30msh51aa7c73a94a8ddp11fc2cjsnc28753dff27a',
          'X-RapidAPI-Host': 'skyscanner80.p.rapidapi.com'
        }
      });

      console.log(response.data);
      // Traiter les données de réponse ici
    } catch (error) {
      console.error('Erreur lors de la recherche de vols', error);
    }
  };

  return (
    <div className="search-bar">
      <button className="category-button">Voyage</button>
      <input
        type="text"
        placeholder="ID de départ (ville, aéroport...)"
        className="search-input"
        value={fromId}
        onChange={(e) => setFromId(e.target.value)}
      />
      <input
        type="text"
        placeholder="ID d'arrivée (ville, aéroport...)"
        className="search-input"
        value={toId}
        onChange={(e) => setToId(e.target.value)}
      />
      <input
        type="date"
        className="search-input"
        value={departDate}
        onChange={(e) => setDepartDate(e.target.value)}
      />
      {/* Assurez-vous que les autres éléments du formulaire correspondent à votre besoin */}
      <button className="search-button" onClick={handleSearch}>Rechercher</button>
    </div>
  );
}

export default SearchBar;
