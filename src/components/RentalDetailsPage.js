import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import RentalCard from "./RentalCard";
import ReactPlayer from "react-player";
import { upload } from "@testing-library/user-event/dist/upload";

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const handleImageChange = (e) => {
  //   const file = event.target.files[0];
  //   const uploadData = new FormData();
  //   upload.append("", file);
  // };
  //   const getRental = () => {
  //     axios
  //       .get(`${API_URL}/api/rentals/${rentalId}`)
  //       .then((response) => {
  //         const oneRental = response.data;
  //         console.log(oneRental);
  //         setRentals(oneRental);
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   useEffect(() => {
  //     getRental();
  //   }, []);
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
            <img id="rentalPic" src={rental.rentalPic} alt="rental pic" />
          )}
          {!rental.rentalPic && <button>Add rental picture</button>}
        </>
      )}

      {/* //   <h3>Description:</h3>
    //   <p>{rental.description}</p>
    //   <h2>Price:</h2>
    //   <h3>{rental.price}</h3>
    //   <img src={rental.rentalPic} alt="rentalpicture" /> */}

      <Link to={`/rentals/edit/${rentalId}`}>
        <button>Edit Rental</button>
      </Link>
      <Link to={`/location/${rental?.location}`}>
        <button>Back to Location Details</button>
      </Link>

      {/* <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing /> */}
    </div>
  );
}

export default RentalDetailsPage;
