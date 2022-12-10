import log from '../utils/coolog'
import { useState } from 'react'
import createAppointment from '../logic/createAppointment'

function AppointmentForm({ onNewAppointment,}) {
    log.info('AppoimentForm -> render')

    //*States */
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [body, setBody] = useState('')

    //*Eventos */
    const handleChangeName = event => setTitle(event.target.value)
    const handleChangeDate = event => setDate(event.target.value)
    const handleChangeText = event => setBody(event.target.value)

    const submitCreateAppointment = event => {
        event.preventDefault()
        // console.log('writing')

        createAppointment(sessionStorage.token, title, body, date, (error) => {
            if (error) {
                //TODO use show alert
                alert(error.message)

                return
            }

            //*Creamos un Objeto con todos los valores no hace falta añadir el valor ya que es el mismo.
            const appointment = {
                title,
                date,
                body,
            }

            onNewAppointment(appointment)

            setTitle('')
            setDate('')
            setBody('')
        })
        // console.log(objectAppoiment)
    }
    return <>
        <form className=' rounded-lg p-2 mb-4 ' onSubmit={submitCreateAppointment}>
            <div className='flex shadow-md mb-3 '>
                <label htmlFor='appointment' className=' w-20 font-semibold text-lg flex justify-start'>Cita</label>
                <input id='appointment' className='text-center w-full font-semibold text-lg  placeholder-gray-500 ' type='text' placeholder='Nombre de  Cita' value={title} onChange={handleChangeName} />  {/*  value ->Para recoger nombre de la Cita Onchange como hicimos con el edit de post- para recoger los cambios */}

            </div>
            <div className='flex shadow-md mb-3'>
                <label htmlFor='date' className='flex justify-start w-20 font-semibold text-lg'>Fecha</label>
                <input type="datetime-local" className='w-full font-semibold text-lg text-center' value={date} onChange={handleChangeDate} />
                
            </div>
            <div className='flex shadow-md mb-3'>
                <label htmlFor='text' className='flex justify-start w-20 font-semibold text-lg'>Texto</label>
                <textarea id='text' className='w-full text-center font-semibold text-lg  placeholder-gray-500 ' placeholder='Describe la cita' value={body} onChange={handleChangeText} />
            </div>

            <input type='submit' className='font-medium py-1 px-5 bg-green-600 text-white  hover:bg-gray-700 rounded-md cursor-pointer' value='Añadir Cita' />
        </form>
    </>

}

export default AppointmentForm