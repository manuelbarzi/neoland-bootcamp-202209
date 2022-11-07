const { useEffect, useState } = React

function Detail(props) {
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        try {
            retrieveVehicle(props.vehicleId, (error, vehicle) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setVehicle(vehicle)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])
    
    return <main>
        {vehicle ? <>
            <h1>{vehicle.name} ({vehicle.id})</h1>
            <img src = {vehicle.image} />
            <p>{vehicle.price}</p>
            <p>{vehicle.description}</p>
            <p>{vehicle.style}</p>
            <p>{vehicle.year}</p>
        </> : <p>loading</p>}
    </main>
}