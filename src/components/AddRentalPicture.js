import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddPicture(props) {
  const [rentalPic, setRentalPic] = useState("");

  const handleFileUpload = (e) => {
    setRentalPic(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { rentalId } = props;
    const uploadData = new FormData();
    uploadData.append("rentalPic", rentalPic);

    axios.post(`{API_URL}/api/rentalsImage/${rentalId}`).then((response) => {
      setRentalPic("");
    });
  };
  return (
    <div className="PictureUpload">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => handleFileUpload(e)} />
        <button>Add Image</button>
      </form>
    </div>
  );
}

export default AddPicture;
