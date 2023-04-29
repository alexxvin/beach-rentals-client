import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

// const API_URL = "https://beach-rentals-server.onrender.com";

function EditLocation(props) {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const { locationId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.API_URL}/api/location/${locationId}`)
      .then((response) => {
        const oneLocation = response.data;
        setStreet(oneLocation.street);
        setCity(oneLocation.city);
        setState(oneLocation.state);
        setZip(oneLocation.zip);
        setName(oneLocation.name);
      })
      .catch((error) => console.log(error));
  }, [locationId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { street, city, state, zip, name };

    axios
      .put(`${process.env.API_URL}/api/location/${locationId}`, requestBody)
      .then((response) => {
        navigate(`/location/${locationId}`);
      });
  };

  const deleteLocation = () => {
    axios
      .delete(`${process.env.API_URL}/api/location/${locationId}`)
      .then(() => {
        navigate("/location");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="EditLocation">
      <h3>Edit Location</h3>

      <form onSubmit={handleFormSubmit}>
        <label className="label">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Location name"
          onChange={(e) => setName(e.target.value)}
        />

        <label className="label">Street:</label>
        <input
          type="text"
          name="street"
          value={street}
          placeholder="Street"
          onChange={(e) => setStreet(e.target.value)}
        />

        <label className="label">City:</label>
        <input
          type="text"
          name="city"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />

        <label className="label">State:</label>
        <input
          type="text"
          name="state"
          value={state}
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
        />

        <label className="label">Zip code:</label>
        <input
          type="number"
          name="zip"
          value={zip}
          placeholder="Zip code"
          onChange={(e) => setZip(e.target.value)}
        />
        <div>
          <button type="submit">Update Location</button>
        </div>
      </form>
      <button onClick={deleteLocation}>Delete Location</button>
    </div>
  );
}

export default EditLocation;
