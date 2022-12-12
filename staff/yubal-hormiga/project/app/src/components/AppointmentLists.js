import log from '../utils/coolog'
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import retrieveAppointments from '../logic/retrieveAppointments'

function AppointmentLists({ appointmentsChange }) {
  // console.log(appointments)
  const [appointments, setAppointments] = useState([])
  log.info('AppoimentLists -> render')

  useEffect(() => {
    retrieveAppointmentsHandler()
  }, [])

  useEffect(() => {
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
  return <>

    {appointments.map((appointment) => {
      return (
        <div className='rounded-lg shadow-md flex justify-between gap-5 pb-1'>

          <div className=''>
            <p className='font-semibold text-lg flex flex-row'>Cita: <spam>{appointment.title}</spam></p>
          </div>

          <div className='' >
            <p className='font-semibold text-lg flex flex-row'>{appointment.date}</p>
          </div>

          <div>
            <p className='font-semibold text-lg '>{appointment.body}</p>
          </div>

          <div className=''>
            <div className='flex flex-col self-end gap-1'>
              <button className='bg-green-400  rounded-md p-1' type='button'><AiOutlineEdit size='1rem' /></button>
              <button className='bg-red-600  rounded-md p-1' type='button'><AiOutlineDelete size='1rem' /></button>
            </div>
          </div>

        </div>

      )
    })}

  </>

}

export default AppointmentLists