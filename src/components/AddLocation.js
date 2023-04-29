import { useState } from "react";
import axios from "axios";

const API_URL = `${process.env.API_URL}`;

function AddLocation(props) {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = { street, city, state, zip, name };
    axios
      .post(`${API_URL}/api/location`, requestBody)
      .then((response) => {
        setName("");
        setCity("");
        setCity("");
        setState("");
        setZip("");
        props.refreshLocations();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddLocation">
      <h3>Add Location</h3>

      <form onSubmit={handleSubmit}>
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
        <div id="create-location-button">
          <button>Create location</button>
        </div>
      </form>
    </div>
  );
}

export default AddLocation;
