import { Link } from "react-router-dom";

function LocationCard({ street, city, state, zip, name, _id }) {
  return (
    <div className="LocationCard card">
      <Link to={`/location/${_id}`}>
        <h3>{name}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{city}</p>
    </div>
  );
}

export default LocationCard;
