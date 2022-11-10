const { useState } = React

function Search(props) {
    const [vehicles, setVehicles] = useState()

    const handleSearchClick = event => {
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

    const handleVehicleClick= (event, vehicleId) =>{
        event.preventDefault()

       
        try {
            detailVehicle(vehicleId, (error, vehicle) => {
                if (error) {
                    alert(error.message)

                    return
                }
                props.onVehicleClick(vehicle)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <main className="flex flex-col items-center">
        <form onSubmit={handleSearchClick}>
            <input type="text" name="query" />
            <button>🔎</button>
        </form>
        {!vehicles ? <></> :
            vehicles.length === 0 ? <p>No results</p> :
                vehicles.map(vehicle =>
                    <section key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                      <a href="" onClick={()=> handleVehicleClick(event, vehicle.id)}><img src={vehicle.thumbnail} /></a>
                        <p>{vehicle.price}</p>
                    </section>
                )}
    </main>
}