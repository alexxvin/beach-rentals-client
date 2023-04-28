import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import LocationsPage from "./components/LocationsPage";
import LocationDetailsPage from "./components/LocationDetailsPage";
import EditLocation from "./components/EditLocation";
import RentalDetailsPage from "./components/RentalDetailsPage";
import EditRental from "./components/EditRental";
import FAQ from "./components/FAQ";
import HowItWorks from "./components/HowItWorks";

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
        <Route path="/faq" element={<FAQ />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </div>
  );
}

export default App;
