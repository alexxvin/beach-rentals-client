import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LocationsPage from "./components/LocationsPage";
import LocationDetailsPage from "./components/LocationDetailsPage";
import EditLocation from "./components/EditLocation";
import RentalDetailsPage from "./components/RentalDetailsPage";
import RentalCard from "./components/RentalCard";
import EditRental from "./components/EditRental";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationsPage />} />
        <Route path="/location/:locationId" element={<LocationDetailsPage />} />
        <Route path="/location/edit/:locationId" element={<EditLocation />} />
        <Route path="/rentals/:rentalId" element={<RentalDetailsPage />} />
        <Route path="/rentals/edit/:rentalId" element={<EditRental />} />
      </Routes>
    </div>
  );
}

export default App;
