import { useState } from "react";
import vehicles from "./data/vehicles";
import VehicleCard from "./components/VehicleCard";

function App() { 
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [favorites, setFavorites] = useState([]);
 
const filteredVehicles = vehicles.filter((vehicle) => {
  const searchText = searchTerm.toLowerCase();

  const matchesSearch =
    vehicle.make.toLowerCase().includes(searchText) ||
    vehicle.model.toLowerCase().includes(searchText);

  const matchesType =
    selectedType === "All" || vehicle.type === selectedType;

  return matchesSearch && matchesType;
});

function addToFavorites(vehicle) {

  const alreadyFavorite = favorites.some(
    (favorite) => favorite.id === vehicle.id
  );

  if (!alreadyFavorite) {
    setFavorites([...favorites, vehicle]);
  }
}

function removeFromFavorites(vehicleId) {
  const updatedFavorites = favorites.filter(
    (favorite) => favorite.id !== vehicleId
  );

  setFavorites(updatedFavorites);
}

  return (
    <main>
      <h1>Garage Guide</h1>
      <p className="intro-text">
        Find vehicle information, browse manuals, and save your favorite cars and motorcycles.
      </p>

      <div className= "search-section"> 
      <label htmlFor="vehicleSearch">Search vehicles:</label>

<input
  id="vehicleSearch"
  type="text"
  placeholder="Search by make or model"
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
</div>
    
    <div className="filter-buttons">
  <button onClick={() => setSelectedType("All")}>
    All
  </button>

  <button onClick={() => setSelectedType("Car")}>
    Cars
  </button>

  <button onClick={() => setSelectedType("Motorcycle")}>
    Motorcycles
  </button>
</div>

{selectedVehicle &&(
  <section className="selected-vehicle">
    <h2>Selected Vehicle</h2>

    <p>{selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}</p>
    <p>{selectedVehicle.type}</p>

    <h3>Manuals</h3>

    {selectedVehicle.ownersMaunalUrl ? (
      <a
        href={selectedVehicle.ownersManualUrl}
        target= "_blank"
        rel="noreferrrer"
        >
        Owner's Manual
      </a>
    ) : (
      <p>Owner's Manual not currently available</p>
    )}

    {selectedVehicle.serviceManualUrl ? (
  <a
    href={selectedVehicle.serviceManualUrl}
    target="_blank"
    rel="noreferrer"
  >
    Service Manual
  </a>
) : (
  <p>Service manual not currently available.</p>
)}
  </section>

)}

<section className="favorites-section">
  <h2>Favorites</h2>

  {favorites.length === 0 ? (
    <p>No favorites yet.</p>
  ) : (
    favorites.map((vehicle) => (
      <div key={vehicle.id}>
      <p>
        {vehicle.year} {vehicle.make} {vehicle.model}
      </p>

      <button onClick={() => removeFromFavorites(vehicle.id)}>
        Remove from Favorites
      </button>
      </div>
    ))
  )}
</section>

{filteredVehicles.length > 0 ? (
  <section className="vehicle-grid">
  {filteredVehicles.map((vehicle) => (
    <VehicleCard
      key={vehicle.id}
      vehicle={vehicle}
      onView={() => setSelectedVehicle(vehicle)}
      onFavorite={addToFavorites}
    />
  ))}
  </section>
) : (
  <p>No vehicles found.</p>
)}
    </main>
  );
}

export default App;