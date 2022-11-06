const { useState, useEffect } = React
function Detail(props) {

    const [vehicle, setVehicle] = useState(props.vehicle)

    return <main className="min-screen-full w-100 p-6 my-12 flex flex-col flex-wrap items-center justify-center text-center">
        <div className="text-center">
            {vehicle === props.vehicle && (
                <ul>
                    <li className="flex flex-col items-center">
                        <h2 className="font-semibold">{vehicle.name}</h2>
                        <img
                            src={vehicle.image} className="border-solid border-b-2 mt-2 border-black" />
                        <p className="font-semibold mt-2">Year</p>
                        <p className="">{vehicle.year}</p>
                        <p className="font-semibold mt-2">Color</p>
                        <p className="">{vehicle.color}</p>
                        <p className="font-semibold mt-2">Maker</p>
                        <p className="">{vehicle.maker}</p>
                        <p className="font-semibold mt-2">Collection</p>
                        <p className="">{vehicle.collection}</p>
                        <p className="font-semibold mt-2">Style</p>
                        <p className="">{vehicle.style}</p>
                        <p className="font-semibold mt-2">Description</p>
                        <p className=" ">{vehicle.description}</p>
                        <p className="font-semibold mt-2">Price</p>
                        <p className="">{vehicle.price}</p>
                        <p className="font-semibold mt-2">URL</p>
                        <p href="" className="">{vehicle.url}</p>
                    </li>
                </ul>
            )}
        </div>

    </main>
}