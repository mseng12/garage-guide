import vehicles from "./data/vehicles";

function App() {
  return (
    <main>
      <h1>Garage Guide</h1>
      <p>{vehicles[0].year} {vehicles[0].make} {vehicles[0].model}</p>
    </main>
  );
}

export default App;