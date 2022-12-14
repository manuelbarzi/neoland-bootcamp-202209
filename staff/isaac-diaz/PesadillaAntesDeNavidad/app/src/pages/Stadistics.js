import retrieveVehicle from '../logic/retrieveVehicle'
import { useState, useEffect } from 'react'
import log from '../utils/coolog'
import retrieveUser from '../logic/retrieveUser'

module.exports = function stadistics() {
    log.info('render -> myProfile')

    const [user, setUser] = useState()
    const [vehicle, setVehicle] = useState()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => {
                    setUser(user)

                    return retrieveVehicle(sessionStorage.token, vehicleId)
                })           
                .then(vehicle => setVehicle(vehicle))
                .catch(error => {
                    alert(error.message)

                })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <main className='h-full flex'>
        {user && <Header userName={user.name} />}
        <div className='flex flex-col'>
            <h2>Brand</h2>
            <input />
            <label>Model</label>
            <input />
            <label>Type</label>
            <input />
            <label>license</label>
            <input />
            <label>licenseDate</label>
            <input />
            <label>ITV</label>
            <input />
            <label>Revision oil</label>
            <input />
            <label>tire pressure</label>
        </div>
    </main>
}