import retrieveVehicle from '../logic/retrieveVehicle'
import { useState, useEffect } from 'react'
import log from '../utils/coolog'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import EditVehicle from '../components/EditVehicle'
// import nextInspectionOil from '../logic/helpers/calculateNextInspectionOil'
// import calculateNextItvDate from '../logic/helpers/calculateNextItvDate'

export default function Stadistics() {
    log.info('render -> myProfile')

    const [user, setUser] = useState()
    const [vehicle, setVehicle] = useState()
    const [editVehicleVisible, setEditVehicleVisible] = useState()

    const { vehicleId } = useParams()

    useEffect(() => {
        try {
            Promise.all([retrieveUser(sessionStorage.token), retrieveVehicle(sessionStorage.token, vehicleId)])
                .then(([user, vehicle]) => {
                    setUser(user)
                    setVehicle(vehicle)
                })
                .catch(error => {
                    alert(error.message)

                })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const openEditVisible = () => setEditVehicleVisible(true)

    const closeEditVisible = () => setEditVehicleVisible(false)

    const handleEditVehicle = () => {
        
        closeEditVisible()
    }

    return <main className='h-full flex items-center justify-center mt-6 border-4'>
        {user && <Header userName={user.name} />}
        {editVehicleVisible && <EditVehicle onClose={closeEditVisible} onEdited={handleEditVehicle} />}
        <div className='flex items-center justify-center border-black'>
            <div className='flex flex-col border-2'>
                <h2>Brand</h2>
                <input defaultValue={vehicle?.brand} />
                <h2>Model</h2>
                <input defaultValue={vehicle?.model} />               
            </div>
            <div className='flex flex-col border-2'>
                <h2>Type</h2>
                <select defaultValue={vehicle?.type}>
                    <option value='gasolina'>gasolina</option>
                    <option value='diesel'>diesel</option>
                </select>
                <h2>license</h2>
                <input defaultValue={vehicle?.license} />
                <h2>licenseDate</h2>
                <input defaultValue={vehicle?.licenseDate.slice(0, -17).split('-').reverse().join('/')} />
                <h2>kms</h2>
                <input defaultValue={vehicle?.kms} />
            </div>
            <div className='border-2'>
                <h2>Last ITV</h2>
                <input />
                <h2>Next ITV</h2>
                {/* <p>{calculateNextItvDate}</p> */}
                <h2>Last revision oil</h2>
                <input />
                <h2>Next Revision Oil</h2>
                {/* <p>{nextInspectionOil}</p> */}
                <h2>tire pressure</h2>
                <input />

            </div>
        </div>
        <div className='flex'>
        <button className='' onClick={openEditVisible} className='border-black'>Edit</button>    
        </div>
    </main>
}