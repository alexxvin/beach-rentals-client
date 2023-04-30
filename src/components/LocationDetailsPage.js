import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddRental from "./AddRental";

const API_URL = "https://beach-rentals-server.onrender.com";

function LocationDetailsPage() {
  const [location, setLocation] = useState(null);
  const { locationId } = useParams();
  const [rentalPic, setRentalPic] = useState("");

  const getLocation = () => {
    axios
      .get(`${API_URL}/api/location/${locationId}`)
      .then((response) => {
        const oneLocation = response.data;
        setLocation(oneLocation);
        console.log("Location details page ===>>", oneLocation);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="LocationDetails">
      {location && (
        <>
          <h1>{location.name}</h1>
          <p>{location.city}</p>
          <p>{location.state}</p>
        </>
      )}

      <AddRental refreshLocation={getLocation} locationId={locationId} />

      {location &&
        location.rentals.map((rental, id) => (
          <div key={id} className="RentalCard card">
            <h2>{rental.title}</h2>
            <h3>Description:</h3>
            <p>{rental.description}</p>
            <h3>Price: ${rental.price}</h3>
            {rental.rentalPic && (
              <img id="rentalPic" src={rental.rentalPic} alt="rental pic" />
            )}

            <Link to={`/rentals/${rental._id}`}>
              <button>More info</button>
            </Link>
          </div>
        ))}

      <Link to="/location">
        <button id="back-to-locations">Back to Locations</button>
      </Link>
      <Link to={`/location/edit/${locationId}`}>
        <button id="edit-location">Edit Location</button>
      </Link>
    </div>
  );
}

export default LocationDetailsPage;
