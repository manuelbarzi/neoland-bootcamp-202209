import log from '../utils/coolog'
import AppointmentForm from '../components/AppointmentForm'
import AppointmentLists from '../components/AppointmentLists'
import { useState } from 'react'

function Pension() {
    log.info('Appointment -> render')
    const [appointmentsChange, setAppointmentsChange] = useState() //* Para recoger todos los datos del Formulario
    const [appointments, setAppointments] = useState([]) //*Para pasar citas
    const [appointment, setAppointment] = useState({})
    const handleOnNewAppointment = () => {
        setAppointmentsChange(Date.now())
    }

    return <>
        <div className=''>
            < AppointmentForm
                onNewAppointment={handleOnNewAppointment} //*Props
                setAppointments = {setAppointments}//*Props
                appointment={appointment}//*Props
            />
            < AppointmentLists
                appointmentsChange={appointmentsChange} //*Props
                setAppointments={setAppointments} //*Props
                setAppointment={setAppointment}
                appointments={appointments}
            />
        </div>
    </>

}

export default Pension