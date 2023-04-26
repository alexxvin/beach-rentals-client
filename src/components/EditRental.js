import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function EditRental(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rentalPic, setRentalPic] = useState("");

  const { rentalId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/api/rentals/${rentalId}`)
      .then((response) => {
        const oneRental = response.data;
        setTitle(oneRental.title);
        setDescription(oneRental.description);
        setPrice(oneRental.price);
        setRentalPic(oneRental.rentalPic);
      })
      .catch((error) => console.log(error));
  }, [rentalId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, price };

    axios
      .put(`${API_URL}/api/rentals/${rentalId}`, requestBody)
      .then((response) => {
        navigate(`/rentals/${rentalId}`);
      });
  };

  const deleteRental = () => {
    axios
      .delete(`${API_URL}/api/rentals/${rentalId}`)
      .then(() => {
        navigate("/location");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="EditRental">
      <h1>Edit Rental Page</h1>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          placeholder="Rental description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Rental price"
          onChange={(e) => setPrice(e.target.value)}
        />
        {/* <img src={rentalPic} id="rentalDetailsImage" alt="rentalimage" /> */}
        <button type="submit">Update Rental</button>
      </form>
      <button onClick={deleteRental}>Delete Rental</button>
    </div>
  );
}

export default EditRental;
