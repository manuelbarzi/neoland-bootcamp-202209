const { useState } = React
function Search(props) {

    const [vehicles, setVehicles] = useState()

    // OBTENEMOS INFORMACIÓN DEL SERVIDOR
    const handleSearch = (event) => {
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

    // OBTENEMOS INFORMACIÓN DEL SERVIDOR Y LA ENVIAMOS COMO PROP AL COMPO APP
    const handleVehicleClick = (event, vehicleId) => {
        log('INFO', 'Search: handleonVehicleClick')
        event.preventDefault()

        retrieveVehicle(vehicleId, (error, vehicle) => {
            if (error) {
                alert(error.message)
                return
            }
            props.onDetail(vehicle)
        })
    }

    return <>
        <main className="min-screen-full p-6 my-12 flex flex-col flex-wrap items-center justify-center text-center font-semibold">
            <form onSubmit={handleSearch}>
                <input type='text' name='query' placeholder='Criteria' className="m-12 px-2" />
                <button>
                    🔍
                </button>
            </form>

            {!vehicles ? <></> : !vehicles.length ? <p>No results</p> :
                <ul>
                    {vehicles.map(vehicle =>
                        <li key={vehicle.id} className="m-12">
                            <h2>{vehicle.name}</h2>
                            <img
                                src={vehicle.thumbnail}
                                onClick={() => handleVehicleClick(event, vehicle.id)} />
                            <p className="font-semibold">Price: {vehicle.price}</p>
                        </li>)
                    }
                </ul>
            }
        </main>
    </>
}