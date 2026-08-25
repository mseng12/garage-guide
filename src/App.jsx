import { useState } from "react";
import vehicles from "./data/vehicles";
import VehicleCard from "./components/VehicleCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
 
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

{selectedVehicle &&(
  <section>
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

{filteredVehicles.length > 0 ? (
  filteredVehicles.map((vehicle) => (
    <VehicleCard
      key={vehicle.id}
      vehicle={vehicle}
      onView={() => setSelectedVehicle(vehicle)}
    />
  ))
) : (
  <p>No vehicles found.</p>
)}
    </main>
  );
}

export default App;