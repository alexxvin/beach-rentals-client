import { useState, useEffect } from "react";
import axios from "axios";
import AddLocation from "./AddLocation";
import LocationCard from "./LocationCard";

const API_URL = "https://beach-rentals-server.onrender.com/";

function LocationsPage() {
  const [locations, setLocations] = useState([]);

  const getAllLocations = () => {
    axios
      .get(`${API_URL}/api/location`)
      .then((response) => setLocations(response.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <div className="LocationsPage">
      <h1>Locations Page</h1>
      <AddLocation refreshLocations={getAllLocations} />

      {locations.map((location, id) => {
        console.log(location);
        return <LocationCard key={id} {...location} />;
      })}
    </div>
  );
}

export default LocationsPage;
