const { useState } = React
function Search(props) {

    const [vehicles, setVehicles] = useState()

    const handleSearch = (event) => {
        event.preventDefault()

        const { value: query } = event.target.query

        searchVehicles(query, (error, vehicles) => {
            if (error) {
                alert(error.message)

                return
            }

            setVehicles(vehicles)
        })
    }

    const handleVehicleClick = (event) => {
        log('INFO', 'Search: handleonVehicleClick')
        event.preventDefault()
        props.onVehicleClick()
    }

    return <main className="flex flex-col items-center min-screen-full">
        <form onSubmit={handleSearch}>
            <input type='text' name='query' placeholder='Criteria' />
            <button>
                🔍
            </button>
        </form>

        {!vehicles ? <></> : !vehicles.length ? <p>No results</p> :
            <ul>
                {vehicles.map(vehicle =>
                    <li key={vehicle.id}>
                        <h2>{vehicle.name}</h2>
                        <img
                            src={vehicle.thumbnail}
                            onClick={handleVehicleClick} />
                        <p>{vehicle.price}</p>
                    </li>)
                }
            </ul>
        }
    </main>
}