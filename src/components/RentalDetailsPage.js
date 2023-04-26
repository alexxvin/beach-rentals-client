import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import AddPicture from "./AddRentalPicture";

const API_URL = "http://localhost:5005";

function RentalDetailsPage(props) {
  const [rental, setRental] = useState(null);
  const [rentalPic, setRentalPic] = useState(null);

  const { rentalId } = useParams();
  console.log("rentalId ---> ", rentalId);
  const locationId = props._id;
  console.log("LocationId rentals details page -->", locationId);

  console.log(rental);

  useEffect(() => {
    axios.get(`${API_URL}/api/rentals/${rentalId}`).then((response) => {
      setRental(response.data);
      console.log("Location id ===>", response.location);
      console.log(response.data);
    });
  }, [rentalId]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("rentalPic", e.target.files[0]);

    axios
      .post(`${API_URL}/api/rentalsImage/${rentalId}`, uploadData)
      .then((response) => {
        setRentalPic(uploadData);
      })
      .catch((error) => console.log(error));
  };
  const getRental = () => {
    axios
      .get(`${API_URL}/api/rentals/${rentalId}`)
      .then((response) => {
        const oneRental = response.data;
        console.log(oneRental);
        setRental(oneRental);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getRental();
  }, []);
  console.log(rental?.location);

  return (
    <div className="RentalDetailsPage">
      <h1>Rental Details Page</h1>
      {!rental && <h3>Rental not found!</h3>}
      {rental && (
        <>
          <h2>{rental.title}</h2>

          <h3>Description:</h3>
          <p>{rental.description}</p>
          <h3>Price:</h3>
          <h3>{rental.price}</h3>
          {/* <img src={rental.rentalPic} alt="rentalimage" /> */}
          {rental.rentalPic && (
            <img
              id="rentalDetailsImage"
              src={rental.rentalPic}
              alt="rental pic"
            />
          )}
          {!rental.rentalPic && (
            <div>
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => handleFileUpload(e)} />
                <button>Add rental picture</button>
              </form>
            </div>
          )}
          {/* <AddPicture /> */}
        </>
      )}

      <Link to={`/rentals/edit/${rentalId}`}>
        <button>Edit Rental</button>
      </Link>
      <Link to={`/location/${rental?.location}`}>
        <button type="Submit"> Back to Location Details</button>
      </Link>
    </div>
  );
}

export default RentalDetailsPage;
