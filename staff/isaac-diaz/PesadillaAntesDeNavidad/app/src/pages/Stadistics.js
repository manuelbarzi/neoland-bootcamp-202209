// import retrieveVehicles from '../logic/retrieveVehicles'
// import Context from "../components/Context"
// import { useState, useEffect } from 'react'
// import log from '../utils/coolog'



// // module.exports = function stadistics() {
//     log.info('render -> myProfile')

//     const [vehicle, setVehicle] = useState()

//     useEffect(() => {
//         try {
//             retrieveVehicles(sessionStorage.token, vehicleId)
//                 .then(setVehicle(vehicle))
//                 .catch(error => {
//                     alert(error.message)

//                 })
//         } catch (error) {
//             alert(error.message)
//         }
//     })

//     return <main className='h-full'>
//         <div className='flex flex-col'>
//             <label>Brand</label>
//             <input />
//             <label>Model</label>
//             <input />
//             <label>Type</label>
//             <input />
//             <label>license</label>
//             <input />
//             <label>licenseDate</label>
//             <input />
//             <label>ITV</label>
//             <input />
//             <label>Revision oil</label>
//             <input />
//         </div>
//     </main>
// }