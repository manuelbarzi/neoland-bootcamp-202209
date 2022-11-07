const { useState } = React

function Search(props) {
    const [vehicles, setVehicles] = useState()

    const handleSearch = event => {
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
        } catch(error) {
            alert(error.message)
        }
    }

    const handleNavigateToDetail = vehicleId => props.onNavigateToDetail(vehicleId)

    return <main>
        <form onSubmit = {handleSearch}>
            <input type = "text" name = "query" placeholder = "criteria" />
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
                        {vehicles.map(vehicle => <li key = {vehicle.id} onClick = {() => handleNavigateToDetail(vehicle.id)}>
                            <h2>{vehicle.name} ({vehicle.id})</h2>
                            <img src = {vehicle.thumbnail} />
                            <p>{vehicle.price}</p>
                        </li>)}
                    </ul>
        }
    </main>
}