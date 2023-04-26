import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import AddPicture from "./AddRentalPicture";

const API_URL = "http://localhost:5005";

function AddRentalPicture() {
  const inputFile = useRef(null);
  const [rentalPic, setRentalPic] = useState(null);

  const onButtonClick = () => {
    inputFile.current.click();
  };

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

  return (
    <div>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <button onClick={onButtonClick}>Add Rental Picture</button>
    </div>
  );
}

export default AddPicture;
