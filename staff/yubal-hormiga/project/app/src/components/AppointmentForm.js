import log from '../utils/coolog'
import { useState } from 'react'
function AppointmentForm({setAppointments, appointments}) {
    log.info('AppoimentForm -> render')

    //*States */
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [text, setText] = useState('')

    //*Eventos */
    const appointmentTitle = event => setTitle(event.target.value)
    const appointmentDate = event => setDate(event.target.value)
    const appointmentTime = event => setTime(event.target.value)
    const appointmentText = event => setText(event.target.value)

    const submitCreateAppointment = event => {
        event.preventDefault()
        console.log('writing')

        //*Creamos un Objeto con todos los valores no hace falta añadir el valor ya que es el mismo.
        const objectAppointment ={
            title,
            date,
            time,
            text,
        }
        // console.log(objectAppoiment)
        setAppointments([...appointments,objectAppointment])

        setTitle('')
        setDate('')
        setTime('')
        setText('')
    } 
    return <>
        <form className=' rounded-lg p-2 mb-4 ' onSubmit={submitCreateAppointment}>
            <div className='flex shadow-md mb-3 '>
                <label htmlFor='appointment' className=' w-20 font-semibold text-lg flex justify-start'>Cita</label>
                <input id='appointment' className='text-center w-full font-semibold text-lg  placeholder-gray-500 ' type='text' placeholder='Nombre de  Cita' value={ title } onChange={appointmentTitle}/>  {/*  value ->Para recoger nombre de la Cita Onchange como hicimos con el edit de post- para recoger los cambios */}
                 
            </div>
            <div className='flex shadow-md mb-3'>
                <label htmlFor='date' className='flex justify-start w-20 font-semibold text-lg'>Fecha</label>
                <input id='date' className=' w-full font-semibold text-lg text-center' type='date' value={date} onChange={appointmentDate} />
                <input id='time' type="time" className='w-full font-semibold text-lg text-center'  value={time} onChange={appointmentTime} />
            </div>
            <div className='flex shadow-md mb-3'>
                <label htmlFor='text' className='flex justify-start w-20 font-semibold text-lg'>Texto</label>
                <textarea id='text' className='w-full text-center font-semibold text-lg  placeholder-gray-500 ' placeholder='Describe la cita'value={text} onChange={appointmentText} />
            </div>

            <input type='submit' className='font-medium py-1 px-5 bg-green-600 text-white  hover:bg-gray-700 rounded-md cursor-pointer' value='Añadir Cita' />
        </form>
    </>

}

export default AppointmentForm