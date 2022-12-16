/* eslint-disable import/no-anonymous-default-export */
import log from '../utils/coolog'
import deleteAppointment from '../logic/deleteAppointment'
import Button from './Button'

export default function ({ appointmentId, onDeleted, onClose }) {
    log.info('DeleteAppointment -> render')

    const confirmDeleteAppointment = event => {
        event.preventDefault()

        try {
            deleteAppointment(sessionStorage.token, appointmentId)
                .then(() => onDeleted())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="'bg-[#aaaa] absolute  top-0 right-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="bg-cyan-700 text-white font-bold p-5 rounded-sm flex flex-col items-end gap-2 " onClick={event => event.stopPropagation()}>
            <p>Segur@ que quieres eliminar la Cita?</p>
            <div className="flex gap-2 p-2" >
                 <Button className=' border-white bg-sky-900 hover:bg-sky-700' onClick={onClose}>Cancel</Button>
                <Button className=' border-white bg-sky-900 hover:bg-sky-700' onClick={confirmDeleteAppointment}>Delete</Button>
            </div>
        </div>
    </div>
}