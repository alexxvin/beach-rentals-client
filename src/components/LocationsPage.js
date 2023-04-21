import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddLocation from "./AddLocation";
import LocationCard from "./LocationCard";

const API_URL = "http://localhost:5005";

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
      <h3>Locations Page</h3>
      <AddLocation refreshLocations={getAllLocations} />

      {
        locations.map((location, id) => {
          console.log(location);
          return <LocationCard key={id} {...location} />;
        })
        // return (

        //   <div className="LocationCard card" key={location._id}>
        //     <Link to={`/location/${location._id}`}>
        //       <h3>{location.name}</h3>
        //     </Link>
        //   </div>
        // );
      }
    </div>
  );
}

export default LocationsPage;
