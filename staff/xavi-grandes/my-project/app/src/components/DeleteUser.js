
export default function ({ listId, onDeleted, onClose }) {
    const confirmDeleteUser = event => {
        event.preventDefault()
    }

    return <div className="bg-[#aaaa] fixed top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden" onClick={onClose}>
        <div className="w-4/5 bg-[white] p-5 rounded-xl flex flex-col items-end gap-2 dark:bg-black text-black dark:text-white" onClick={event => event.stopPropagation()}>
            <p>Are you sure you want to delete your account?</p>
            <div className="flex gap-5" >
                <button className='bg-gray-300 w-20 rounded-md border border-black' onClick={onClose}>Cancel</button>
                <button className='bg-red-500 w-20 rounded-md border border-black' onClick={confirmDeleteUser}>Delete</button>
            </div>
        </div>
    </div>
}