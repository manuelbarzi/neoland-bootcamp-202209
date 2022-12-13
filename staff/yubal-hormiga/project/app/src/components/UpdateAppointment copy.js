/* eslint-disable import/no-anonymous-default-export */
import updateAppointment from '../logic/updateAppointment'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import retrieveAppointment from '../logic/retrieveAppointment'
export default function ({ onUpdated, onClose, appointmentId }) {
    const [appointment, setAppointment] = useState()

    useEffect(() => {
        try {
            retrieveAppointment(sessionStorage.token, appointmentId, (error, appointment) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAppointment(appointment)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const submitUpdateAppointment = event => {
        event.preventDefault()

        const { title: { value: title }, body: { value: body }, date: { value: date }} = event.target

        try {
            updateAppointment(sessionStorage.token, appointmentId, title, body, date, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                onUpdated()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <AiOutlineCloseCircle size="1.5rem" onClick={onClose} className="cursor-pointer" />

            <form className="flex flex-col gap-2" onSubmit={submitUpdateAppointment}>
                <div className=''>
                    <p className='font-semibold text-lg flex flex-row' defaultValue={appointment?.title}>Cita: <spam></spam></p>
                </div>

                <div className='' >
                    <p className='font-semibold text-lg flex flex-row' defaultValue={appointment?.body}></p>
                </div>

                <div>
                    <p className='font-semibold text-lg ' defaultValue={appointment?.date}></p>
                </div>
    
            </form>
        </div>
    </div>
}

// post && post.text -> post?.text