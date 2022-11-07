const { useState } = React

function Search() {
    const [vehicles, setVehicles] = useState()

    const handleSearch = event => {
        event.preventDefault()

        const { value: query } = event.target.query

        try {
            searchVehicles(query, (error, vehicles) => {
                if (error) {
                    alert(error.message)
    
                    return // early return
                }
    
                setVehicles(vehicles)
            })
        } catch(error) {
            alert(error.message)
        }
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
                            <img src={vehicle.thumbnail} />
                            <p>{vehicle.price}</p>
                        </li>)}
                    </ul>
        }
    </main>
}