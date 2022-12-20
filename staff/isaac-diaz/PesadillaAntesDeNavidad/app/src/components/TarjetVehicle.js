import log from '../utils/coolog'
import Button from './Button'
import DeleteVehicle from '../components/DeleteVehicle'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StatusVehicle from '../components/StatusVehicle'
// const [vehicle, setVehicles] = useState

export default function ({ vehicle, refreshVehicles }) {
    log.info('Tarjet -> render')
    const [vehicleToDelete, setVehicleToDelete] = useState()

    useEffect(() => {
        // calculateNextInspectionDate()
    })

    const onDeleted = () => {
        setVehicleToDelete()
        refreshVehicles()
    }

    const openDeleteVehicle = vehicleId => {
        setVehicleToDelete(vehicleId)
    }
    const closeDeleteVehicle = () => setVehicleToDelete()

    return <main className='flex flex-col items-center'>
        <div className='w-120 h-40 flex items-center border-2 border-black m-4 gap-2 rounded-xl shadow-xl shadow-pink-600'>
            <Link className='m-4 flex items-center cursor-pointer' to={`/stadistics/${vehicle.id}`} >
                <div>
                    <label className='underline text-lg'>Brand</label>
                    <p>{vehicle.brand}</p>
                    <label className='underline text-lg'>Model</label>
                    <p>{vehicle.model}</p>
                    <label className='underline text-lg'>Fuel type</label>
                    <p>{vehicle.fuelType}</p>
                </div>
                <div className='flex flex-col mt-0 m-6'>                   
                    <label className='underline text-lg'>License</label>
                    <p>{vehicle.license}</p>
                    <label className='underline text-lg'>Kms</label>
                    <p>{vehicle.kms}</p>
                </div>
            </Link>
            <div className='flex self-end mb-2 mr-2'>
            <Button onClick={() => openDeleteVehicle(vehicle.id)}>Delete</Button>            
            </div>
            {vehicleToDelete && <DeleteVehicle onClose={closeDeleteVehicle} vehicleToDelete={vehicleToDelete} onDeleted={onDeleted} />}
        </div>
    </main >
}
