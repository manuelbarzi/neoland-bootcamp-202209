const { useState } = React

function Search(props) {
    const [vehicles, setVehicles] = useState()

    const handleSearchVehicles = event => {
        event.preventDefault()

        const { value: query } = event.target.query

        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {
                    alert(error.message)

                    return
                }
                setVehicles(vehicles)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleVehicleClick = (event, vehicleId) => {
        event.preventDefault()

        props.onVehicleClick(vehicleId)
    }

    return <main className="flex flex-col items-center">
        <form onSubmit={handleSearchVehicles}>
            <input type="text" name="query" className="border-solid border-black border-2" />
            <button>🔎</button>
        </form>

        {!vehicles ? <></> :
            vehicles.length === 0 ? <p>Result dont found</p> :
                vehicles.map(vehicle => <article key={vehicle.id}> <h2>{vehicle.name} ({vehicle.id})</h2>
                    <a href='' onClick={() => handleVehicleClick(event, vehicle.id)}><img src={vehicle.thumbnail} /> </a>
                    <p>Price: {vehicle.price}</p>
                </article>)}
    </main>
}