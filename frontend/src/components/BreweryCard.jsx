import { Link } from "react-router-dom";

export default function BreweryCard({ brewery, id }) {
  const brewery_Id = id;
  return (
    <Link className="brewery-card" to={`/brewer/${brewery_Id}`}>
      <h2>{brewery.name}</h2>
      <p>
        {brewery.street}, {brewery.city}, {brewery.state}
      </p>
      <p>Phone: {brewery.phone}</p>
      <p>
        Website:{" "}
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          {brewery.website_url}
        </a>
      </p>
    </Link>
  );
}
