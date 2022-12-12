import log from '../utils/coolog'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentLists from '../components/AppointmentLists'
import { useState } from 'react'

function Pension() {
    log.info('Appointment -> render')
    const [appointmentsChange, setAppointmentsChange] = useState() // Para recoger los datos del Formulario
    const handleOnNewAppointment = () => {
        setAppointmentsChange(Date.now())
    }

    return <>
        <div className=''>
            < AppointmentForm
                onNewAppointment={handleOnNewAppointment} //*Props
            />
            < AppointmentLists
                appointmentsChange={appointmentsChange} //*Props
            />
        </div>
    </>

}

export default Pension