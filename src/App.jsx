import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import vehicles from "./data/vehicles";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedYear, setSelectedYear] = useState("All");

  // Filter vehicles by search text, vehicle type, and selected year
  const filteredVehicles = vehicles.filter((vehicle) => { 
    const searchText = searchTerm.toLowerCase();

    const matchesSearch =
      vehicle.make.toLowerCase().includes(searchText) ||
      vehicle.model.toLowerCase().includes(searchText);

    const matchesType =
      selectedType === "All" || vehicle.type === selectedType;

    const matchesYear =
      selectedYear === "All" ||
      vehicle.year === Number(selectedYear);

    return matchesSearch && matchesType && matchesYear;
  });

  // Add a vehicle to favorites only if it is not already saved 
  function addToFavorites(vehicle) {
    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === vehicle.id
    );

    if (!alreadyFavorite) {
      setFavorites([...favorites, vehicle]);
    }
  }

  // Remove a vehicle from favorites using its id
  function removeFromFavorites(vehicleId) {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.id !== vehicleId
    );

    setFavorites(updatedFavorites);
  }

  return (
    <main>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              filteredVehicles={filteredVehicles}
              selectedVehicle={selectedVehicle}
              setSelectedVehicle={setSelectedVehicle}
              addToFavorites={addToFavorites}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              setSelectedVehicle={setSelectedVehicle}
              removeFromFavorites={removeFromFavorites}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>

      <Footer />
    
    </main>
  );
}

export default App;