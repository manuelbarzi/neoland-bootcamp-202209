import log from '../utils/coolog'
import { useState } from 'react'
function AppoimentForm({setAppoiments, appoiments}) {
    log.info('AppoimentForm -> render')

    //*States */
    const [appoiment, setAppoiment] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [text, setText] = useState('')

    //*Eventos */
    const appoimentName = event => setAppoiment(event.target.value)
    const appoimmentDate = event => setDate(event.target.value)
    const appoimentTime = event => setTime(event.target.value)
    const appoimentText = event => setText(event.target.value)

    const submitCreateAppoiment = event => {
        event.preventDefault()
        console.log('escribiendo...')

        //*Creamos un Objeto con todos los valores no hace falta añadir el valor ya que es el mismo.
        const objectAppoiment ={
            appoiment,
            date,
            time,
            text
        }
        // console.log(objectAppoiment)
        setAppoiments([...appoiments,objectAppoiment])

        setAppoiment('')
        setDate('')
        setTime('')
        setText('')
    } 
    return <>
        <form className=' rounded-lg p-2 mb-4 ' onSubmit={submitCreateAppoiment}>
            <div className='flex shadow-md mb-3 '>
                <label htmlFor='appoiment' className=' w-20 font-semibold text-lg flex justify-start'>Cita</label>
                <input id='appoiment' className='text-center w-full font-semibold text-lg  placeholder-gray-500 ' type='text' placeholder='Nombre de  Cita' value={appoiment} onChange={appoimentName}/>  {/*  value ->Para recoger nombre de la Cita Onchange como hicimos con el edit de post- para recoger los cambios */}
                 
            </div>
            <div className='flex shadow-md mb-3'>
                <label htmlFor='date' className='flex justify-start w-20 font-semibold text-lg'>Fecha</label>
                <input id='date' className=' w-full font-semibold text-lg text-center' type='date' value={date} onChange={appoimmentDate} />
                <input id='time' type="time" className='w-full font-semibold text-lg text-center'  value={time} onChange={appoimentTime} />
            </div>
            <div className='flex shadow-md mb-3'>
                <label htmlFor='text' className='flex justify-start w-20 font-semibold text-lg'>Texto</label>
                <textarea id='text' className='w-full text-center font-semibold text-lg  placeholder-gray-500 ' placeholder='Describe la cita'value={text} onChange={appoimentText} />
            </div>

            <input type='submit' className='font-medium py-1 px-5 bg-green-600 text-white  hover:bg-gray-700 rounded-md cursor-pointer' value='Añadir Cita' />
        </form>
    </>

}

export default AppoimentForm