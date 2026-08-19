import vehicles from "./data/vehicles";
import VehicleCard from "./components/VehicleCard";

function App() {
  return (
    <main>
      <h1>Garage Guide</h1>
      
      {vehicles.map((vehicle) => (
        <VehicleCard
        key= {vehicle.id}
        vehicle={vehicle}
        />
      ))}
    </main>
  );
}

export default App;