// src/BreweryCard.jsx
import React from 'react';


function BreweryCard({ brewery }) {
  return (
    <div className="brewery-card">
      <h2>{brewery.name}</h2>
      <p>{brewery.street}, {brewery.city}, {brewery.state}</p>
      <p>Phone: {brewery.phone}</p>
      <p>
        Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a>
      </p>
    </div>
  );
}

export default BreweryCard;
