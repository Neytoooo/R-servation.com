import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card({ query }) {
  const [locationsInfo, setLocationsInfo] = useState([]);

  useEffect(() => {
    const fetchLocationInfo = async () => {
      if (!query) {
        console.log("Query is undefined or empty.");
        return;
      }

      try {
        const options = {
          method: 'GET',
          url: 'https://skyscanner80.p.rapidapi.com/api/v1/hotels/auto-complete',
          params: { query: query, market: 'US', locale: 'en-US' },
          headers: {
            'X-RapidAPI-Key': 'c6ebe30c30msh51aa7c73a94a8ddp11fc2cjsnc28753dff27a',
            'X-RapidAPI-Host': 'skyscanner80.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        if (response.data.data && response.data.data.length > 0) {
          const locations = response.data.data.map((location) => ({
            name: location.entityName,
            imageUrl: location.imageUrl || '/path/to/default/image.jpg',
            price: location.price || 'N/A', // Supposons que l'API renvoie un champ 'price', ajustez selon la structure réelle
          }));
          setLocationsInfo(locations);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des informations', error);
      }
    };

    fetchLocationInfo();
  }, [query]);

  return (
    <div>
      {locationsInfo.map((location, index) => (
        <div key={index} className="card">
          <img src={location.imageUrl} alt={location.name} />
          <div>{location.name}</div>
          {/* Affichage du prix ici */}
          <p>Price: {location.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
