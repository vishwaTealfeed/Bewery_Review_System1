import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function DetailCard() {
  const { id } = useParams();
  console.log("id", id);

  const [selectedBreweries, setSelectedBreweries] = useState([]);

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`).then((response) =>
      response.json().then((data) => setSelectedBreweries(data))
    );
  }, [id]);

  console.log("selectedBreweries", selectedBreweries);

  return (
    <div className="brewery-details">
      <h2> {selectedBreweries.name}</h2>
      <p>
        <strong>Type:</strong> {selectedBreweries.brewery_type}
      </p>
      <p>
        <strong>Address:</strong> {selectedBreweries.street},{" "}
        {selectedBreweries.city}, {selectedBreweries.state}
      </p>
      <p>
        <strong>Phone:</strong> {selectedBreweries.phone}
      </p>
      {selectedBreweries.name}
    </div>
  );
}
