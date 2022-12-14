import deleteEvent from '../logic/deleteEvent'

export default function ({onDeleted, onClose, event}) {
  
    const confirmDeleteEvent = event => {
        event.preventDefault()

        try {
            deleteEvent(sessionStorage.token, event.id)
                .then(() => onDeleted())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
    onClick={onClose}>
    <div className="p-5 rounded-xl flex flex-col items-end bg-white dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
        <button size="1.5rem" onClick={onClose} className="cursor-pointer"> -X-</button>
        <p>Are you to DELETE this Event??</p>
        <div className="flex gap-2" >
            <button onClick={onClose}>Cancel</button>
            <button onClick={confirmDeleteEvent}>Delete</button>
         </div>
    </div>
</div>
}


{/* <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
<div className="bg-[white]  dark:bg-black p-5 rounded-xl flex flex-col items-end gap-2" onClick={event => event.stopPropagation()}>
    <p>Are you sure you want to delete this notice</p>
    <div className="flex gap-2" >
        <button onClick={onClose}>Cancel</button>
        <button onClick={confirmDeleteNotice}>Delete</button>
    </div>
</div>
</div> */}