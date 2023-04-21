import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddRental(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { locationId } = props;
    const requestBody = { title, description, price, locationId };

    axios
      .post(`${API_URL}/api/rentals`, requestBody)
      .then((response) => {
        setTitle("");
        setDescription("");
        setPrice("");

        props.refreshLocation();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddRental">
      <h3>Add New Rental</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Rental</button>
      </form>
    </div>
  );
}

export default AddRental;
