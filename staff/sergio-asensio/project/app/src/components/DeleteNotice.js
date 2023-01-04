import deleteNotice from '../logic/deleteNotice'

export default function ({onDeleted, onClose, notice }) {
  
    const confirmDeleteNotice = event => {
        event.preventDefault()

        try {
            deleteNotice(sessionStorage.token, notice.id)
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
        <p>Are you sure you want to delete this notice</p>
        <div className="flex gap-2" >
            <button onClick={onClose}>Cancel</button>
            <button onClick={confirmDeleteNotice}>Delete</button>
         </div>
    </div>
</div>
}
