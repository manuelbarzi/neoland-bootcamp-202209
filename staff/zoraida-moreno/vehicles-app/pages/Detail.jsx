const {useState} = React

function Detail(props) {
    const [vehicle, setVehicle] = useState(props.vehicle)

    const handleVehicle = (event, queryId) => {
        event.preventDefault()
        //returnVehicle(queryId, (error, vehicle))

    }
return<div>
    <h2>{vehicle.name}</h2>
    <img src={vehicle.image}/>
    <p>{vehicle.year}</p>
    <p>{vehicle.color}</p>
    <p>{vehicle.maker}</p>
    <p>{vehicle.collection}</p>
    <p>{vehicle.style}</p>
    <p>{vehicle.description}</p>
    <p>{vehicle.price}</p>
    <a href={vehicle.url} target="_blank">Link</a>

    </div>
}