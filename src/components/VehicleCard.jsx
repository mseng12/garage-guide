function VehicleCard({ vehicle, onView }) {
    return (
        <article>
            <h2>
                {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>

            <p>{vehicle.type}</p>

            <button onClick={onView}>
                View Vehicle
            </button>

        </article>
    );
}

export default VehicleCard;
