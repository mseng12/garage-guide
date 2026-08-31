import VehicleCard from "../components/VehicleCard";
import coverLogo from "../assets/coverLogo.jpg";

function Home({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  selectedYear,
  setSelectedYear,
  filteredVehicles,
  selectedVehicle,
  setSelectedVehicle,
  addToFavorites,
}) {
  return (
    <>
      <p className="intro-text">
        Find vehicle information, browse manuals, and save your favorite cars and motorcycles.
      </p>

      <img
        src={coverLogo}
        alt="Garage Guide logo with a car and motorcycle inside a garage"
        className="cover-logo"
/>
      <div className="search-section">
        <label htmlFor="vehicleSearch">Search vehicles:</label>

        <input
          id="vehicleSearch"
          type="text"
          placeholder="Search by make or model"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      <select
        value={selectedYear}
        onChange={(event) => setSelectedYear(event.target.value)}
      >
        <option value="All">All Years</option>
        <option value="1996">1996</option>
        <option value="1998">1998</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2011">2011</option>
        <option value="2019">2019</option>
      </select>

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

      {selectedVehicle && (
        <section className="selected-vehicle">
          <h2>Selected Vehicle</h2>

          <p>
            {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}
          </p>

          <p>{selectedVehicle.type}</p>

          <h3>Manuals</h3>

          {selectedVehicle.ownersManualUrl ? (
            <a
              href={selectedVehicle.ownersManualUrl}
              target="_blank"
              rel="noreferrer"
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
    </>
  );
}

export default Home;