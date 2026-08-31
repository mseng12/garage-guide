function Favorites({
  favorites,
  setSelectedVehicle,
  removeFromFavorites,
}) {
  return (
    <section className="favorites-section">
      <h2>Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((vehicle) => (
            <div className="favorite-card" key={vehicle.id}>
              <p>
                {vehicle.year} {vehicle.make} {vehicle.model}
              </p>

              <button onClick={() => setSelectedVehicle(vehicle)}>
                View Vehicle
              </button>

              <button onClick={() => removeFromFavorites(vehicle.id)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;