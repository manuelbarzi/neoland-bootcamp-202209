import deleteList from '../logic/deleteList'

export default function ({ listId, onDeleted, onClose }) {
    const confirmDeletePost = event => {
        event.preventDefault()

        try {
            deleteList(sessionStorage.token, listId)
                .then(() => onDeleted())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="bg-[white] p-5 rounded-xl flex flex-col items-end gap-2 dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <p>Are you sure you want to delete this list?</p>
            <div className="flex gap-5" >
                <button className='bg-gray-300 w-20 rounded-md border border-black' onClick={onClose}>Cancel</button>
                <button className='bg-red-500 w-20 rounded-md border border-black' onClick={confirmDeletePost}>Delete</button>
            </div>
        </div>
    </div>
}