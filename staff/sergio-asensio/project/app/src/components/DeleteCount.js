// import deleteCount from '../logic/deleteCount'

export default function ({onDeleted, onClose }) {
  
    const confirmDeleteCount = e => {
        e.preventDefault()

        // try {
        //     deleteCount(sessionStorage.token)
        //         .then(() => {
        //              onDeleted()})
        //         .catch(error => alert(error.message))
        // } catch (error) {
        //     alert(error.message)
        // }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden"
    onClick={onClose}>
    <div className="p-5 rounded-xl flex flex-col items-end bg-red-200" onClick={event => event.stopPropagation()}>
        <button size="1.5rem" onClick={onClose} className="cursor-pointer"> -X-</button>
        <p>Are you sure to delete your Count?</p>
        <div className="flex gap-2" >
            <button onClick={onClose}>Cancel</button>
            <button onClick={confirmDeleteCount}>Delete</button>
         </div>
    </div>
</div>
}
