function VehicleCard ({ vehicle }) {
    return (
        <article>
            <h2>
                {vehicle.year} {vehicle.make} {vehicle.model}
            </h2>

            <p>{vehicle.type}</p>
        </article>
    );
}

export default VehicleCard;
