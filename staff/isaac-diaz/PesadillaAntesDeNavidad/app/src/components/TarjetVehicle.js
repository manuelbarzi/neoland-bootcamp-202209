import Button from './Button'
import retrieveVehicle from '../logic/retrieveVehicle'



const openDeleteVehicle = vehicleId => setVehicleIdToDelete()

const closeDeletePost = () => setVehicleIdToDelete()

const handleVehicleToDeleted = () => {
    try{
        retrieveVehicles(sessionStorage.token, vehicles)
          .then(vehicles => {
            setVehicleIdToDelete()
            setVehicles(vehicles)
          })
    } catch (error) {
        alert(error.message)
    }
}


export default function TarjetVehicle({ vehicle }) {

       return <main>        
        <div className='w-80 flex items-center border-2 border-black m-4 gap-2 rounded-xl'>
           <div> 
            <label>Brand</label>
            <p>{vehicle.brand}</p>
            <label>Model</label>
            <p>{vehicle.model}</p>
            </div>
            <label>Type</label>
            <p>{vehicle.type}</p>
            <div>
            <label>License</label>
            <p>{vehicle.license}</p>
            <label>Kms</label>
            <p>{vehicle.kms}</p>
            </div>
            <Button onClick={() => openDeleteVehicle(vehicle.id)} className='flex'>Delete</Button>
            <Button>Edit</Button>
        </div>
    </main>
}