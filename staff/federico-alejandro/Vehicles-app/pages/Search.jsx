const { useState } = React

function Search(props) {
    const [vehicles, setVehicles] = useState()

    const handleSearch = event => {
        event.preventDefault()
        //del evento(event) me traigo el formulario(target), del form el input(query), del input el value
        //y creo una variable que se llama query y guardo ese value
        const { value: query } = event.target.query
      // manejo de errores en primer lugar, si no los hay, enviame los vehiculos 
        searchVehicles(query, (error, vehicles) => {
            if (error) {
                alert(error.message)//Error handling en caso de error mostrame el mensaje y salgo de la funcion

                return
            }

            setVehicles(vehicles)//si no hay error mostrame los vehiculos 
        })
    }
    const handleVehicleClick = (event, vehicleId) => {
        event.preventDefault()
  // creo un evento medianto un onClick y paso como parametro el id del vehiculo
        retrieveVehicle(vehicleId, (error, vehicle) => { //devuelvo el vehiculo con el id que pido mas el manejo de errores
            if (error) {
                alert(error.message)

                return
            }
     //si no hay errores, pero el resultado como parameto mediante una props
            props.onDetail(vehicle) // de hijo a padre
        })

    }
    return <main>
        <form onSubmit={handleSearch}>
            <input className="border-4 border-black rounded-lg m-4" type="text" name="query" placeholder="criteria" />
            <button>🔍</button>
        </form>

        { //si no esta definido no mostres nada
            !vehicles ?
                <></>
                :
                !vehicles.length ?// sino se encuentra nada mostrame que no hay resultado
                    <p>no results</p>
                    :
                    <ul>
    {/**hago un mapeo de todos los vehiculos y de cada vehiculo quiero el nombre, la imagen y el precio en forma de lista */}
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