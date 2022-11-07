const { useState } = React

function Detail(props) {
    const [vehicle, setVehicle] = useState(props.vehicle)// recibo el vehiculo y actualizo el estado


    return <div>
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">Name:</h2><p className="font-medium">{vehicle.name}</p>
        </section>
        <img src={vehicle.image} />
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">Year:</h2><p className="font-medium">{vehicle.year}</p>
        </section>
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">Color:</h2><p className="font-medium">{vehicle.color}</p>
        </section>
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">Maker:</h2><p className="font-medium">{vehicle.maker}</p>
        </section>
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">Collection:</h2><p className="font-medium">{vehicle.collection}</p>
        </section>
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">Style:</h2><p className="font-medium">{vehicle.style}</p>
        </section>
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">Description:</h2><p className="font-medium">{vehicle.description}</p>
        </section>
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">Price:</h2><p className="font-medium">{vehicle.price}</p>
        </section>
        <section className="flex flex-row gap-2">
            <h2 className="font-extrabold">URL:</h2>
            <a className="font-extrabold text-blue-600" href={vehicle.url} target="_blank">Link</a>
        </section>
    </div>
}


