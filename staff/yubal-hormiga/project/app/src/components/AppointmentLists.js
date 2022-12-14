import log from '../utils/coolog'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import retrieveAppointments from '../logic/retrieveAppointments'
import UpdateAppointment from './UpdateAppointment'
import DeleteAppointment from './DeleteAppointment'

function AppointmentLists({ appointmentsChange }) {
  const [appointments, setAppointments] = useState([])
  const [updateAppointment, setUpdateAppointment] = useState()
  const [appointmentIdToDelete, setAppointmentIdToDelete] = useState()


  useEffect(() => {
    log.info('AppoimentLists -> render')

    retrieveAppointmentsHandler()
  }, [appointmentsChange])

  const retrieveAppointmentsHandler = () => {
    try {
      retrieveAppointments(sessionStorage.token)
        .then(appointments => setAppointments(appointments))
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }

  const handleUpdateClose = () => {
    setUpdateAppointment()
  }

  const handleUpdated = () => {
    retrieveAppointmentsHandler()

    setUpdateAppointment()
  }

  const openDeleteAppointment = appointmentId => setAppointmentIdToDelete(appointmentId)

  const closeDeleteAppointment = () => setAppointmentIdToDelete()

  const handleAppointmentDeleted = () => {
    try {
      retrieveAppointments(sessionStorage.token)
      .then(appointments => {
        setAppointmentIdToDelete()
        setAppointments(appointments)
      })
      .catch((error) => {
        alert(error.message)
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return <>
    {appointments.map((appointment) => {
      return (
        <div className='rounded-lg shadow-md flex justify-between gap-5 pb-1'>

          <div className=''>
            <p className='font-semibold text-lg flex flex-row'>Cita: <spam>{appointment.title}</spam></p>
          </div>

          <div className='' >
            <p className='font-semibold text-lg flex flex-row'>{appointment.date.toGMTString()}</p>
          </div>

          <div>
            <p className='font-semibold text-lg '>{appointment.body}</p>
          </div>

          <div className=''>
            <div className='flex flex-col self-end gap-1'>
              <button onClick={() => setUpdateAppointment(appointment)} className='bg-green-400  rounded-md p-1' type='button'><AiOutlineEdit size='1rem' /></button>
              <button onClick={() => openDeleteAppointment(appointment.id)} className='bg-red-600  rounded-md p-1' type='button'><AiOutlineDelete size='1rem' /></button>
            </div>
          </div>

        </div>

      )
    })}
    {updateAppointment && <UpdateAppointment appointment={updateAppointment} onClose={handleUpdateClose} onUpdated={handleUpdated} />}
    {appointmentIdToDelete && <DeleteAppointment appointmentId={appointmentIdToDelete} onDeleted={handleAppointmentDeleted} onClose={closeDeleteAppointment} />}
  </>

}

export default AppointmentLists