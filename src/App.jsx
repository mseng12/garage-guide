import { useState } from "react";
import vehicles from "./data/vehicles";
import VehicleCard from "./components/VehicleCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
 
const filteredVehicles = vehicles.filter((vehicle) => {
  const searchText = searchTerm.toLowerCase();

  const matchesSearch =
    vehicle.make.toLowerCase().includes(searchText) ||
    vehicle.model.toLowerCase().includes(searchText);

  const matchesType =
    selectedType === "All" || vehicle.type === selectedType;

  return matchesSearch && matchesType;
});

  return (
    <main>
      <h1>Garage Guide</h1>
      
      <label htmlFor="vehicleSearch">Search vehicles:</label>

<input
  id="vehicleSearch"
  type="text"
  placeholder="Search by make or model"
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>
    <div>
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

      {filteredVehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
    </main>
  );
}

export default App;