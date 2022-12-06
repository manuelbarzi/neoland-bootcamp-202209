import log from '../utils/coolog'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentLists from '../components/AppointmentLists'
import { useState } from 'react'

function Pension() {
    log.info('Appointment -> render')
    const [appointments, setAppointments] = useState([]) // Para recoger los datos del Formulario


    return <>
        <div className=''>
            < AppointmentForm
                appointments={appointments} //*Props
                setAppointments={setAppointments} //*Props
            />
            < AppointmentLists
                appointments={appointments} //*Props
            />
        </div>
    </>

}

export default Pension