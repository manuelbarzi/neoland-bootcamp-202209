import log from '../utils/coolog'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentLists from '../components/AppointmentLists'
import { useState } from 'react'

function Pension() {
    log.info('Appointment -> render')
    const [appointments, setAppointments] = useState([]) // Para recoger los datos del Formulario

    const handleOnNewAppointment = (appointment) => {
        setAppointments([...appointments, appointment])
    }

    // useEffect(() => {
    //     retrieveAppointments(sessionStorage.token, (error, appointments) => {
    //         setAppointments(appointments)
    //     })
    // }, [])

    return <>
        <div className=''>
            < AppointmentForm
                // appointments={appointments} //*Props
                onNewAppointment={handleOnNewAppointment} //*Props
            />
            < AppointmentLists
                appointments={appointments} //*Props
            />
        </div>
    </>

}

export default Pension