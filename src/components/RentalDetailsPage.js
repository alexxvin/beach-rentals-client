import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// const API_URL = "https://beach-rentals-server.onrender.com";

function RentalDetailsPage(props) {
  const [rental, setRental] = useState(null);
  const [rentalPic, setRentalPic] = useState(null);

  const { rentalId } = useParams();
  console.log("rentalId ---> ", rentalId);
  const locationId = props._id;
  console.log("LocationId rentals details page -->", locationId);

  console.log(rental);

  useEffect(() => {
    axios
      .get(`${process.env.API_URL}/api/rentals/${rentalId}`)
      .then((response) => {
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
      .post(`${process.env.API_URL}/api/rentalsImage/${rentalId}`, uploadData)
      .then((response) => {
        setRentalPic(uploadData);
      })
      .catch((error) => console.log(error));
  };
  const getRental = () => {
    axios
      .get(`${process.env.API_URL}/api/rentals/${rentalId}`)
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
          <h3>Price: ${rental.price}</h3>
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
                <div>
                  <label> Add Rental Picture</label>
                  <input type="file" onChange={(e) => handleFileUpload(e)} />
                </div>
              </form>
            </div>
          )}
        </>
      )}
      <div>
        <Link to={`/rentals/edit/${rentalId}`}>
          <button>Edit Rental</button>
        </Link>
      </div>
      <div>
        <Link to={`/location/${rental?.location}`}>
          <button type="Submit"> Back to Location Details</button>
        </Link>
      </div>
    </div>
  );
}

export default RentalDetailsPage;
