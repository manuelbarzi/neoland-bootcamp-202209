const { useState } = React

function App() {
    const [vehicles, setVehicles] = useState()

    const handleSearch = event => {
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

    return <main className="">
        <form className="flex justify-center" onSubmit={handleSearch}>
            <input type="text" name="query" placeholder="criteria" className="border border-black rounded-2xl pl-4" />
            <button>🔍</button>
        </form>
        {
            !vehicles ?
                <></>
                :
                !vehicles.length ?
                    <p>no results</p>
                    :
                    <ul className="flex flex-wrap justify-center">
                        {vehicles.map(vehicle => <div className=" bg-yellow-200 m-4 border border-black ">
                            <li>
                            <h2 className="font-bold uppercase">{vehicle.name}</h2>
                            <img src={vehicle.thumbnail} />
                            <p>{vehicle.price}</p>
                            </li>
                        </div>)}
                    </ul>
        }
    </main>
}