function VehicleCard({ vehicle, onView, onFavorite }) {
    return (
        <article>
            <h2>
                {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>

            <p>{vehicle.type}</p>

            <button onClick={onView}>
                View Vehicle
            </button>

            <button onClick={() => onFavorite(vehicle)}>
                Add to Favorites
            </button>
        </article>
    );
}

export default VehicleCard;
