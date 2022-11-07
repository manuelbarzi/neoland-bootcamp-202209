const { useState, useEffect } = React

function Detail(props) {
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        try {
            detailVehicle(props.vehicleId, (error, vehicle) => {
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
            <h2>{vehicle.name}</h2>
            <img src="https://media.mattel.com/root/HWCarsCatalog/Web/MainImage/FYF63_W_19_003.png" />
            <p>Price: {vehicle.price}</p>
            <p>Collection: {vehicle.collection}</p>
            <p>Color: {vehicle.color}</p>
            <p>Description: {vehicle.description}</p>
            <p>Maker: {vehicle.maker}</p>
            <p>Type: {vehicle.style}</p>
            <p>Year: {vehicle.year}</p>
            <a href="https://play.hotwheels.com/es-es/collection/detail?carId=FYF63" target='_blank'>Go to Play hotwheels</a>
        </> :
            <p>Loading</p>
        }
    </main>
}