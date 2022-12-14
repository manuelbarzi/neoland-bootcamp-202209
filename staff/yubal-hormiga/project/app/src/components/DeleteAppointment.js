/* eslint-disable import/no-anonymous-default-export */
import deleteAppointment from '../logic/deleteAppointment'
import Button from './Button'

export default function ({ appointmentId, onDeleted, onClose }) {
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
        <div className="bg-[white] p-5 rounded-xl flex flex-col items-end gap-2 bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <p>Segur@ que quieres eliminar la Cita?</p>
            <div className="flex gap-2" >
                 <Button onClick={onClose}>Cancel</Button>
                <Button onClick={confirmDeleteAppointment}>Delete</Button>
            </div>
        </div>
    </div>
}