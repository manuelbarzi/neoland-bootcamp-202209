const { useState } = React

function Search(props) {
    const [vehicles, setVehicles] = useState()

    const handleSearch = event => {
        event.preventDefault()
        //A value le cambio el nombre por query y le asigno el valor query del formulario(event.target.query)
        const { value: query } = event.target.query

        searchVehicles(query, (error, vehicles) => {
            if (error) {
                alert(error.message)

                return
            }

            setVehicles(vehicles)
        })
    }
    const handleVehicleClick = (event, vehicleId) => {
        event.preventDefault()

        retrieveVehicle(vehicleId, (error, vehicle) => {
            if (error) {
                alert(error.message)

                return
            }

            props.onDetail(vehicle)
        })

    }
    return <main className="">
        <form onSubmit={handleSearch}>
            <input type="text" name="query" placeholder="criteria" />
            <button>🔍</button>
        </form>

        {
            !vehicles ?
                <></>
                :
                !vehicles.length ?
                    <p>no results</p>
                    :
                    <ul>
                        {vehicles.map(vehicle => <li>
                            <h2>{vehicle.name}</h2>
                            <a href="" onClick={() => handleVehicleClick(event, vehicle.id)}>
                                <img src={vehicle.thumbnail} /></a>
                            <p>{vehicle.price}</p>
                        </li>)}
                    </ul>
        }
    </main>
}